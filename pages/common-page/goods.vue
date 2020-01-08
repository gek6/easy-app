<template>
	<view>
		<swiper class="card-swiper" :class="dotStyle?'square-dot':'round-dot'" :indicator-dots="true" :circular="true"
		 :autoplay="true" interval="5000" duration="500" @change="cardSwiper" :indicator-color="bannerDotColor"
		 :indicator-active-color="bannerDotActiveColor">
			<swiper-item v-for="(item,index) in swiperList" :key="index" :class="cardCur==index?'cur':''">
				<view class="swiper-item">
					<image :src="item.url" mode="aspectFill" v-if="item.type=='image'"></image>
					<video :src="item.url" autoplay loop muted :show-play-btn="false" :controls="false" objectFit="cover" v-if="item.type=='video'"></video>
				</view>
			</swiper-item>
		</swiper>
		<scroll-view scroll-x class="bg-white nav" scroll-with-animation :scroll-left="scrollLeft">
			<view class="cu-item" :class="TabCur==index?'current':''" v-for="(item,index) in 10" :key="index" @tap="tabSelect" :data-id="index">
				<view class="tab-text" :style="TabCur==index?'color: '+themeColor+';':''" >TAB{{item}}</view>
				<view class="tab-bottom-line-box">
					<view class="tab-bottom-line" :style="'background-color: '+themeColor+';'"></view>
				</view>
			</view>
		</scroll-view>
		<view class="goods-list">
			<view class="goods-item" v-for="(item,index) in articles" :key="index" @tap="jump_detail(item.id)">
				<view class="goods-img">
					<image :src="item.images.small" mode=""></image>
				</view>
				<view class="goods-info">
					{{item.title}}
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	import {
		mapState
	} from "vuex";
	 
	export default {
		data() {
			return {
				TabCur: 0,
				scrollLeft: 0,

				tabList: [
				],
				dotStyle: false,
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
				list:[]
			};
		},
		components: {},
		computed: {
			...mapState({
				themeColor: 'themeColor',
				textColor: 'textColor',
				descTextColor: "descTextColor",
				bannerDotColor: 'bannerDotColor',
				bannerDotActiveColor: "bannerDotActiveColor",
				articles: 'articles'
			})
		},
		methods: {
			cardSwiper(e) {
				this.cardCur = e.detail.current
			},
			tabSelect(e) {
				this.TabCur = e.currentTarget.dataset.id;
				this.scrollLeft = (e.currentTarget.dataset.id - 1) * 60;
				uni.showToast({
					title:`切换到了 TAB${this.TabCur}`,
					icon:'none'
				})
			},
			jump_detail(id){
				uni.navigateTo({
					url:'../home/detail?id='+id
				})
			},
			 
			
		},
		mounted() {
			console.log('mounted')
			
		}
	}
</script>

<style lang="less">
 
	.nav {
		.cu-item {
			 
			.tab-text{
				height: 43px;
			}
			.tab-bottom-line {
				width: 0%;
				height: 2px;
				background-color: #0081FF;
				transition-duration: 0.3s;
			}
			.tab-bottom-line-box{
				display: flex;
				justify-content: center;
			}
		}
		.cu-item.current{
			.tab-bottom-line {
				width: 100%;
			 
			}
		}

		
	}
</style>
