/*
 * @Date: 2022-05-26 15:39:09
 * @LastEditors: YuanBo
 * @Author: YuanBo
 * @LastEditTime: 2022-06-01 14:07:55
 * @FilePath: /easy-app/src/easy-ui/components/es-list/types.ts
 */
interface listActionsType {
  // 根据下标删除指定列表项
  removeItemByIndex: (index: number) => void;
  // 设置列表项数据
  setListData: (listData: listItem[]) => void;
  // 设置标题
  setTitle: (title: string) => void;
}
interface listItem {
  // 列表图标
  icon?: string;
  // 列表标题
  label: string;
  // 是否显示右箭头
  rightArrow?: boolean;
  // 自定义右边图标
  customRightIcon?: string;
  // 跳转路由
  path?: string;
  // 跳转前置函数 返回true则跳转
  beforeRoute?: (...args: any[]) => boolean;
  // 小程序openType https://uniapp.dcloud.io/component/button.html
  openType?:
    | "feedback"
    | "share"
    | "getUserInfo"
    | "contact"
    | "getPhoneNumber"
    | "launchApp"
    | "openSetting"
    | "getAuthorize"
    | "contactShare"
    | "lifestyle"
    | "openGroupProfile";
  // 扩展能力成功回调
  openSuccess?: (...args: any[]) => any;
}
interface listProps {
  title?: string;
  list: listItem[];
}
type useEslistReturn = [(actions: listActionsType) => void, listActionsType];
interface openTypeEvent {
  getphonenumber: (...args: any[]) => any;
  getuserinfo: (...args: any[]) => any;
  opensetting: (...args: any[]) => any;
  launchapp: (...args: any[]) => any;
}
export { listActionsType, listItem, listProps, useEslistReturn, openTypeEvent };
