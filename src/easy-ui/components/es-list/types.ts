/*
 * @Date: 2022-05-26 15:39:09
 * @LastEditors: YuanBo
 * @Author: YuanBo
 * @LastEditTime: 2022-05-26 18:32:33
 * @FilePath: /easy-app/src/easy-ui/components/es-list/types.ts
 */
interface listActionsType {
  // 根据下标删除指定列表项
  removeItemByIndex: (index: number) => void;
  // 设置列表项数据
  setListData: (listData: listItem[]) => void;
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
}
interface listProps {
  list: listItem[];
}
type useEslistReturn = [(actions: listActionsType) => void, listActionsType];

export { listActionsType, listItem, listProps, useEslistReturn };
