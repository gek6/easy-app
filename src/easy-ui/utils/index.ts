import qs from "qs";
import { Storage } from "./storage";

export function waitPromise<
    T,
    Args extends any[],
    Fn extends (this: THIS, ...args: Args) => Promise<T>,
    THIS
    >(fn: Fn): Fn {
    let promise: Promise<T> | undefined;
    return function (this: THIS, ...params: Args) {
        if (!promise) {
            promise = fn.apply(this, params).then(
                (res) => {
                    promise = undefined;
                    return res;
                },
                (e) => {
                    promise = undefined;
                    return Promise.reject(e);
                }
            );
        }

        return promise!;
    } as Fn;
}

/**
 * 为函数添加缓存，返回的 fn 为目标函数的包装，evict 为清除缓存方法
 * @param ns 缓存的命名空间
 * @param fn 被缓存的异步函数
 * @param argsSerialize 函数参数序列化
 * @param expiresIn 缓存有效期，单位：秒
 */
export function cacheFn<
    T,
    Args extends any[],
    Fn extends (this: THIS, ...args: Args) => Promise<T>,
    THIS
    >(
    ns: string,
    fn: Fn,
    argsSerialize: (this: THIS, ...args: Args) => any,
    expiresIn?: number | ((this: THIS, ...args: Args) => number)
): [Fn, (key?: string) => void, Storage] {
    fn = waitPromise<T, Args, Fn, THIS>(fn);

    const cacheStorage = new Storage(ns);

    const evictCache = (key: any) => {
        if (!argsSerialize) key = "_root_";
        if (key === undefined) cacheStorage.clear();
        else cacheStorage.remove(key);
    };

    const cachedFn = async function (this: THIS, ...args: Args) {
        const key = argsSerialize ? argsSerialize.apply(this, args) : "_root_";
        const cached = cacheStorage.get<T>(key);
        if (cached !== null) return Promise.resolve(cached);
        const r = await fn.apply(this, args);
        const exp =
            typeof expiresIn === "function"
                ? expiresIn.apply(this, args)
                : typeof expiresIn === "number"
                    ? expiresIn
                    : undefined;
        cacheStorage.set(key, r, exp);
        return r;
    };
    return [cachedFn as Fn, evictCache, cacheStorage];
}

/**
 * 当 visitTree 的 visit 返回该值时，停止遍历该节点及其子树（仅 !deepFirst 时有效）
 */
export const VISIT_CONTINUE = Object.freeze({});
/**
 * 当 visitTree 的 visit 返回该值时，在遍历完该节点及其子树后，停止（仅 !deepFirst 时有效）
 */
export const VISIT_BREAK = Object.freeze({});

export type TreeNodeVisitor<T, RT> = (
    node: T,
    index: number,
    parents: T[],
    depth: number,
    siblings: T[]
) => RT | undefined | typeof VISIT_CONTINUE | typeof VISIT_BREAK;

export function visitTree<T, CK extends string, RT>(
    list: T[],
    visit: TreeNodeVisitor<T, RT>,
    deepFirst?: boolean,
    childrenKey: CK = "children" as CK,
    parents: T[] = [],
    depth = 0
) {
    let ret: any;
    for (let i = 0; i < list.length; i++) {
        let stopFlag = false;
        const e = list[i] as any;
        if (!deepFirst) ret = visit(e, i, parents, depth, list);
        if (ret === VISIT_CONTINUE) continue;
        if (ret === VISIT_BREAK) {
            ret = undefined;
            stopFlag = true;
        }
        if (ret !== undefined) break;
        if (e[childrenKey as string]?.length > 0) {
            const parents_ = [...parents, e];
            ret = visitTree(
                e[childrenKey as string],
                visit,
                deepFirst,
                childrenKey,
                parents_,
                depth + 1
            );
            if (ret !== undefined) break;
        }
        if (stopFlag) break;
        if (deepFirst) ret = visit(e, i, parents, depth, list);
        if (ret !== undefined) break;
    }
    if (ret === VISIT_CONTINUE) return undefined;
    return ret as RT | undefined;
}

export const buildURL = (url: string, q?: any) => {
    if (q === undefined) return url;
    const queryString = qs.stringify(q);
    if (queryString) {
        if (url.lastIndexOf("?") === -1) {
            url += "?";
        }
        const lastChar = url.slice(url.length - 1);
        if (lastChar !== "?" && lastChar !== "&") url += "&";
        url += queryString;
    }
    return url;
};

export const eatError = async (e: any) => {
    try {
        return await e;
    } catch (e) {
        if (import.meta.env.DEV) {
            console.log("eatError", e);
        }
        // ignore
    }
};
