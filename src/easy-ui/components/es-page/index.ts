/*
 * @Date: 2022-05-18 10:13:39
 * @LastEditors: YuanBo
 * @Author: YuanBo
 * @LastEditTime: 2022-05-18 11:04:03
 * @FilePath: /my-vue3-project/src/easy-ui/components/es-page/index.ts
 */
import Page from "./page.vue";

export const esPage = {
  install(app: any) {
    console.log("esPage install",app);
    app.component("EsPage", Page);
  },
};
