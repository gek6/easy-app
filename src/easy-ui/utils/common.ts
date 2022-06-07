/*
 * @Date: 2022-06-07 17:47:47
 * @LastEditors: YuanBo
 * @Author: YuanBo
 * @LastEditTime: 2022-06-07 17:50:26
 * @FilePath: /easy-app/src/easy-ui/utils/common.ts
 */
export function getDeepValue(obj: object, path: string) {
  const paths = path.split(".");
  let result:any = obj;
  for (let i = 0; i < paths.length; i++) {
    // 判断result是否为对象
    if (typeof result !== "object") {
      return result;
    } else {
      result = result[paths[i]];
    }
  }
  return result;
}
