import Vue from 'vue'
import Vuex from 'vuex'
import ajax from "@/lib/ajax.js"
Vue.use(Vuex)

const store = new Vuex.Store({
	state: {
		themeColor:'#888888',
		bannerDotColor:"#888888",
		bannerDotActiveColor:"#888888",
		tabbar:[],
		tabbarTextColor:'',
		tabbarTextActiveColor:"",
		textColor:"",
		descTextColor:"",
		priceColor:"",
		articles:[],
		showLoading:false,
	},
	mutations: {
		SET_COLOR(state,colors){
			// 主题色
			state.themeColor = colors.themeColor
			// 轮播小点 未选中
			state.bannerDotColor = colors.bannerDotColor
			// 轮播小点 选中
			state.bannerDotActiveColor = colors.bannerDotActiveColor
			// 文字主色
			state.textColor = colors.textColor
			// 价格色
			state.priceColor = colors.priceColor
			// 描述色
			state.descTextColor = colors.descTextColor
			// 底部菜单文字 选中
			state.tabbarTextActiveColor = colors.tabbarTextActiveColor
			// 底部菜单文字 未选中
			state.tabbarTextColor = colors.tabbarTextColor
		},
	 
		
		SET_ARTICLES(state,list){
			console.log('SET_ARTICLES',list)
			state.articles = list;
		},
		
		SET_TABBAR(state,tabbar){
			state.tabbar = tabbar||[]
		},
		
		showLoading(state,sec){
			if(sec){
				state.showLoading = true;
				setTimeout(()=>{
					state.showLoading = false;
				},sec*1000)
			}else{
				state.showLoading = true;
			}
			
		},
		hideLoading(state){
			state.showLoading = false;
		}
	},
	actions: {
		async getArticles(ctx,params){
			uni.showLoading({
			    title: '加载中'
			});
			let result = await ajax.get({
				url:'/v2/movie/top250',
				data:{
					start:0,
					count:5
				}
			});
			uni.hideLoading()
			ctx.commit("SET_ARTICLES",result.subjects)
			return result.subjects
		},
		async getDetail(ctx,params){
			// /v2/movie/subject/:id
			uni.showLoading({
			    title: '加载中'
			});
			let result = await ajax.get({
				url:'/v2/movie/subject/'+params.id,
			});
			uni.hideLoading();
			return result;
		},
		async getCategories(){
			uni.showLoading({
			    title: '加载中'
			});
			let result = await ajax.get({
				url:'https://www.gek6.cn/index.php?rest_route=/wp/v2/categories',
			});
			uni.hideLoading();
			return result;
		},
		
		async getArticlesByCate(ctx,params){
			uni.showLoading({
			    title: '加载中'
			});
			let result = await ajax.get({
				url:"http://www.gek6.cn/index.php?rest_route=%2Fwp%2Fv2%2Fposts&categories="+params.id,
			});
			uni.hideLoading();
			return result;
		}
	}
})

export default store
