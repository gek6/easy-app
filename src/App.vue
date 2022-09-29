<!--
 * @Date: 2022-04-27 13:51:40
 * @LastEditors: YuanBo
 * @Author: YuanBo
 * @LastEditTime: 2022-05-24 14:11:04
 * @FilePath: /easy-app/src/App.vue
-->
<script setup lang="ts">
import { onLaunch, onShow, onHide } from "@dcloudio/uni-app";
onLaunch(() => {
  console.log("App Launch");
});
onShow(() => {
  console.log("App Show 2");
  console.log(import.meta.env);
  
});
onHide(() => {
  console.log("App Hide");
});
</script>
<style>
@import "./color-ui/main.css";
@import "./color-ui/animation.css";
@import "./easy-ui/icon/iconfont.css";
@import "./easy-ui/styles/common.css";
</style>
