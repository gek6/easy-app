<template>
	<view class="loading_box" v-show="is_loading=='1'" @click="switch_loading">
		<view class="loading">
			<image class="rotate" src="/static/loading2.png" mode=""></image>
			 
		</view>
		
		<!-- <view class="loading">
			<view class="loader loader-17">
			  <view class="css-square square1"></view>
			  <view class="css-square square2"></view>
			  <view class="css-square square3"></view>
			  <view class="css-square square4"></view>
			  <view class="css-square square5"></view>
			  <view class="css-square square6"></view>
			  <view class="css-square square7"></view>
			  <view class="css-square square8"></view>
			</view>
			  
		</view> -->
	</view>
</template>
 
<script>
	export default {
		data() {
			return {
				
			};
		},
		methods:{
			switch_loading(){
				this.$loading()
			}
		},
		computed:{
			is_loading(){
				console.log("---------")
				console.log(this.$store.state.loading)
				return this.$store.state.loading
			}
		}
	}
</script>

<style>
@import "../../lib/loading_animate/loading.wxss";
.loading_box{
	width: 100%;
	height: 100vh;
	/* background-color: rgba(0,0,0,0.4); */
	position: absolute;
	left: 0;
	top: 0;
	z-index: 10000;
}
.loading{
	width: 200upx;
	height: 200upx;
	margin-left: 275upx;
	margin-top: 300upx;
	text-align: center;
	line-height: 200upx;
	color: #FFFFFF;
	background-color: rgba(0,0,0,0.8);
	border-radius: 20upx;
	
}
.loading image{
	width: 80upx;
	height: 80upx;
	vertical-align: middle;
}
.loading .icon{
	width: 160upx;
	height: 160upx;
	vertical-align: middle;
}
.iconfont{
	font-size: 60upx;
	display: inline-block;
}
/* 无限旋转动画 */
		.rotate {
			-webkit-transition-property: -webkit-transform;
			-webkit-transition-duration: 1s;
			-moz-transition-property: -moz-transform;
			-moz-transition-duration: 1s;
			-webkit-animation: rotate 0.6s linear infinite;
			-moz-animation: rotate 0.6s linear infinite;
			-o-animation: rotate 0.6s linear infinite;
			animation: rotate 0.6s linear infinite;
		}
	
		@-webkit-keyframes rotate {
			from {
				-webkit-transform: rotate(359deg)
			}
	
			to {
				-webkit-transform: rotate(0deg)
			}
		}
	
		@-moz-keyframes rotate {
			from {
				-moz-transform: rotate(359deg)
			}
	
			to {
				-moz-transform: rotate(0deg)
			}
		}
	
		@-o-keyframes rotate {
			from {
				-o-transform: rotate(359deg)
			}
	
			to {
				-o-transform: rotate(0deg)
			}
		}
	
		@keyframes rotate {
			from {
				transform: rotate(359deg)
			}
	
			to {
				transform: rotate(0deg)
			}
		}
	
		/* 无限旋转动画 end */
</style>
