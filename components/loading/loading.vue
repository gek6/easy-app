<template>
	<view class="c-loading-box" @tap="hideLoading" :style="loading_box_style" v-if="showLoading">
		<view class="c-loading">
			<image class="c-loading-img" :src="loading_img" mode=""></image>
		</view>
	</view>
</template>

<script>
	let loading_img = require("@/static/laoding.gif");

	export default {
		computed: {
			showLoading() {
				return this.$store.state.showLoading
			},
			loading_box_style() {
				let style_str = ''
				if (this.show_loading_mask) {
					style_str += "background-color: rgba(0, 0, 0, 0.3);"
				} else {
					style_str += "background-color: transparent;"
				}
				return style_str
			}
		},
		data() {
			return {
				// 是否显示遮罩背景
				show_loading_mask: true,
				// 是否开启点击遮罩 关闭loading
				hideLoadingActionIsOpen:true,
				loading_img: loading_img
			}
		},
		methods:{
			hideLoading(){
				if(this.hideLoadingActionIsOpen){
					this.$store.commit("hideLoading");
					console.log('已开启点击mask关闭loading的功能 可在loading组件中修改')
				}else{
					console.log('未开启点击mask关闭loading的功能 可在loading组件中修改')
				}
				
			}
		}
	}
</script>

<style lang="less" scoped>
	.c-loading-box {
		width: 100vw;
		height: 100vh;
		position: fixed;
		top: 0;
		left: 0;
		z-index: 999999;
		background-color: rgba(0, 0, 0, 0.4);

		// background-color: transparen: ;t;
		.c-loading {
			display: flex;
			align-items: center;
			justify-content: center;
			background-color: #ffffff;
			width: 120upx;
			height: 120upx;
			margin-left: 315upx;
			border-radius: 10upx;
			margin-top: 400upx;
			box-shadow: 0 0 10upx #ccc;

			.c-loading-img {
				width: 80upx;
				height: 80upx;
			}
		}
	}
</style>
