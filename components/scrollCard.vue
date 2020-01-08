<template>
	<!-- 滚动卡片 -->
	<view class="scroll_card">
		<scroll-view class="scroll_card_content" :scroll-x="scrollX"  style="padding-bottom:10upx;">
			<view class="scroll_card_item" v-for="item in list" :key="item.id">
				<image :src="item.img_url||'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/051400059efaba079ad2141ae8453601.jpg?thumb=1&w=720&h=360'" mode=""></image>
				<view class="scroll_card_info">
					<view class="scroll_card_info_title">{{item.title || "标题"}}</view>
					<view class="scroll_card_info_des">{{item.lessontags||item.institutiontags}}</view>
					<div class="price_num"><span class="price_icon_text">￥</span>1888.00</div>
				</view>
			</view> 
		</scroll-view>
	</view>
</template>

<script>
	export default {
		props:{
			list:Array,
			title:String,
			
		},
		data() {
			return {
				scrollX:true
			};
		}
	}
</script>

<style lang="less" scoped="true">
.scroll_card{
	min-height: 200upx;
	width: 100%;

	background-color: #ffffff;
	.scroll_card_title{
		height: 80upx;
		display: flex;
		align-items: center;
		.img{
			margin-left: 30upx;
			height: 33upx;
			width: 132upx;
		}
		>text{
			margin-left: 30upx;
		}
	}
	.scroll_card_content{
		// min-height: 200upx;
		// background-color: #aaa;
		width: 100%;
		display: flex;
		white-space: nowrap; 
		.scroll_card_item{
			width: 352upx;
			height: 198upx;
			// background-color: #ccc;
			display: inline-block;
			margin-left: 30upx;
			image{
				width: 352upx;
				height: 198upx;
				border-radius: 10upx;
			}
			.scroll_card_info{
				.scroll_card_info_title{
					font-size: 26upx;
					color: rgba(0, 0, 0, 0.8);
				}
				.scroll_card_info_des{
					font-size: 20upx;
					color: rgba(0, 0, 0, 0.8);
				}
				.price_num{
					color: #E76B75;
					font-size: 32upx;
					.price_icon_text{
						font-size: 26upx;
					}
				}
			}
		}
		.scroll_card_item:last-child{
			margin-right:30upx;
		}
	}
}
</style>

