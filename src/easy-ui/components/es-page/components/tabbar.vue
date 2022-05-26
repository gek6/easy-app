<!--
 * @Date: 2022-05-18 11:21:16
 * @LastEditors: YuanBo
 * @Author: YuanBo
 * @LastEditTime: 2022-05-26 14:22:51
 * @FilePath: /easy-app/src/easy-ui/components/es-page/components/tabbar.vue
-->
<template>
  <view class="es-tabbar">
    <view class="es-tabbar-shadow-line"></view>
    <view
      class="es-tabbar-item"
      :class="{
        big: tab.big,
        'es-tabbar-active': tab.page === currentPage,
      }"
      v-for="(tab, tabIndex) in tabbar"
      :key="tabIndex"
      @click="tabClick(tabIndex)"
    >
      <view class="big-shadow">
        <view class="big-shadow-mask"></view>
        <view class="big-shadow-instance"></view>
      </view>
      <i
        class="tab-icon"
        :class="[
          tab.icon,
          tab.page === currentPage ? 'animation-scale-up' : '',
        ]"
      ></i>
      <view class="tab-title">{{ tab.title }}</view>
    </view>
  </view>
</template>
<script lang="ts" setup>
import { computed, ref } from "vue";

const props = defineProps(["tabbar", "activePage","refresh","loadMore"]);
const emit = defineEmits(["tabbar-change"]);
const currentPage = ref(props.activePage || props.tabbar[0].page || "");
const currentIndex = ref(0);

function tabClick(index: number) {
  currentPage.value = props.tabbar[index].page;
  currentIndex.value = index;
  emit("tabbar-change", {
    page: currentPage.value,
    index: currentIndex.value,
  });
}
</script>
<style lang="scss">
@import "../styles/tabbar.scss";
</style>
