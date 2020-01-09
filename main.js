import Vue from 'vue'
import App from './App'

import store from "./store";
import config from "@/config/config.js";
import ajax from "@/lib/ajax.js";
import uploader from "@/lib/uploader.js"
Vue.prototype.$store = store;
Vue.prototype.$ajax = ajax;
Vue.prototype.$uploader = uploader;

Vue.use(config);//全局可 通过 this.$config 访问 配置

/*           注册全局自定义组件            */
import cuCustom from '@/colorui/components/cu-custom.vue';
import cuPageIndex from "@/pages/common-page/index.vue";
import cuPageGoods from "@/pages/common-page/goods.vue";
import cuPageContact from "@/pages/common-page/contact.vue";
import cuPageAbout from "@/pages/common-page/about.vue";
import cuPageNews from "@/pages/common-page/news.vue";
import culoading from "@/components/loading/loading.vue";
Vue.component('cu-custom',cuCustom)
Vue.component('cu-page-index',cuPageIndex)
Vue.component('cu-page-goods',cuPageGoods)
Vue.component('cu-page-contact',cuPageContact )
Vue.component('cu-page-about',cuPageAbout)
Vue.component('cu-page-news',cuPageNews)
Vue.component('cu-loading',culoading)

Vue.config.productionTip = false

App.mpType = 'app'
const app = new Vue({
    ...App
})
app.$mount()

 



