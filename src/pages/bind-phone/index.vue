<!--
 * @Date: 2022-05-20 17:47:11
 * @LastEditors: YuanBo
 * @Author: YuanBo
 * @LastEditTime: 2022-05-23 18:21:07
 * @FilePath: /note-uniapp/src/pages/bind-phone/index.vue
-->
<template>
  <view class="bind-phone-page">
    <view class="bind-phone-top-bg">
      <image class="bg-img" src="/static/bg/phone-bg.png" mode="widthFix" />
    </view>
    <view class="bind-phone-form">
      <view class="bind-phone-title">绑定手机号</view>
      <view class="bind-phone-form-item">
        <view class="border-line">
          <view class="border-line-color" :style="'width: '+(focusName=='phone'?'100%':'0%')+';'"></view>
        </view>
        <view class="bind-phone-form-item-label">手机号</view>
        <view class="bind-phone-input">
          <input @blur="focusName = ''" @focus="focusName='phone'" type="text" class="input" placeholder="请输入手机号" />
          <view>x</view>
        </view>
      </view>
      <view class="bind-phone-form-item">
        <view class="border-line">
          <view class="border-line-color" :style="'width: '+(focusName=='verifyCode'?'100%':'0%')+';'"></view>
        </view>
        <view class="bind-phone-form-item-label">验证码</view>
        <view class="bind-phone-input">
          <input @blur="focusName = ''" @focus="focusName='verifyCode'" type="text" class="input" placeholder="请输入验证码" />
          <view>x</view>
        </view>
      </view>
    </view>
  </view>
</template>
<script lang="ts" setup>
import { ref } from 'vue';

// 焦点名称
const focusName = ref('');
</script>
<style lang="scss">
.bind-phone-page {
  min-height: 100vh;
  background-color: #f7f8fa;
}
.bind-phone-top-bg {
  width: 100%;
  display: flex;
  justify-content: center;
  padding-top: 50rpx;
  .bg-img {
    width: 50%;
  }
}
.bind-phone-form {
  width: 680rpx;
  margin-left: 35rpx;
  min-height: 400rpx;
  margin-top: -50rpx;
  box-shadow: 0 0 10rpx #f1f1f1;
  border: 2rpx solid #f6f8fa;
  border-radius: 20rpx;
  background-color: #fff;
  position: relative;
  z-index: 2;
  .border-line {
    height: 5rpx;
    width: 100%;
    // background-color: #00bcc4;
    position: absolute;
    bottom: 0;
    left: 0;
    display: flex;
    justify-content: center;
    .border-line-color {
      background-color: #00bcc4;
      height: 100%;
      width: 100%;
      transition: 0.1s;
    }
  }
  .bind-phone-title {
    width: 620rpx;
    margin-left: 30rpx;
    font-size: 44rpx;
    font-weight: bold;
    padding-top: 50rpx;
    padding-bottom: 50rpx;
  }
  .bind-phone-form-item {
    width: 620rpx;
    margin-left: 30rpx;
    // background-color: #f1f1f1;
    height: 140rpx;
    position: relative;

    .bind-phone-form-item-label {
      color: #c5c4c9;
      line-height: 40rpx;
    }
    .bind-phone-input {
      display: flex;
      align-items: center;
      height: 100rpx;
      font-size: 32rpx;
      // background-color: #ccc;
      .input {
        width: 100%;
        height: 100%;
        font-size: 32rpx;
      }
    }
  }
}
</style>
