<!--
 * @Date: 2022-06-01 14:17:44
 * @LastEditors: YuanBo
 * @Author: YuanBo
 * @LastEditTime: 2022-06-02 17:45:57
 * @FilePath: /easy-app/src/easy-ui/components/es-button/index.vue
-->
<template>
  <button
    class="es-btn"
    :class="{
      'es-btn-primary': type === 'primary',
      'es-btn-success': type === 'success',
      'es-btn-warning': type === 'warning',
      'es-btn-danger': type === 'danger',
      'es-btn-info': type === 'info',
      'es-btn-disabled': disabled,
      'es-btn-block': block,
      small: size === 'small',
      mini: size === 'mini',
      large: size === 'large',
      'es-btn-plain': plain,
      'es-btn-round': round,
    }"
    :hover-class="'button-hover'"
    :loading="loadingMode === 'origin' && loading"
    :disabled="disabled"
    :open-type="openType"
    :style="style"
    @click.stop="clickHandle"
    @getphonenumber="getphonenumber"
		@getuserinfo="getuserinfo"
		@opensetting="opensetting"
		@launchapp="launchapp"
  >
    <text
      v-if="loadingMode === 'icon' && loading"
      class="es-icon es-icon-loading es-icon-animation-spin"
    ></text>
    <slot></slot>
  </button>
</template>
<script lang="ts" setup>
// 按钮事件
const emit = defineEmits(["click","getphonenumber","getuserinfo","opensetting","launchapp"]);
// 按钮属性
const props = defineProps({
  // 按钮类型
  type: {
    type: String,
    default: "default",
    validator(value: string) {
      return [
        "default",
        "primary",
        "info",
        "warning",
        "success",
        "danger",
      ].includes(value);
    },
  },
  // 按钮大小
  size: {
    type: String,
    default: "default",
    validator(value: string) {
      return ["default", "large", "small", "mini"].includes(value);
    },
  },
  // 是否镂空
  plain: {
    type: Boolean,
    default: false,
  },
  // 是否圆角
  round: {
    type: Boolean,
    default: false,
  },
  // 是否禁用
  disabled: {
    type: Boolean,
    default: false,
  },
  // 是否loading
  loading: {
    type: Boolean,
    default: false,
  },
  // loading模式
  loadingMode: {
    type: String,
    default: "origin",
    validator(value: string) {
      // origin 小程序原生自带loading
      // icon 自定义图标
      return ["origin", "icon"].includes(value);
    },
  },
  openType: {
    type: String,
    default: "none",
    validator(value: string) {
      return [
        "none",
        "feedback",
        "share",
        "getUserInfo",
        "contact",
        "getPhoneNumber",
        "launchApp",
        "openSetting",
        "getAuthorize",
        "contactShare",
        "lifestyle",
        "openGroupProfile",
      ].includes(value);
    },
  },
  block: {
    type: Boolean,
    default: false,
  },
  style:{
    type: String,
    default: '',
  },
});
function clickHandle(event: any) {
  if (props.loading) {
    return;
  }
  emit("click", event);
}
function getphonenumber(event: any) {
  emit("getphonenumber", event);
}
function getuserinfo(event: any) {
  emit("getuserinfo", event);
}
function opensetting(event: any) {
  emit("opensetting", event);
}
function launchapp(event: any) {
  emit("launchapp", event);
}
</script>
<style lang="scss">
.es-btn {
  position: relative;
  border: 0upx;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  box-sizing: border-box;
  padding: 0 30upx;
  font-size: 28upx;
  height: 64upx;
  line-height: 1;
  text-align: center;
  text-decoration: none;
  overflow: visible;
  margin-left: initial;
  transform: translate(0upx, 0upx);
  margin-right: initial;
}

.es-btn::after {
  display: none;
}
.es-btn-primary {
  background-color: $uni-color-primary;
  color: #ffffff;
  transition: 0.1s;
}
.es-btn-success {
  background-color: $uni-color-success;
  color: #ffffff;
  transition: 0.1s;
}
.es-btn-warning {
  background-color: $uni-color-warning;
  color: #ffffff;
  transition: 0.1s;
}
.es-btn-danger {
  background-color: $uni-color-error;
  color: #ffffff;
  transition: 0.1s;
}
.es-btn-info {
  background-color: $uni-color-info;
  color: #ffffff;
  transition: 0.1s;
}
// 按钮点击hover样式
$horverAmount: 10%;
.es-btn.button-hover {
  background-color: darken($color: #ccc, $amount: $horverAmount);
}
.es-btn-primary.button-hover {
  background-color: darken($color: $uni-color-primary, $amount: $horverAmount);
}
.es-btn-success.button-hover {
  background-color: darken($color: $uni-color-success, $amount: $horverAmount);
}
.es-btn-warning.button-hover {
  background-color: darken($color: $uni-color-warning, $amount: $horverAmount);
}
.es-btn-danger.button-hover {
  background-color: darken($color: $uni-color-error, $amount: $horverAmount);
}
.es-btn-info.button-hover {
  background-color: darken($color: $uni-color-info, $amount: $horverAmount);
}
// 按钮大小
.es-btn.mini {
  padding: $es-btn-padding-mini;
  font-size: $es-btn-font-size-mini;
  height: $es-btn-height-mini;
  border-radius: 6rpx;
}
.es-btn.small {
  padding: $es-btn-padding-small;
  font-size: $es-btn-font-size-small;
  height: $es-btn-height-small;
}
.es-btn.large {
  padding: $es-btn-padding-large;
  font-size: $es-btn-font-size-large;
  height: $es-btn-height-large;
}
.es-btn-block {
  width: 100%;
}
// 按钮禁用状态
.es-btn-primary[disabled]:not([type]) {
  background-color: $uni-color-primary;
  color: #ffffff;
  opacity: 0.4;
}
.es-btn-success[disabled]:not([type]) {
  background-color: $uni-color-success;
  color: #ffffff;
  opacity: 0.4;
}
.es-btn-warning[disabled]:not([type]) {
  background-color: $uni-color-warning;
  color: #ffffff;
  opacity: 0.4;
}
.es-btn-danger[disabled]:not([type]) {
  background-color: $uni-color-error;
  color: #ffffff;
  opacity: 0.4;
}
.es-btn-info[disabled]:not([type]) {
  background-color: $uni-color-info;
  color: #ffffff;
  opacity: 0.4;
}
// 镂空状态
.es-btn-primary.es-btn-plain {
  background-color: transparent;
  color: $uni-color-primary;
  border: 2rpx solid $uni-color-primary;
  box-sizing: border-box;
}
.es-btn-success.es-btn-plain {
  background-color: transparent;
  color: $uni-color-success;
  border: 2rpx solid $uni-color-success;
  box-sizing: border-box;
}
.es-btn-warning.es-btn-plain {
  background-color: transparent;
  color: $uni-color-warning;
  border: 2rpx solid $uni-color-warning;
  box-sizing: border-box;
}
.es-btn-danger.es-btn-plain {
  background-color: transparent;
  color: $uni-color-error;
  border: 2rpx solid $uni-color-error;
  box-sizing: border-box;
}
.es-btn-info.es-btn-plain {
  background-color: transparent;
  color: $uni-color-info;
  border: 2rpx solid $uni-color-info;
  box-sizing: border-box;
}
// 圆角样式
.es-btn.es-btn-round {
  border-radius: calc(#{$es-btn-height-default}/ 2);
}
.es-btn.es-btn-round.mini {
  border-radius: calc(#{$es-btn-height-mini}/ 2);
}
.es-btn.es-btn-round.small {
  border-radius:calc(#{$es-btn-height-small}/ 2);
}
.es-btn.es-btn-round.large {
  border-radius: calc(#{$es-btn-height-large}/ 2);
}

// 旋转动画
@keyframes es-icon-spin {
  0% {
    -webkit-transform: rotate(0);
    transform: rotate(0);
  }

  100% {
    -webkit-transform: rotate(359deg);
    transform: rotate(359deg);
  }
}
.es-icon-animation-spin {
  -webkit-animation: es-icon-spin 1s infinite linear;
  animation: es-icon-spin 1s infinite linear;
}
</style>
