<template>
	<view :style="showPage?'opacity: 1;':'opacity: 0;'">
		<scroll-view scroll-y="true" class="app-container" :style="'height:'+containerHeight+'px'">
			<view v-if="page=='index'" :class="page=='index'?'animation-fade':''">
				<cu-page-index></cu-page-index>
			</view>
			<view v-if="page=='goods'" :class="page=='goods'?'animation-fade':''">
				<cu-page-goods></cu-page-goods>
			</view>
			<view v-if="page=='contact'" :class="page=='contact'?'animation-fade':''">
				<cu-page-contact></cu-page-contact>
			</view>
			<view v-if="page=='news'" :class="page=='news'?'animation-fade':''">
				<cu-page-news></cu-page-news>
			</view>
			<view v-if="page=='about'" :class="page=='about'?'animation-fade':''">
				<cu-page-about></cu-page-about>
			</view>
		</scroll-view>
		<cu-loading></cu-loading>
		<view id="tabbar" class="cu-bar tabbar bg-white">
			<view class="action tabbar-icon" :class="item.size=='big'?'big-icon':''" v-for="(item,index) in tabbar" :key="index" @tap="changeTab(item)">
				<view >
					<image :class="page==item.page?'animation-scale-up':''" v-if="page==item.page" :src="item.selectedIconPath" mode=""></image>
					<image   v-else :src="item.iconPath" mode=""></image>
				</view>
				<text :style="'color: '+(page==item.page?tabbarTextActiveColor:tabbarTextColor)+';'">
					{{item.title}}
				</text>
			</view>
		</view>
		<!-- 预加载所有tabbar 图标，以防点击的时候 闪一下 此处隐藏显示 -->
		<view v-for="(item,index) in tabbar" :key="index" style="display: none;">
			<image :src="item.iconPath" mode=""></image>
			<image :src="item.selectedIconPath" mode=""></image>
		</view>
	</view>
</template>

<script>
	import {
		mapState
	} from 'vuex';
	export default {
		data() {
			return {
				page: 'contact',
				showPage: false,
				containerHeight: 400,
			};
		},
		computed: {
			...mapState({
				themeColor: 'themeColor',
				tabbarTextColor: "tabbarTextColor",
				tabbarTextActiveColor: "tabbarTextActiveColor",
				tabbar:"tabbar"
			})
		},
		methods: {
			changeTab(item) {
				uni.setNavigationBarTitle({
					title:item.title
				})
				this.page = item.page
			},
			// 初始化内容区域的高度
			async init_page_size() {
				console.log("init_page_size")
				this.$nextTick(async () => {
					let sysInfo = uni.getSystemInfoSync();
					const query = uni.createSelectorQuery().in(this);
					const tabbarObj = query.select('#tabbar')
					let tabbarNodeRes = await this.syncBoundingClientRect(tabbarObj);
					let pageHeight = sysInfo.windowHeight - 50;
					this.containerHeight = pageHeight;
					this.showPage = true;
				})
			},
			syncBoundingClientRect(nodeobj) {
				return new Promise((resolve, reject) => {
					nodeobj.boundingClientRect(data => {
						console.log(data)
						resolve(data)
					}).exec();
				})
			}
		},
		mounted() {
			this.init_page_size();
			this.$store.dispatch("getArticles");
			
		}
	}
</script>

<style lang="less">
	.app-container {
		min-height: 600upx;
		background-color: #FFFFFF;
	}
	.tabbar-icon{
		image{
			width: 60upx;
			height: 60upx;
		}
	}
	.tabbar-icon.big-icon{
		position: relative;
		bottom: 20upx;
		image{
			width: 100upx;
			height: 100upx;
		}
	}
</style>
