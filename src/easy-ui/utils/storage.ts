type StorageItem<T> = [T | null, number];

export class Storage {
    constructor(private ns: string) {}

    private key(key: string) {
        return `${this.ns}:${key}`;
    }

    /**
     * @param expiresIn 单位：秒
     */
    set<T>(key: string, value: T, expiresIn?: number): T | null {
        if (expiresIn !== undefined && expiresIn <= 0) throw new Error();
        key = this.key(key);
        const expiresAt =
            expiresIn === undefined ? 0 : Math.floor(Date.now() / 1000) + expiresIn;
        const item: StorageItem<T | undefined> = [value, expiresAt];
        uni.setStorageSync(key, item);
        return value;
    }

    remove<T>(key: string): T | null {
        const v = this.get<T>(key);
        uni.removeStorageSync(this.key(key));
        return v;
    }

    get<T>(key: string): T | null {
        key = this.key(key);
        const item = uni.getStorageSync(key) as StorageItem<T>;
        if (!item || !Array.isArray(item)) {
            uni.removeStorageSync(key);
            return null;
        }
        const v = item[0];
        const e = item[1];
        if (typeof e === "number" && e > 0 && e < Math.floor(Date.now() / 1000)) {
            uni.removeStorageSync(key);
            return null;
        }
        return v;
    }

    clear() {
        const prefix = this.key("");
        uni
            .getStorageInfoSync()
            .keys.filter((e) => e.startsWith(prefix))
            .forEach((key) => {
                uni.removeStorageSync(key);
            });
    }
}
