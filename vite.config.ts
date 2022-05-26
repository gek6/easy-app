// @ts-ignore
import { join } from "path";
/*
 * @Date: 2022-04-27 13:51:40
 * @LastEditors: YuanBo
 * @Author: YuanBo
 * @LastEditTime: 2022-05-26 17:24:39
 * @FilePath: /easy-app/vite.config.ts
 */
import { defineConfig } from "vite";
import uni from "@dcloudio/vite-plugin-uni";

// import VueSetupExtend from "vite-plugin-vue-setup-extend"; //用于在 setup 语法糖中 添加 扩展字段 如：name 属性
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    uni(),
    // VueSetupExtend()
  ],
  resolve: {
    alias: {
      // @ts-ignore
      "/@": join(__dirname, "/src"),
    },
  },
});
