<!--
 * @Date: 2022-05-24 14:22:58
 * @LastEditors: YuanBo
 * @Author: YuanBo
 * @LastEditTime: 2022-06-01 14:10:59
 * @FilePath: /easy-app/src/easy-ui/components/es-list/index.vue
-->
<template>
  <view
    class="es-list-container"
    :style="{
      paddingTop: `${(750 - styles.listWidth) / 2}rpx`,
      paddingBottom: `${(750 - styles.listWidth) / 2}rpx`,
    }"
  >
    <view
      class="es-list"
      :style="{
        width: `${styles.listWidth}rpx`,

        boxShadow: `0 0 ${(750 - styles.listWidth) / 4}rpx rgba(0,0,0,.2)`,
        borderRadius: `${styles.borderRadius}rpx`,
      }"
    >
      <view class="el-list-title" v-if="title">{{title}}</view>
      <view v-for="(item, index) in list" :key="index">
        <view
          class="es-list-item"
          :style="{
            width: `${styles.itemWidth}rpx`,
            height: `${styles.itemHeight}rpx`,
          }"
          @click="handleClick(item)"
          v-if="!item.openType"
        >
          <view class="es-list-item-left-box">
            <view class="es-list-item-left">
              <span :class="item.icon || 'es-icon es-icon-wanggeshitu'"></span>
            </view>
            <view class="es-list-item-center">{{ item.label || "未知" }}</view>
          </view>

          <view class="es-list-item-right">
            <span
              :class="item.customRightIcon || 'es-icon es-icon-xiangyou'"
            ></span>
          </view>
        </view>
        <button
          v-if="item.openType"
          :open-type="item.openType"
          class="es-list-item"
          :style="{
            width: `${styles.itemWidth}rpx`,
            height: `${styles.itemHeight}rpx`,
          }"
          @getphonenumber="getphonenumber($event, item)"
          @getuserinfo="getuserinfo($event, item)"
          @opensetting="opensetting($event, item)"
          @launchapp="launchapp($event, item)"
        >
          <view class="es-list-item-left-box">
            <view class="es-list-item-left">
              <span :class="item.icon || 'es-icon es-icon-wanggeshitu'"></span>
            </view>
            <view class="es-list-item-center">{{ item.label || "未知" }}</view>
          </view>

          <view class="es-list-item-right">
            <span
              :class="item.customRightIcon || 'es-icon es-icon-xiangyou'"
            ></span>
          </view>
        </button>
      </view>
    </view>
  </view>
</template>

<script setup lang="ts">
import { onMounted, reactive, ref } from "vue";
import { listActionsType, listItem } from "./types";
import { itemHeight, itemWidth, borderRadius, listWidth } from "./default";
import { useOpenType } from "./useOpenType";
const emit = defineEmits(["register"]);
const styles = reactive({
  itemWidth,
  itemHeight,
  borderRadius,
  listWidth,
});
const title = ref("");
const list = ref<listItem[]>([]);
const { getphonenumber, getuserinfo, launchapp, opensetting } = useOpenType();
function removeItemByIndex(index: number) {
  list.value.splice(index, 1);
}
function setListData(listData: listItem[]) {
  list.value = listData;
}
function setTitle(_title: string) {
  title.value = _title;
}
function handleClick(item: listItem) {
  if (item.path) {
    if (item.beforeRoute) {
      let isPass = item.beforeRoute();
      if (isPass) {
        uni.navigateTo({
          url: item.path,
        });
      }
    } else {
      uni.navigateTo({
        url: item.path,
      });
    }
  }
}

onMounted(() => {
  emit("register", {
    removeItemByIndex,
    setListData,
    setTitle,
  } as listActionsType);
});
</script>
<style lang="scss">
.es-list-container {
  display: flex;
  justify-content: center;
}
.es-list {
  display: flex;
  flex-direction: column;
  align-items: center;
  overflow: hidden;
  .el-list-title{
    text-align: left;
    padding-top: 20rpx;
    padding-bottom: 20rpx;
    color: #aaaaaa;
    width: 100%;
    padding-left: 20rpx;
  }
  .es-list-item::after {
    border: none;
  }
  .es-list-item {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0;
    background-color: #ffffff;
    border: none;
    outline: none;
    .es-list-item-left-box {
      display: flex;
      align-items: center;
    }
    .es-list-item-left {
      margin-left: 20rpx;
    }
    .es-list-item-center {
      margin-left: 20rpx;
    }
    .es-list-item-right {
      margin-right: 20rpx;
    }
  }
}
</style>
