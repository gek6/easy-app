import Vue from 'vue';
import App from './App';

import $store from "./store";
import $ajax from "./tools/ajax.js";
import upload_img from "./tools/upload_img.js";
/*
	注册全局组件 loading
    需要用到的页面中 在最外层 加上 <fr-loading></fr-loading>  即可   fr-loading 可自定义名称
	js 中调用 this.$loading() 
		参数可选
			不填 -->  切换loading显示/隐藏
			'1' -->  显示
			'0' -->  隐藏
*/	
import loading_component from "components/loading.vue";
Vue.component("fr-loading",loading_component);
Vue.prototype.$loading = function (status){
	if(status){
		if(status=="1"||status=="0"){
			
			$store.commit("switch_loading",status)
		}else{
			console.log("输入的参数 有误，应为 0/1");
		}
	}else{
		$store.commit("switch_loading",'change')
	}
}



// 生产环境的提示 开关
Vue.config.productionTip = false;
// 状态数据
Vue.prototype.$store = $store;
// 请求模块
Vue.prototype.$ajax = $ajax;
// 上传图片插件
Vue.prototype.$Uploader = upload_img;

App.mpType = 'app'

const app = new Vue({
	$store,
	...App
})
app.$mount()
