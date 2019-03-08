<template>
	<view class="toast" v-show="show_loading" @click="close">
		<view class="loading">
			<image class="rotate" src="/static/icon/loading/loading2.png" mode=""></image>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				
			};
		},
		computed:{
			show_loading(){
				if(this.$store.state.show_loading=='1'){
					return true;
				}else{
					return false;
				}
			}
		},
		methods:{
			// 关闭loading
			close(){
				this.$store.commit("switch_loading","0")
			}
		}
	}
</script>

<style scoped="true">
.toast{
	width: 100%;
	height: 100vh;
	/* background-color: rgba(0,0,0,0.4); */
	position: fixed;
	top: 0;
	left: 0;
	z-index: 1000;
}
.icon{
	
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
