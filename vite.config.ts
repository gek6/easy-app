/*
 * @Date: 2022-04-27 13:51:40
 * @LastEditors: YuanBo
 * @Author: YuanBo
 * @LastEditTime: 2022-06-01 10:05:11
 * @FilePath: /easy-app/vite.config.ts
 */

import { join } from "path";
import { defineConfig } from "vite";
import uni from "@dcloudio/vite-plugin-uni";
// @ts-ignore
import uniHot from 'uni-pages-hot-modules'
uniHot.setupHotJs()
// import VueSetupExtend from "vite-plugin-vue-setup-extend"; //用于在 setup 语法糖中 添加 扩展字段 如：name 属性
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    uni(),
    uniHot.createHotVitePlugin(),
    // VueSetupExtend()
  ],
  resolve: {
    alias: {
      // @ts-ignore
      "/@": join(__dirname, "/src"),
    },
  },
});
