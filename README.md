### 项目简介
UNI-APP CLI版(脚手架) + TypeScript + Vue3 + pinia + ColorUI 的最新组合拳。推荐使用vscode。包括但不限于配置化表单、表格、自定义Tabbar等等
选择ColorUI是因为这是个纯CSS库,不受vue版本影响,感谢ColorUI.

##### 基本用法
该项目的组件大部分没有进行全局注册。采用了按需引入注册方式，如下
```html
<!-- template -->
<template>
  <view class="es-example-form-page">
    <es-form @register="register"></es-form>
  </view>
</template>
<script lang="ts" setup>
import { useEsForm } from "/@/easy-ui/components/es-form";
import esForm from "/@/easy-ui/components/es-form/index.vue";
const [register] = useEsForm({
  schemas: [
    // 文本输入框
    {
      field: "someKey",
      label: "文本输入框",
      component: "Input",
    },
  ],
});
</script>
script
```
 