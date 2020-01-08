<template>
	<view style="height: 100%;">
		<!-- 轮播图 -->
		<swiper class="screen-swiper" :class="dotStyle?'square-dot':'round-dot'" :indicator-dots="true" :circular="true"
		 :autoplay="true" interval="5000" duration="500" :indicator-color="bannerDotColor" :indicator-active-color="bannerDotActiveColor">
			<swiper-item v-for="(item,index) in swiperList" :key="index">
				<image :src="item.url" mode="aspectFill" v-if="item.type=='image'"></image>
				<video :src="item.url" autoplay loop muted :show-play-btn="false" :controls="false" objectFit="cover" v-if="item.type=='video'"></video>
			</swiper-item>
		</swiper>
		
		<!-- 企业简介 标题 -->
		<view class="cu-bar bg-white">
			<view class="cu-bar bg-white">
				<view class="action border-title">
					<text class="text-xl text-bold" :style="'color: '+themeColor+';'">简介</text>
					<text class="bg-grey" :style="'width:3rem;background-color: '+themeColor+';'"></text>
					<!-- 底部样式 last-child选择器-->
				</view>
				
			</view>
			
		</view>
		<!-- 企业简介 图文内容 -->
		<view class="cu-card article no-card">
			<view class="cu-item shadow">
				<view class="content">
					<view class="desc">
						<view class="text-content" :style="'color: '+descTextColor+';'">
								Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorem possimus maxime accusantium perspiciatis unde tempora quasi blanditiis qui magni voluptatum incidunt officia fugiat provident atque iure dolores illo totam tenetur.
						</view>
					</view>
					<image src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1577194510734&di=5dac4a5d53564ad770cc4c09a223f148&imgtype=0&src=http%3A%2F%2Fpic-bucket.nosdn.127.net%2Fphoto%2F0245%2F2018-01-28%2FD98K90ITJ55L0245NOS.jpg" mode="aspectFill"></image>
				</view>
			</view>
		</view>
		<!-- 滚动卡片 -->
		<view class="cu-bar bg-white">
			<view class="cu-bar bg-white">
				<view class="action border-title">
					<text class="text-xl text-bold" :style="'color: '+themeColor+';'">横向滚动卡片</text>
					<text class="bg-grey" :style="'width:3rem;background-color: '+themeColor+';'"></text>
					<!-- 底部样式 last-child选择器-->
				</view>
			</view>
			<view style="padding-right: 30upx;" class="text-gray">查看更多<text class="cuIcon-right"></text></view>
		</view>
		<scrollCard :list="articles"></scrollCard>
		<!-- 新闻列表 标题 -->
		<view class="cu-bar bg-white">
			<view class="cu-bar bg-white">
				<view class="action border-title">
					<text class="text-xl text-bold" :style="'color: '+themeColor+';'">热门新闻</text>
					<text class="bg-grey" :style="'width:3rem;background-color: '+themeColor+';'"></text>
					<!-- 底部样式 last-child选择器-->
				</view>
			</view>
			<view style="padding-right: 30upx;" class="text-gray">查看更多<text class="cuIcon-right"></text></view>
		</view>
		<!-- 新闻列表内容 -->
		<view class="cu-list menu-avatar">
			<view class="cu-item cur" v-for="(i,k) in articles" :key="k" @tap="jump_detail(i.id)">
				<view class="cu-avatar radius lg" style="overflow: hidden;">
					<image :src="i.images.small" mode="aspectFill"></image>
				</view>
				<view class="content">
					<view>
						<view class="text-cut">{{i.title}}</view>
					</view>
					<view class="text-gray text-sm flex">
						<view class="text-cut">
							<text style="margin-right: 16upx;">{{i.durations[0]}} </text>
							<text style="margin-left: 4upx;" v-for="tag in i.genres" :key="tag">{{tag}}</text>
						</view>
					</view>
				</view>
				<view class="action">
					<view class="text-grey text-xs">22:20</view>
					<view class="cuIcon-notice_forbid_fill text-gray"></view>
				</view>
			</view>
		</view>

	</view>
</template>

<script>
	import {mapState} from "vuex";
	import scrollCard from "@/components/scrollCard.vue"
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
		components:{
			scrollCard
		},
		data() {
			return {
				cardCur: 0,
				swiperList: [{
					id: 0,
					type: 'image',
					url: 'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/051400059efaba079ad2141ae8453601.jpg?thumb=1&w=720&h=360'
				}, {
					id: 1,
					type: 'image',
					url: 'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/241dcd985a1c3f29902d092c7e7b91ea.jpg?thumb=1&w=720&h=360',
				}, {
					id: 2,
					type: 'image',
					url: 'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/e5a0c56428bde232ffcff3e53a13eb47.jpg?thumb=1&w=720&h=360'
				}],
				dotStyle: false,
				towerStart: 0,
				direction: '',
				list:[],
			};
		},
		methods:{
			jump_detail(id){
				uni.navigateTo({
					url:'../home/detail?id='+id
				})
			}
		},
		created() {
			console.log("created")
		 
		}
	}
</script>

<style lang="less">

</style>
