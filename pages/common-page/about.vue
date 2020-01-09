<template>
	<view style="height: 100%;">
		<view class="box">
			<view class="cu-bar bg-white">
				<view class="action">
					<text class="cuIcon-titles" :style="'color: ' + themeColor + ';'"></text>
					<text class="text-xl text-bold">动态设置tabbar</text>
				</view>
			</view>
		</view>
		<view class="padding-xs flex align-center">
			<view class="flex-sub"><view style="padding: 10upx;">应用内切换，或在异步请求的配置文件中进行修改；</view></view>
		</view>
		<view style="width: 690upx;margin-left: 30upx;">
			<view style="margin-bottom: 10upx;">（一、不同数量）首页 - 产品中心 - 新闻中心 - 关于我们</view>
			<button class="cu-btn bg-blue text-white margin-lr-xs" @tap="setTabbar1()" style="margin-bottom: 20upx;">应用</button>
		</view>
		<view style="width: 690upx;margin-left: 30upx;">
			<view style="margin-bottom: 10upx;">（二、不同数量）首页 - 产品中心 - 关于我们</view>
			<button class="cu-btn bg-blue text-white margin-lr-xs" @tap="setTabbar2()" style="margin-bottom: 20upx;">应用</button>
		</view>
		<view style="width: 690upx;margin-left: 30upx;">
			<view style="margin-bottom: 10upx;">（三、不同顺序）首页 - 新闻中心 - 发布 - 产品中心 - 关于我们</view>
			<button class="cu-btn bg-blue text-white margin-lr-xs" @tap="setTabbar3()" style="margin-bottom: 20upx;">应用</button>
		</view>
		
		<view style="width: 690upx;margin-left: 30upx;">
			<view style="margin-bottom: 10upx;">（四、不同顺序）关于我们 - 新闻中心 - 产品中心 - 首页 </view>
			<button class="cu-btn bg-blue text-white margin-lr-xs" @tap="setTabbar4()" style="margin-bottom: 20upx;">应用</button>
		</view>
	</view>
</template>

<script>
	import {mapState} from "vuex"
export default {
	data() {
		return {};
	},
	computed: {
		...mapState({
			themeColor:'themeColor',
			textColor:'textColor',
			descTextColor:"descTextColor",
			bannerDotColor:'bannerDotColor',
			bannerDotActiveColor:"bannerDotActiveColor",
			articles:'articles'
		})
	},
	methods: {
		setTabbar1() {
			let tabbarList = [
				{
					iconPath: 'http://cdn.gek6.cn/fr-uni-app-icon/e2.png',
					selectedIconPath: 'http://cdn.gek6.cn/fr-uni-app-icon/e1.png',
					title: '关于我们',
					page: 'about'
				},
				{
					iconPath: 'http://cdn.gek6.cn/fr-uni-app-icon/d2.png',
					selectedIconPath: 'http://cdn.gek6.cn/fr-uni-app-icon/d1.png',
					title: '新闻中心',
					page: 'news'
				},
				
				{
					iconPath: 'http://cdn.gek6.cn/fr-uni-app-icon/b2.png',
					selectedIconPath: 'http://cdn.gek6.cn/fr-uni-app-icon/b1.png',
					title: '产品中心',
					page: 'goods'
				},
				{
					iconPath: 'http://cdn.gek6.cn/fr-uni-app-icon/a2.png',
					selectedIconPath: 'http://cdn.gek6.cn/fr-uni-app-icon/a1.png',
					title: '首页',
					page: 'index'
				}
			];
			this.$store.commit('SET_TABBAR', tabbarList);
		},
		setTabbar2() {
			let tabbarList = [
				{
					iconPath: 'http://cdn.gek6.cn/fr-uni-app-icon/a2.png',
					selectedIconPath: 'http://cdn.gek6.cn/fr-uni-app-icon/a1.png',
					title: '首页',
					page: 'index'
				},
				{
					iconPath: 'http://cdn.gek6.cn/fr-uni-app-icon/b2.png',
					selectedIconPath: 'http://cdn.gek6.cn/fr-uni-app-icon/b1.png',
					title: '产品中心',
					page: 'goods'
				},
				{
					iconPath: 'http://cdn.gek6.cn/fr-uni-app-icon/e2.png',
					selectedIconPath: 'http://cdn.gek6.cn/fr-uni-app-icon/e1.png',
					title: '关于我们',
					page: 'about'
				}
			];
			this.$store.commit('SET_TABBAR', tabbarList);
		},
		setTabbar3() {
			let tabbarList = [
				{
					iconPath: 'http://cdn.gek6.cn/fr-uni-app-icon/a2.png',
					selectedIconPath: 'http://cdn.gek6.cn/fr-uni-app-icon/a1.png',
					title: '首页',
					page: 'index'
				},
				{
					iconPath: 'http://cdn.gek6.cn/fr-uni-app-icon/d2.png',
					selectedIconPath: 'http://cdn.gek6.cn/fr-uni-app-icon/d1.png',
					title: '新闻中心',
					page: 'news'
				},
				{
					iconPath: 'http://cdn.gek6.cn/fr-uni-app-icon/c2.png',
					selectedIconPath: 'http://cdn.gek6.cn/fr-uni-app-icon/c1.png',
					title: '发布',
					page: 'contact',
					size: 'big'
				},
				
				{
					iconPath: 'http://cdn.gek6.cn/fr-uni-app-icon/b2.png',
					selectedIconPath: 'http://cdn.gek6.cn/fr-uni-app-icon/b1.png',
					title: '产品中心',
					page: 'goods'
				},
				{
					iconPath: 'http://cdn.gek6.cn/fr-uni-app-icon/e2.png',
					selectedIconPath: 'http://cdn.gek6.cn/fr-uni-app-icon/e1.png',
					title: '关于我们',
					page: 'about'
				}
			];
			this.$store.commit('SET_TABBAR', tabbarList);
		},
		setTabbar4() {
			let tabbarList = [
				{
					iconPath: 'http://cdn.gek6.cn/fr-uni-app-icon/e2.png',
					selectedIconPath: 'http://cdn.gek6.cn/fr-uni-app-icon/e1.png',
					title: '关于我们',
					page: 'about'
				},
				
				{
					iconPath: 'http://cdn.gek6.cn/fr-uni-app-icon/b2.png',
					selectedIconPath: 'http://cdn.gek6.cn/fr-uni-app-icon/b1.png',
					title: '产品中心',
					page: 'goods'
				},
				// {
				// 	iconPath: 'http://cdn.gek6.cn/fr-uni-app-icon/c2.png',
				// 	selectedIconPath: 'http://cdn.gek6.cn/fr-uni-app-icon/c1.png',
				// 	title: '发布',
				// 	page: 'contact',
				// 	size: 'big'
				// },
				{
					iconPath: 'http://cdn.gek6.cn/fr-uni-app-icon/d2.png',
					selectedIconPath: 'http://cdn.gek6.cn/fr-uni-app-icon/d1.png',
					title: '新闻中心',
					page: 'news'
				},
				{
					iconPath: 'http://cdn.gek6.cn/fr-uni-app-icon/a2.png',
					selectedIconPath: 'http://cdn.gek6.cn/fr-uni-app-icon/a1.png',
					title: '首页',
					page: 'index'
				}
				
			];
			this.$store.commit('SET_TABBAR', tabbarList);
		},
	}
};
</script>

<style lang="less"></style>
