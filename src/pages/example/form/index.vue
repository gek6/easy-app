<!--
 * @Date: 2022-05-24 14:20:12
 * @LastEditors: YuanBo
 * @Author: YuanBo
 * @LastEditTime: 2022-06-02 18:08:54
 * @FilePath: /easy-app/src/pages/example/form/index.vue
-->
<template>
  <view class="es-example-form-page">
    <es-form @register="register" @submit="onSubmit"></es-form>
  </view>
</template>
<script lang="ts" setup>
import { useEsForm } from "/@/easy-ui/components/es-form";
import esForm from "/@/easy-ui/components/es-form/index.vue";
const [register] = useEsForm({
  title: "表单",
  schemas: [
    {
      field: "a",
      label: "文本输入框",
      component: "Input",
      componentProps: {
        placeholder: "请输入XXX",
      },
    },
    {
      field: "b",
      label: "普通选择",
      component: "Select",
      componentProps: {
        placeholder: "请选择XXX",
        options: [
          {
            label: "选项1",
            value: "1",
          },
          {
            label: "选项2",
            value: "2",
          },
        ],
      },
    },
    {
      field: "split-1",
      label: "分割线",
      component: "SplitLine",
    },
    {
      field: "c",
      label: "远程加载选择",
      component: "ApiSelect",
      componentProps: {
        placeholder: "请选择XXX",
        labelField: "aaa",
        valueField: "bbb",
        api: () => {
          return new Promise((resolve, reject) => {
            setTimeout(() => {
              resolve([
                {
                  aaa: "远程选项1",
                  bbb: "1",
                },
                {
                  aaa: "远程选项2",
                  bbb: "2",
                },
              ]);
            }, 1000);
          });
        },
      },
    },
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
