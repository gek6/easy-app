<!--
 * @Date: 2022-05-24 14:20:12
 * @LastEditors: YuanBo
 * @Author: YuanBo
 * @LastEditTime: 2022-06-07 18:23:01
 * @FilePath: /easy-app/src/pages/example/form/index.vue
-->
<template>
  <view class="es-example-form-page">
    <es-form @register="register" @submit="onSubmit"></es-form>
  </view>
</template>
<script lang="ts" setup>
import {
  getCascadeSelectOptionsApi,
  getNormalPickerOptionsApi,
  getVerifyCodeApi,
  staticCascadeOptions,
  staticOptions,
} from "./mock/dataApi";
import { useEsForm } from "/@/easy-ui/components/es-form";
import esForm from "/@/easy-ui/components/es-form/index.vue";
const [register] = useEsForm({
  title: "表单",
  schemas: [
    // 文本输入框
    {
      field: "a",
      label: "文本输入框",
      component: "Input",
    },
    // 短信验证码输入框
    {
      field: "VerifyCode",
      label: "短信验证码",
      component: "VerifyCodeInput",
      componentProps: {
        placeholder: "请输入验证码",
        api: getVerifyCodeApi,
        verifyCodeBtnProps: {
          text: "发送验证码",
          // size:"small",
          // type: "primary",
          // plain:"true",
          // round: false,
        },
        verifyCodeTimer: 30,
        verifyCodeValueLength: 6,
        verifyCodeSuccessHandler() {
          console.log("发送成功 这里可以做一些提示");
        },
      },
    },
    // 分割线
    {
      field: "split-1",
      label: "分割线",
      component: "SplitLine",
    },
    // 普通选择
    {
      field: "b",
      label: "普通选择",
      component: "Select",
      componentProps: {
        placeholder: "请选择XXX",
        options: staticOptions,
      },
    },
    // 远程加载选择
    {
      field: "c",
      label: "远程加载选择",
      component: "ApiSelect",
      componentProps: {
        placeholder: "请选择API数据",
        api: getNormalPickerOptionsApi,
      },
    },
    // 分割线
    {
      field: "split-2",
      label: "分割线",
      component: "SplitLine",
    },
    // 默认数据格式 级联选择
    {
      field: "CascadeSelect1",
      label: "静态级联选择",
      component: "CascadeSelect",
      componentProps: {
        placeholder: "请选择级联数据",
        options: staticCascadeOptions,
      },
    },
    // 自定义数据字段 级联选择
    {
      field: "CascadeSelect",
      label: "远程级联选择",
      component: "ApiCascadeSelect",
      componentProps: {
        placeholder: "自定义数据字段",
        labelField: "name",
        valueField: "id",
        api: getCascadeSelectOptionsApi,
      },
    },
    // 分割线
    {
      field: "split-2",
      label: "分割线",
      component: "SplitLine",
    },
  ],
});
function onSubmit(data: any) {
  console.log(data);
}
</script>
<style lang="scss">
.es-example-form-page {
  min-height: 100vh;
  background-color: $uni-bg-color-grey;
}
</style>
