<!--
 * @Date: 2022-06-22 18:00:45
 * @LastEditors: YuanBo
 * @Author: YuanBo
 * @LastEditTime: 2022-07-01 09:47:07
 * @FilePath: /健康西安-小程序-升级/src/easy-ui/components/es-bottom-action/index.vue
-->
<template>
  <view class="es-bottom-action-area">
    <view class="es-bottom-action-placeholder"></view>
    <view class="es-bottom-action-fixed" :class="{
      center:props.center
    }">
      <slot></slot>
    </view>
  </view>
</template>
<script lang="ts" setup>
const props = defineProps({
  center: {
    type: Boolean,
    default: false
  }
});
</script>
<style lang="scss">
.es-bottom-action-area {
  .es-bottom-action-placeholder {
    height: 120rpx;
  }
  .es-bottom-action-fixed {
    width: 100%;
    height: 120rpx;
    background-color: #ffffff;
    box-shadow: 0 0 10rpx #cccccc;
    position: fixed;
    bottom: 0;
    left: 0;
    right: 0;
    z-index: 99;
  }
  .es-bottom-action-fixed.center{
    display: flex;
    justify-content: center;
    align-items: center;
  }
}
</style>
