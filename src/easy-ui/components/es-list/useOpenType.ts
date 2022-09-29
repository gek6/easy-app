import { listItem, openTypeEvent } from "./types";

/*
 * @Date: 2022-06-01 11:23:03
 * @LastEditors: YuanBo
 * @Author: YuanBo
 * @LastEditTime: 2022-06-01 11:51:31
 * @FilePath: /easy-app/src/easy-ui/components/es-list/useOpenType.ts
 */
export function useOpenType() {
  return {
    getphonenumber(event, menuItem: listItem) {
      if (menuItem.openType === "getPhoneNumber") {
        // 判断menuItem.openSuccess 是否为函数
        if (typeof menuItem.openSuccess === "function") {
          menuItem.openSuccess(event.detail);
        } else {
          console.error("EasyAppError:参数openSuccess错误");
        }
      } else {
        console.error("useOpenType getphonenumber error");
      }
    },
    getuserinfo(event, menuItem: listItem) {
      if (menuItem.openType === "getUserInfo") {
        if (typeof menuItem.openSuccess === "function") {
          menuItem.openSuccess(event.detail);
        } else {
          console.error("EasyAppError:参数openSuccess错误");
        }
      } else {
        console.error("useOpenType getuserinfo error");
      }
    },
    opensetting(event, menuItem: listItem) {
      if (menuItem.openType === "openSetting") {
        if (typeof menuItem.openSuccess === "function") {
          menuItem.openSuccess(event.detail);
        } else {
          console.error("EasyAppError:参数openSuccess错误");
        }
      } else {
        console.error("useOpenType opensetting error");
      }
    },
    launchapp(event, menuItem: listItem) {
      if (menuItem.openType === "launchApp") {
        if (typeof menuItem.openSuccess === "function") {
          menuItem.openSuccess(event.detail);
        } else {
          console.error("EasyAppError:参数openSuccess错误");
        }
      } else {
        console.error("useOpenType launchapp error");
      }
    },
  } as openTypeEvent;
}
