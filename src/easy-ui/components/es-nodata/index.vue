<!--
 * @Date: 2022-06-29 15:43:59
 * @LastEditors: YuanBo
 * @Author: YuanBo
 * @LastEditTime: 2022-06-29 15:53:23
 * @FilePath: /健康西安-小程序-升级/src/easy-ui/components/es-nodata/index.vue
-->
<template>
  <view class="es-nodata-container">
    <image
      style="width: 300rpx; height: 200rpx"
      src="/static/easy-ui/nodata.svg"
      mode="scaleToFill"
    />
    <view class="es-nodata-text">{{ props.text }}</view>
  </view>
</template>
<script lang="ts" setup>
const props = defineProps({
  text: {
    type: String,
    default: "暂无数据",
  },
});
</script>
<style lang="scss">
.es-nodata-container {
  min-height: 300rpx;
  // background-color: #ccc;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  .es-nodata-text {
    margin-top: 30rpx;
    color: $uni-color-info;
  }
}
</style>
