/*
 * @Date: 2022-04-27 13:51:40
 * @LastEditors: YuanBo
 * @Author: YuanBo
 * @LastEditTime: 2022-09-29 12:44:32
 * @FilePath: /easy-app/vite.config.ts
 */
// @ts-ignore
import { join } from "path";
// @ts-ignore
import { defineConfig } from "vite";
// @ts-ignore
import uni from "@dcloudio/vite-plugin-uni";
// @ts-ignore
import uniHot from 'uni-pages-hot-modules'
uniHot.setupHotJs()
export default defineConfig({
  plugins: [
    uni(),
    uniHot.createHotVitePlugin(),
  ],
  resolve: {
    alias: {
      // @ts-ignore
      "/@": join(__dirname, "/src"),
    },
  },
});
