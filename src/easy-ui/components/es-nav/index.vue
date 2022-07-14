<!--
 * @Date: 2022-06-16 10:36:08
 * @LastEditors: YuanBo
 * @Author: YuanBo
 * @LastEditTime: 2022-07-14 14:36:05
 * @FilePath: /健康西安-小程序-升级/src/easy-ui/components/es-nav/index.vue
-->
<template>
  <view>
    <view
      class="es-nav-container nav-fixed"
      :style="{
        background: styles.background || props.background,
      }"
    >
      <view
        class="es-nav-status-bar"
        :style="{
          height: `${statusBarHeight}px`,
        }"
      ></view>
      <view
        class="es-nav-title"
        @click="pageBack"
        :style="{
          paddingLeft: `${styles.paddingLeft || props.paddingLeft}rpx`,
          paddingRight: `${styles.paddingRight || props.paddingRight}rpx`,
          fontSize: `${styles.fontSize || props.fontSize}rpx`,
          ...style,
        }"
      >
        <text class="es-nav-back-icon es-icon es-icon-xiangzuo" v-if="props.back"></text>
        <slot></slot>
      </view>
    </view>
    <view
      class="es-nav-container placeholder"
      :style="{
        background: styles.background || props.background,
      }"
    >
      <view
        class="es-nav-status-bar"
        :style="{
          height: `${statusBarHeight}px`,
        }"
      ></view>
      <view class="es-nav-title">
        
      </view>
    </view>
  </view>
</template>
<script lang="ts" setup>
import { onReady } from "@dcloudio/uni-app";
import { onMounted, ref } from "vue";
import { navProps } from "./types";
const props = defineProps({
  background: {
    type: String,
    default: "",
  },
  paddingLeft: {
    type: Number,
    default: 30,
  },
  paddingRight: {
    type: Number,
    default: 30,
  },
  fontSize: {
    type: Number,
    default: 28,
  },
  style: {
    type: Object,
    default: () => ({}),
  },
  back: {
    type: Boolean,
    default: false,
  },
});
const statusBarHeight = ref(0);
const styles = {
  background: "",
  paddingLeft: 0,
  paddingRight: 0,
  fontSize: 0,
};
function setProps(props: navProps) {
  styles.background = props.background || "";
  styles.paddingLeft = props.paddingLeft || 0;
  styles.paddingRight = props.paddingRight || 0;
  styles.fontSize = props.fontSize || 0;
}
function pageBack(){
  if(props.back){
    uni.navigateBack({
      delta: 1,
    });
  }
}

function getStatusBarHeight(){
  return statusBarHeight.value;
}
defineExpose({
  setProps,
  getStatusBarHeight
});
onMounted(() => {
  // console.log("es-nav onReady");
  let sysInfo = uni.getSystemInfoSync();
  // console.log(sysInfo);
  statusBarHeight.value = sysInfo.statusBarHeight || 0;
});
</script>
<style lang="scss">
.es-nav-container.nav-fixed {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 10000;
  background:$primary-color;
  font-size: $uni-font-size-base;

}
.es-nav-title {
  height: 88rpx;
  overflow: hidden;
  // background-color: #ccc;
  display: flex;
  align-items: center;
}
.es-nav-back-icon{
  font-size: 32rpx;
  font-weight: bold;
  margin-right: 20rpx;
}
</style>
