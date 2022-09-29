<!--
 * @Date: 2022-05-18 15:08:00
 * @LastEditors: YuanBo
 * @Author: YuanBo
 * @LastEditTime: 2022-05-20 17:59:12
 * @FilePath: /my-vue3-project/src/pages/my/index.vue
-->
<template>
  <view style="min-height: 100%; background-color: #f6f8fa">
    <view class="my-top-panel">
      <view class="my-top-bg"></view>
      <view class="my-top-place"></view>
      <view class="my-user-panel">
        <view class="my-user-info">
          <view class="my-user-avatar">
            <image
              style="width: 100%; height: 100%"
              src="/static/logo/logo.png"
              mode="widthFix"
            />
          </view>
          <view class="my-user-name">小椰子</view>
          <view class="my-user-id">ID:{{ showUID() }}</view>
        </view>
      </view>
    </view>
    <view class="my-menus">
      <view
        class="my-menu-item justify-between"
        @click="toPage(item.path)"
        v-for="(item, index) in menus"
        :key="index"
      >
        <view class="flex align-center">
          <i class="my-menu-icon" :class="item.icon"></i>
          <view class="my-menu-title">{{ item.label }}</view>
        </view>
        <i class="my-menu-right-icon es-icon es-icon-xiangyou"></i>
      </view>
      <!-- <view class="my-menu-item justify-between">
        <view class="flex align-center">
          <i class="my-menu-icon es-icon es-icon-shezhi"></i>
          <view class="my-menu-title">设置</view>
        </view>
        <i class="my-menu-right-icon es-icon es-icon-xiangyou"></i>
      </view> -->
    </view>
  </view>
</template>
<script lang="ts" setup>
import { useAccountStore } from "../../store/account";
import { menus } from "./menus";
const accountStore = useAccountStore();
function showUID() {
  let total_length = 8 - (accountStore.userInfo.uid + "").length;
  // 使用*填充
  let str = "";
  for (let i = 0; i < total_length; i++) {
    str += "0";
  }
  return str + accountStore.userInfo.uid;
}
function toPage(path: string) {
  uni.navigateTo({
    url: path,
  });
}
</script>
<style lang="scss">
.my-top-panel {
  min-height: 300rpx;
  position: relative;
  .my-top-place {
    height: 100rpx;
    width: 100%;
  }
  .my-top-bg {
    height: 300rpx;
    background-color: $primary-color;
    width: 100%;
    position: absolute;
    top: 0;
    left: 0;
  }
}
.my-user-panel {
  width: 690rpx;
  margin-left: 30rpx;
  min-height: 300rpx;
  background-color: #ffffff;
  border-radius: 20rpx;
  position: relative;
  z-index: 2;
  box-shadow: 0 0 4rpx #f1f1f1;
  .my-user-info {
    position: absolute;
    top: -100rpx;
    left: 60rpx;
    .my-user-avatar {
      width: 200rpx;
      height: 200rpx;
      border-radius: 50%;
      border: 6px solid #ffffff;
      background-color: #f1f1f1;
    }
    .my-user-name {
      text-align: center;
      font-weight: bold;
      font-size: 40rpx;
      margin-top: 10rpx;
    }
    .my-user-id {
      text-align: center;
      font-size: 26rpx;
      color: #aaaaaa;
      margin-top: 10rpx;
    }
  }
}
.my-menus {
  width: 690rpx;
  margin-left: 30rpx;
  min-height: 100rpx;
  background-color: #ffffff;
  border-radius: 20rpx;
  margin-top: 40rpx;
  .my-menu-item {
    display: flex;
    align-items: center;
    height: 100rpx;

    .my-menu-icon {
      font-size: 50rpx;
      margin-left: 30rpx;
      margin-right: 30rpx;
      color: $primary-color;
    }
    .my-menu-right-icon {
      font-size: 40rpx;
      margin-left: 30rpx;
      margin-right: 30rpx;
    }
  }
}
</style>
