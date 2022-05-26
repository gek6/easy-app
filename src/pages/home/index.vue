<!--
 * @Date: 2022-05-18 15:08:06
 * @LastEditors: YuanBo
 * @Author: YuanBo
 * @LastEditTime: 2022-05-26 18:50:53
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
    },
    {
      icon:"es-icon es-icon-wendang",
      label:"按钮",
      rightArrow:true,
    }
  ]
});
function delHandle(){
  removeItemByIndex(1);
}
</script>
