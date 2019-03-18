<template>
	<view >

		<view class="" >
			<fr-loading></fr-loading>

			<view class="btns">
				<button class="btn" type="primary" @click="choose_img(1)">选择1张图片</button>
				<button class="btn" type="primary" @click="choose_img(2)">选择2张图片</button>
				<button class="btn" type="primary" @click="choose_img(3)">选择3张图片</button>
				<button class="btn" type="primary" @click="choose_img_upload(1)">选择1张图片并上传</button>
				<button class="btn" type="primary" @click="choose_img_upload(2)">选择2张图片并上传</button>
				<button class="btn" type="primary" @click="choose_img_upload(3)">选择3张图片并上传</button>
				<button class="btn" type="primary" @click="show_loading">显示loading</button>
			</view>
			


			<view class="img_list">
				<view class="">
					显示区域
				</view>
				<view class="path" v-if="img_path">
					<view class="title">图片路径</view>
					<view class="" v-for="(item,index) in img_path" :key="index">
						<view>本地缓存地址:</view>
						 
						<text>{{item}}</text>
					</view>
				</view>
				<view class="urls" v-if="img_urls">
					
					<view style="width: 690upx;margin-left: 30upx;" v-for="(item,index) in img_urls" :key="index">
						<image class="img" :src="item" mode="widthFix" ></image>
						<view><view>远程地址:</view><text>{{item}}</text></view>
					</view>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				img_path: '',
				img_urls: ''
			};
		},
		methods: {
			show_loading() {
				console.log("show_loading");
				this.$store.commit("switch_loading", "1")
			},
			async choose_img(n) {

				this.data_null()
				let uploader = new this.$Uploader();
				let img_path = await uploader.choose(n);

				this.img_path = img_path;
				console.log(img_path)
			},
			async choose_img_upload(n) {
				this.data_null()
				let uploader = new this.$Uploader();
				let path_arr = await uploader.choose_and_upload(n);
				console.log(path_arr);
				this.img_urls = path_arr;
				console.log(this.img_urls)
			},
			data_null() {
				this.img_path = "";
				this.img_urls = ""
			}
		}
	}
</script>

<style scoped="true">
	
	.btns{
		width: 100%;
		overflow: hidden;
	}
.content button.btn{
		width: 300upx;
		font-size: 30upx;
		float: left;
		font-size: 28upx ;
	}
	.img_list{
		width: 100%;
		margin-top: 50upx;
	}
	text{
word-break: keep-all;
word-wrap: break-word;
}
.content {
	text-align: center;
 
}
.logo {
	height: 200upx;
	width: 200upx;
	margin-top: 200upx;
}
.title {
	font-size: 36upx;
	color: #8f8f94;
}
.btn{
	width: 690upx;
	margin-left: 30upx;
	font-size: 32upx;
	margin-top: 30upx;
}
.item{
	font-size: 32upx;
	width: 690upx;
	margin-left: 30upx;
	overflow: hidden;
	margin-top: 30upx;
}
.img{
	max-width: 690upx;
 
	margin-top: 30upx;
}
</style>
