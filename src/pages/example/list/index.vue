<!--
 * @Date: 2022-05-31 18:28:22
 * @LastEditors: YuanBo
 * @Author: YuanBo
 * @LastEditTime: 2022-06-02 09:36:49
 * @FilePath: /easy-app/src/pages/example/list/index.vue
-->
<template>
  <es-list @register="register"></es-list>
  <es-list @register="openRegister"></es-list>
</template>
<script lang="ts" setup>
import esList from "/@/easy-ui/components/es-list/index.vue";
// @ts-ignore
import { useEslist } from "/@/easy-ui/components/es-list/index";
const [register] = useEslist({
  title: "普通列表",
  list: [
    {
      icon: "es-icon es-icon-lianjie",
      label: "跳转页面",
      rightArrow: true,
      path: "/pages/bind-phone/index",
    },
    {
      icon: "es-icon es-icon-lianjie",
      label: "跳转前检查",
      rightArrow: true,
      path: "/pages/bind-phone/index",
      beforeRoute: () => {
        uni.showToast({
          title: "跳转前检查",
          icon: "error",
        });
        return false;
      },
    },
    
  ],
});
const [openRegister] = useEslist({
  title: "扩展功能",
  list: [
    {
      icon: "es-icon es-icon-tishi-xianxing",
      label: "授权手机号",
      rightArrow: true,
      openType: "getPhoneNumber",
      openSuccess: function (res) {
        console.log(res);
      },
    },
    {
      icon: "es-icon es-icon-xiaoxi",
      label: "联系客服",
      rightArrow: true,
      openType: "contact",
    },
    {
      icon: "es-icon es-icon-chengyuan",
      label: "授权用户信息",
      rightArrow: true,
      openType: "getUserInfo",
      openSuccess: function (res) {
        console.log(res);
      },
    },
  ],
});
</script>
