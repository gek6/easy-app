<template>
	<view style="width: 690upx;margin-left: 30upx;margin-top: 30upx;font-size: 28upx;">
		<!-- #ifdef APP-PLUS -->
		<my-html :detail="detail"></my-html>
		<!-- #endif -->
		
		<!-- #ifdef H5 -->
		<view v-html="detail"></view>
		<!-- #endif -->
		
		<fr-loading></fr-loading>

	</view>
</template>

<script>
	export default {
		data() {
			return {
			 
			};
		},
		
		methods:{
			 
		},
		onLoad(opt) {
			this.$store.commit("update_detail","<div>加载中</div>")
			this.$store.dispatch("get_detail",opt.id);
		},
		computed:{
			detail(){
				console.log(this.$store.state.detail)
				return this.$store.state.detail;
			}
		}
		
	}
</script>

<style>

</style>
