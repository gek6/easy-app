<!--
 * @Date: 2022-04-27 13:51:40
 * @LastEditors: YuanBo
 * @Author: YuanBo
 * @LastEditTime: 2022-05-26 14:22:06
 * @FilePath: /easy-app/src/pages/index/index.vue
-->
<template>
  <es-page :refresh="isRefresh" :loadMore="isLoadBottom" ref="esPageRef" @onRefresh="onRefresh" :tabbar="tabbars" :active-page="activePage" @tabbar-change="tabbarChange" @onTouchBottom="onLoadMore">
    <HomePage v-show="activePage === 'home'"></HomePage>
    <NotePage v-show="activePage === 'note'"></NotePage>
    <MyPage v-show="activePage === 'my'"></MyPage>
  </es-page>
</template>

<script setup lang="ts">
import { computed, ref } from "vue";
import HomePage from "../home/index.vue";
import NotePage from "../note/index.vue";
import MyPage from "../my/index.vue";
import { useAccountStore } from "../../store/account";
const accountStore = useAccountStore();
accountStore.login();
const esPageRef = ref<any>();
const activePage = ref("home");
const isRefresh = computed(()=>{
  return ['home'].includes(activePage.value);
})
const isLoadBottom = computed(()=>{
  return ['home'].includes(activePage.value);
})
const tabbars = ref([
  {
    title: "首页",
    icon: "es-icon es-icon-shouye",
    page: "home",
  },
  {
    title: "记录",
    icon: "es-icon es-icon-xiaoxi",
    page: "note",
    big: true,
  },
  {
    title: "我的",
    icon: "es-icon es-icon-chengyuan",
    page: "my",
  },
]);
function tabbarChange(opt: { page: string; index: number }) {
  activePage.value = opt.page;  
}
function onRefresh(opt:{
  page:string,
  index:number
}){
  console.log(opt.page ,'页面刷新了');
  
}
function onLoadMore(){
  console.log('页面底部触发了');
  
  const page = esPageRef.value;
  setTimeout(() => {
    page.stopLoadMore()
  page.setNoMore()
  }, 3000);
  
}

uni.setNavigationBarColor({
  frontColor:"#ffffff",
  backgroundColor:"#019fba"
})
</script>
