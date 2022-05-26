<!--
 * @Date: 2022-05-24 14:22:58
 * @LastEditors: YuanBo
 * @Author: YuanBo
 * @LastEditTime: 2022-05-26 19:00:43
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
      <view
        v-for="(item, index) in list"
        :key="index"
        class="es-list-item"
        :style="{
          width: `${styles.itemWidth}rpx`,
          height: `${styles.itemHeight}rpx`,
        }"
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
    </view>
  </view>
</template>

<script setup lang="ts">
import { onMounted, reactive, ref } from "vue";
import { listActionsType, listItem } from "./types";
import { itemHeight, itemWidth, borderRadius, listWidth } from "./default";
const emit = defineEmits(["register"]);
const styles = reactive({
  itemWidth,
  itemHeight,
  borderRadius,
  listWidth,
});
const list = ref<listItem[]>([]);
function removeItemByIndex(index: number) {
  list.value.splice(index, 1);
}
function setListData(listData: listItem[]) {
  list.value = listData;
}
onMounted(() => {
  emit("register", { removeItemByIndex, setListData } as listActionsType);
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
  .es-list-item {
    display: flex;
    align-items: center;
    justify-content: space-between;
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
