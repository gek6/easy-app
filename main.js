import Vue from 'vue'
import App from './App'

// import basics from './pages/basics/home.vue'
// Vue.component('basics',basics)
import store from "./store";
Vue.prototype.$store = store;
// import components from './pages/component/home.vue'
// Vue.component('components',components)

// import plugin from './pages/plugin/home.vue'
// Vue.component('plugin',plugin)
// 
import cuCustom from './colorui/components/cu-custom.vue';
import cuPageIndex from "./pages/common-page/index.vue";
import cuPageGoods from "./pages/common-page/goods.vue";
import cuPageContact from "./pages/common-page/contact.vue";
import cuPageAbout from "./pages/common-page/about.vue";
import cuPageNews from "./pages/common-page/news.vue";
import culoading from "./components/loading/loading.vue";
Vue.component('cu-custom',cuCustom)
Vue.component('cu-page-index',cuPageIndex)
Vue.component('cu-page-goods',cuPageGoods)
Vue.component('cu-page-contact',cuPageContact)
Vue.component('cu-page-about',cuPageAbout)
Vue.component('cu-page-news',cuPageNews)
Vue.component('cu-loading',culoading)

Vue.config.productionTip = false

App.mpType = 'app'

const app = new Vue({
    ...App
})
app.$mount()

 



