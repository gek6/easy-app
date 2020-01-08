<template>
	<view style="min-height: 100vh;background-color: #FFFFFF;">
		<view class="detail-title" :style="'color:'+textColor+';'">{{detail.title||'加载中'}}</view>
		<view class="detail-desc" :style="'color:'+descTextColor+';'">
			{{detail.original_title||'加载中'}}
		</view>
		<view class="video-box" v-if="detail.trailer_urls">
			<video class="video" :src="detail.trailer_urls[0]" controls></video>
		</view>
		<view class="detail-content" v-html="detail.summary">
			
		</view>
	</view>
</template>

<script>
	import {mapState} from "vuex";
	export default {
		data() {
			return {
				detail:''
			}
		},
		computed:{
			...mapState({
				textColor:'textColor',
				descTextColor:'descTextColor',
			})
		},
		methods: {
			
		},
		onLoad(obj) {
			this.id = obj.id;
			this.$store.dispatch("getDetail",{
				id:this.id
			}).then(res=>{
				console.log(res)
				this.detail = res;
				uni.setNavigationBarTitle({
					title:res.title
				})
			})
		}
	}
</script>

<style lang="less">
.detail-content,.detail-title,.detail-desc{
	width: 690upx;
	margin-left: 30upx;
}
.detail-title{
	font-size: 40upx;
	font-weight: bold;
	line-height: 60upx;
}
.video-box{
	width: 690upx;
	margin-left: 30upx;
	margin-top: 20upx;
	margin-bottom: 20upx;
	.video{
		width: 100%;
 
	}
}
.detail-desc{
	font-size: 26upx;
	margin-top: 20upx;
	margin-bottom: 20upx;
}
</style>
