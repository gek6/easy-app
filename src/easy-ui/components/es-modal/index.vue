<!--
 * @Date: 2022-06-21 17:56:13
 * @LastEditors: YuanBo
 * @Author: YuanBo
 * @LastEditTime: 2022-07-11 15:05:06
 * @FilePath: /健康西安-小程序-升级/src/easy-ui/components/es-modal/index.vue
-->
<template>
  <view
    class="cu-modal"
    @click="closeModal"
    :class="{
      'bottom-modal': modalMode === 'bottom',
      show: showModal,
    }"
  >
    <view class="cu-dialog" @click.stop="">
      <slot></slot>
    </view>
  </view>
</template>

<script lang="ts" setup>
import { ref } from "vue";
import { ModalOptions } from "./types";
const modalMode = ref<"center" | "bottom" | "top">("center");
const showModal = ref(false);
const emit = defineEmits(["close"]);
function openModal() {
  showModal.value = true;
}
function closeModal() {
  showModal.value = false;
  emit("close");
}
function setProps(options: ModalOptions) {
  modalMode.value = options.mode || "center";
}
defineExpose({
  openModal,
  setProps,
  closeModal,
});
</script>
