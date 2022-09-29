<!--
 * @Date: 2022-06-01 14:17:23
 * @LastEditors: YuanBo
 * @Author: YuanBo
 * @LastEditTime: 2022-06-02 10:05:44
 * @FilePath: /easy-app/src/pages/example/button/index.vue
-->
<template>
  <view>
    <view style="width: 690rpx; margin-left: 30rpx">
      <view class="es-btn-example-block-title">按钮大小</view>
      <view style="display: flex; flex-wrap: wrap">
        <view class="es-btn-example-box">
          <es-button type="primary" size="mini">迷你</es-button>
        </view>
        <view class="es-btn-example-box">
          <es-button type="primary" size="small">小号</es-button>
        </view>
        <view class="es-btn-example-box">
          <es-button type="primary">默认</es-button>
        </view>
        <view class="es-btn-example-box">
          <es-button type="primary" size="large">大号</es-button>
        </view>
      </view>
      <view class="es-btn-example-block-title">按钮颜色</view>
      <view style="display: flex; flex-wrap: wrap">
        <view class="es-btn-example-box">
          <es-button>default</es-button>
        </view>
        <view class="es-btn-example-box">
          <es-button type="primary">primary</es-button>
        </view>
        <view class="es-btn-example-box">
          <es-button type="success">success</es-button>
        </view>
        <view class="es-btn-example-box">
          <es-button type="info">info</es-button>
        </view>
        <view class="es-btn-example-box">
          <es-button type="danger">danger</es-button>
        </view>
      </view>
      <view class="es-btn-example-block-title">禁用状态</view>
      <view style="display: flex; flex-wrap: wrap">
        <view class="es-btn-example-box">
          <es-button type="primary" :disabled="true">禁用</es-button>
        </view>
        <view class="es-btn-example-box">
          <es-button type="success" :disabled="true">禁用</es-button>
        </view>
        <view class="es-btn-example-box">
          <es-button type="warning" :disabled="true">禁用</es-button>
        </view>
        <view class="es-btn-example-box">
          <es-button type="info" :disabled="true">禁用</es-button>
        </view>
        <view class="es-btn-example-box">
          <es-button type="danger" :disabled="true">禁用</es-button>
        </view>
      </view>

      <view class="es-btn-example-block-title">加载状态</view>
      <view style="display: flex; flex-wrap: wrap">
        <view class="es-btn-example-box">
          <es-button type="primary" :loading="true">加载中</es-button>
        </view>
        <view class="es-btn-example-box">
          <es-button type="primary" :loading-mode="'icon'" :loading="true"
            >加载中</es-button
          >
        </view>
        <view class="es-btn-example-box">
          <es-button
            type="primary"
            :loading-mode="'icon'"
            :loading="loading3sec"
            @click="loading3secHandle"
            >{{ loading3sec ? "加载中" : "点击加载3秒" }}</es-button
          >
        </view>
      </view>
      <view class="es-btn-example-block-title">块级按钮</view>
      <view>
        <view style="margin-bottom: 20rpx">
          <es-button type="primary" block>块级按钮</es-button>
        </view>
        <view style="margin-bottom: 20rpx">
          <es-button type="primary" size="large" block>大号块级按钮</es-button>
        </view>
      </view>
      <view class="es-btn-example-block-title">镂空样式</view>
      <view style="display: flex; flex-wrap: wrap">
        <view class="es-btn-example-box">
          <es-button plain type="primary">镂空</es-button>
        </view>
        <view class="es-btn-example-box">
          <es-button plain type="success">镂空</es-button>
        </view>
        <view class="es-btn-example-box">
          <es-button plain type="warning">镂空</es-button>
        </view>
        <view class="es-btn-example-box">
          <es-button plain type="info">镂空</es-button>
        </view>
        <view class="es-btn-example-box">
          <es-button plain type="danger">镂空</es-button>
        </view>
      </view>
      <view class="es-btn-example-block-title">圆角样式</view>
      <view style="display: flex; flex-wrap: wrap">
        <view class="es-btn-example-box">
          <es-button plain round size="small" type="primary">圆角</es-button>
        </view>
        <view class="es-btn-example-box">
          <es-button plain round type="success">圆角</es-button>
        </view>
        <view class="es-btn-example-box">
          <es-button round size="large" type="warning">圆角</es-button>
        </view>
      </view>
      <view>
        <view style="margin-bottom: 20rpx">
          <es-button plain round type="primary" block>块级按钮</es-button>
        </view>
        <view style="margin-bottom: 20rpx">
          <es-button round type="primary" size="large" block
            >大号块级按钮</es-button
          >
        </view>
      </view>
       <view class="es-btn-example-block-title">open-type能力</view>
       <view style="display: flex; flex-wrap: wrap">
         
        <view class="es-btn-example-box">
          <es-button round size="large" type="primary" open-type="getPhoneNumber" @getphonenumber="getphonenumber">获取用户手机号</es-button>
        </view>
        <view class="es-btn-example-box">
          <es-button round size="large" type="primary" open-type="getUserInfo" @getuserinfo="getuserinfo">获取用户头像昵称</es-button>
        </view>
        <view class="es-btn-example-box">
          <es-button round size="large" type="primary" open-type="contact" @opensetting="opensetting">联系客服</es-button>
        </view>
      </view>
    </view>
    <view style="height: 300rpx"></view>
  </view>
</template>
<script lang="ts" setup>
import { ref } from "vue";
import esButton from "/@/easy-ui/components/es-button/index.vue";

const loading3sec = ref(false);
function loading3secHandle() {
  loading3sec.value = true;
  setTimeout(() => {
    loading3sec.value = false;
  }, 3000);
}
function getphonenumber(e:any) {
  console.log(e);
}
function getuserinfo(e:any) {
  console.log(e);
}
function opensetting(e:any) {
  console.log(e);
}
</script>

<style lang="scss">
.es-btn-example-block-title {
  margin-top: 20rpx;
  margin-bottom: 20rpx;
  font-size: 34rpx;
  font-weight: bold;
  color: #333;
}
.es-btn-example-box {
  margin-right: 20rpx;
  margin-bottom: 20rpx;
}
</style>
