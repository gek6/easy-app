/*
 * @Date: 2022-05-18 18:08:36
 * @LastEditors: YuanBo
 * @Author: YuanBo
 * @LastEditTime: 2022-05-24 10:17:47
 * @FilePath: /easy-app/src/store/account.ts
 */
import { defineStore } from "pinia";
import { getToken, setToken } from "../utils/auth/token";
import { http } from "../utils/http";
import { getAuthCode } from "../utils/wxmp/auth";

export const useAccountStore = defineStore({
  id: "account",
  state: (): {
    userInfo: any;
  } => ({
    userInfo: "",
  }),
  actions: {
    async login() {
      if (getToken()) {
        this.getUserInfo();
        return;
      }
      let code = await getAuthCode();
      // let res = await http.post("/open-api/app-note/wxmp/login-by-mp-code", {
      //   code,
      // });
      // let token = res.data;
      let token = code;

      setToken(token);
      this.getUserInfo();
    },
    async getUserInfo() {
      // TODO 获取用户信息
      // let res = await http.get("/app/app-note/wxmp/user-info");
      // this.userInfo = res.data;
    },
  },
});
