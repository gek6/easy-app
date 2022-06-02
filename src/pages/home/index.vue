<!--
 * @Date: 2022-05-18 15:08:06
 * @LastEditors: YuanBo
 * @Author: YuanBo
 * @LastEditTime: 2022-06-01 14:23:09
 * @FilePath: /easy-app/src/pages/home/index.vue
-->
<template>
  <view>
    <es-list @register="register"></es-list>
  </view>
</template>
<script lang="ts" setup>
import esList from "/@/easy-ui/components/es-list/index.vue";
// @ts-ignore
import { useEslist } from "/@/easy-ui/components/es-list/index";
const [register,{ removeItemByIndex }] = useEslist({
  list:[
    {
      icon:"es-icon es-icon-wendang",
      label:"表单",
      rightArrow:true,
      path:"/pages/example/form/index",
    },
    {
      icon:"es-icon es-icon-wendang",
      label:"按钮",
      rightArrow:true,
      path:"/pages/example/button/index",
    },
    {
      icon:"es-icon es-icon-wendang",
      label:"列表",
      rightArrow:true,
      path:"/pages/example/list/index",
    }
  ]
});
function delHandle(){
  removeItemByIndex(1);
}
</script>
