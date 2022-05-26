<!--
 * @Date: 2022-05-18 10:11:35
 * @LastEditors: YuanBo
 * @Author: YuanBo
 * @LastEditTime: 2022-05-26 14:25:37
 * @FilePath: /easy-app/src/easy-ui/components/es-page/page.vue
-->
<template>
  <view>
    <scroll-view
      :scroll-y="true"
      class="es-page-content-height"
      :refresher-enabled="refresh"
      :refresher-triggered="triggered"
      :refresher-threshold="100"
      @refresherrefresh="onRefresh"
      @refresherrestore="onRestore"
      @refresherabort="onAbort"
      @scrolltolower="onScrollToLower"
    >
      <slot></slot>
      <view class="es-page-bottom-area" v-if="loadMore">
        <view
          class="flex justify-center align-center"
          style="height: 100%"
          v-if="loadingMore"
        >
          <i class="es-icon es-icon-loading es-icon-animation-spin"></i>
          加载中...
        </view>
        <view
          class="flex justify-center align-center"
          style="height: 100%"
          v-else-if="noMore"
        >
          没有更多了
        </view>
      </view>
    </scroll-view>
    <tabbar-vue
      v-if="props.tabbar.length"
      :tabbar="props.tabbar"
      :active-page="activePage"
      @tabbar-change="tabbarChange"
    ></tabbar-vue>
  </view>
</template>
<script lang="ts" setup>
import { onLoad } from "@dcloudio/uni-app";
import { reactive, ref } from "vue";
import TabbarVue from "./components/tabbar.vue";
const props = defineProps({
  activePage: String,
  tabbar: {
    type: Array,
    default: () => [],
  },
  refresh: {
    type: Boolean,
    default: false,
  },
  loadMore: {
    type: Boolean,
    default: false,
  },
});
const tabbarOpt = reactive({
  page: props.activePage,
  index: -1,
});
const emits = defineEmits(["tabbar-change", "on-refresh", "on-touch-bottom"]);
function tabbarChange(opt: { page: string; index: number }) {
  loadingMore.value = false
  noMore.value = false;
  tabbarOpt.page = opt.page;
  tabbarOpt.index = opt.index;
  emits("tabbar-change", opt);
}
const triggered = ref<Boolean | string>(false);
const _freshing = ref(false);
onLoad(() => {
  _freshing.value = false;
  triggered.value = false;
  // setTimeout(() => {
  //   triggered.value = true;
  // }, 1000);
});

function onRefresh() {
  triggered.value = "restore";
  if (_freshing.value) return;
  _freshing.value = true;

  setTimeout(() => {
    triggered.value = false;
    _freshing.value = false;
    emits("on-refresh", tabbarOpt);
  }, 500);
}
function onRestore() {
  triggered.value = "restore"; // 需要重置
  console.log("onRestore");
}
function onAbort() {
  console.log("onAbort");
}
// 没有更多了
const noMore = ref(false);
// 加载更多中
const loadingMore = ref(false);
function onScrollToLower(e: any) {
  if(!props.loadMore) return;
  if (noMore.value) return;
  emits("on-touch-bottom");
  loadingMore.value = true;
}
function stopLoadMore() {
  loadingMore.value = false;
}
function setNoMore() {
  loadingMore.value = false;
  noMore.value = true;
}
defineExpose({stopLoadMore,setNoMore});
</script>
<style lang="scss">
@import "./styles/index.scss";
@import "../../styles/common.css";
</style>
