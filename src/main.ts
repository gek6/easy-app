/*
 * @Date: 2022-04-27 13:51:40
 * @LastEditors: YuanBo
 * @Author: YuanBo
 * @LastEditTime: 2022-05-18 11:12:21
 * @FilePath: /my-vue3-project/src/main.ts
 */
import { createSSRApp } from "vue";
import App from "./App.vue";
import { colorInit } from "./color-ui/init";
import { createPinia } from "pinia";
import esPage from "./easy-ui/components/es-page/page.vue";

// 实测 目前阶段 使用use插件的形式去加载的方式 微信小程序不兼容。H5没问题。
// import {esPage} from "./easy-ui/components/es-page/index"

export function createApp() {
  const app = createSSRApp(App);
  app.use(createPinia());
 
  // app.use(esPage) // 实测 目前阶段 使用use插件的形式去加载的方式 微信小程序不兼容。H5没问题。
  
  // 全局组件注册
  app.component("EsPage", esPage);
 
  colorInit(app);
  return {
    app,
  };
}
