<template>
	<view>
		<view class="box">
			<view class="cu-bar bg-white">
				<view class="action">
					<text class="cuIcon-titles" :style="'color: '+themeColor+';'"></text>
					<text class="text-xl text-bold">一键切换主题色</text>
				</view>
			</view>
		</view>
		<view class="padding-xs flex align-center">
			<view class="flex-sub">
				<view style="padding: 10upx;">应用内切换，同理可配置其他颜色。应用启动会请求配置；</view>
			</view>
		</view>
		<view style="width: 690upx;margin-left: 30upx;">
			<button class="cu-btn bg-red text-white margin-lr-xs" @tap="setThemeColor('#ff0000')">红色</button>
			<button class="cu-btn bg-blue text-white margin-lr-xs" @tap="setThemeColor('#3586ea')">蓝色</button>
		</view>
		
		<view class="box">
			<view class="cu-bar bg-white">
				<view class="action">
					<text class="cuIcon-titles" :style="'color: '+themeColor+';'"></text>
					<text class="text-xl text-bold">自定义loading</text>
				</view>
			</view>
		</view>
		<view class="padding-xs flex align-center">
			<view class="flex-sub">
				<view style="padding: 10upx;">全局自定义loading组件，要在每个需要用的页面 加上 "cu-loading标签"</view>
			</view>
		</view>
		<view class="padding-xs">
			<button class="cu-btn bg-cyan margin-lr-xs" @tap="$store.commit('showLoading')">显示</button>
			<button class="cu-btn bg-cyan margin-lr-xs" @tap="$store.commit('showLoading',3)">显示且3秒后自动关闭</button>
			<button class="cu-btn bg-cyan margin-lr-xs" @tap="$store.commit('hideLoading')">隐藏</button>
		</view>
		<view class="box">
			<navigator class="cu-bar bg-white" url="../upload/qiniu">
				<view class="action">
					<text class="cuIcon-titles" :style="'color: '+themeColor+';'"></text>
					<text class="text-xl text-bold">上传图片至七牛云</text>
				</view>
				<view class="action">
					<text class="cuIcon-right" :style="'color: '+themeColor+';'"></text>
				</view>
			</navigator>
		</view>
		<view class="padding-xs flex align-center">
			<view class="flex-sub">
				<view style="padding: 10upx;">以base64直传七牛云</view>
				<view style="padding: 10upx;">已测 微信小程序 头条小程序 APP安卓端 H5端 其他端未测</view>
			</view>
		</view>
		<view class="box">
			<navigator class="cu-bar bg-white" url="../upload/oss">
				<view class="action">
					<text class="cuIcon-titles" :style="'color: '+themeColor+';'"></text>
					<text class="text-xl text-bold">上传图片至阿里OSS</text>
				</view>
				<view class="action">
					<text class="cuIcon-right" :style="'color: '+themeColor+';'"></text>
				</view>
			</navigator>
		</view>
		<view class="padding-xs flex align-center">
			<view class="flex-sub">
				<view style="padding: 10upx;">H5以后端签名STS，及OSS官方插件直传阿里OSS</view>
				<view style="padding: 10upx;">其他端直接为前端签名，因为除了H5其他端的源码 客户端不会看到。安全起见H5端使用STS签名</view>
				<view style="padding: 10upx;">已测 微信小程序 头条小程序 APP安卓端 H5端 其他端未测</view>
			</view>
		</view>
	</view>
</template>

<script>
	import {mapState} from "vuex"
	export default {
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
		data() {
			return {
				
			};
		},
		methods:{
			setThemeColor(color){
				
				this.$store.commit("SET_COLOR",{
					"themeColor": color,
						"bannerDotColor":"rgba(255,255,255,0.3)",
						"bannerDotActiveColor":color,
						"textColor":color,
						"descTextColor":"#aaaaaa",
				})
			}
		}
	}
</script>

<style lang="less">

</style>
