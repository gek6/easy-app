<!--
 * @Date: 2022-06-29 14:17:00
 * @LastEditors: YuanBo
 * @Author: YuanBo
 * @LastEditTime: 2022-06-29 14:45:23
 * @FilePath: /健康西安-小程序-升级/src/easy-ui/components/es-message/index.vue
-->
<template>
  <view class="es-message" :class="props.type">
    <span class="es-message-text">
      <slot></slot>
    </span>
  </view>
</template>
<script lang="ts" setup>
const props = defineProps({
  type: {
    type: String,
    default: "warning",
  },
});
</script>
<style lang="scss">
.es-message {
  height: 100rpx;
  border-radius: 20rpx;
  display: flex;
  align-items: center;
  justify-content: center;
}
.es-message.warning {
  background-color: #fff7dc;
  color: #d89014;
}
.es-message.success {
  background-color: #e8fff0;
  color: #4caf50;
}
.es-message.error {
  background-color: #f9e2e2;
  color: #f44336;
}
.es-message.info {
  background-color: #d3f1fb;
  color: #2196f3;
}
.es-message-text {
  display: flex;
  align-items: center;
  > span {
    display: flex;
    align-items: center;
  }
}
</style>
