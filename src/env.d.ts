/*
 * @Date: 2022-04-27 13:51:40
 * @LastEditors: YuanBo
 * @Author: YuanBo
 * @LastEditTime: 2022-06-07 15:02:41
 * @FilePath: /easy-app/src/env.d.ts
 */
/// <reference types="vite/client" />
import { DefineComponent } from "vue";

declare module "*.vue" {
  const component: DefineComponent<{}, {}, any>;
  export default component;
}
declare module "@vue/runtime-core" {
  export interface GlobalComponents {
    picker: DefineComponent<{
      mode: "selector" | "multiSelector" | "time" | "date" | "region";
    }>;
    
  }
}

declare module "lodash/cloneDeep";
