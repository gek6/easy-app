<template>
	<view>
		
		<view class="padding-xs flex align-center bg-white">
			<view class="flex-sub">
				<view style="padding: 10upx;">
					<view>获取上传token接口：</view>
					http://oss-sign.gek6.com/oss-sts-sign
				</view>
				<view style="padding: 10upx;">当前储存空间 为 “thamiti”</view>
				<view style="padding: 10upx;width: 690upx;" >
					  <button class="cu-btn bg-cyan" @tap="getToken">获取上传签名</button>
				</view>
				<view style="padding: 10upx;width: 690upx;" >
					  <button class="cu-btn bg-cyan" @tap="uploadOne">上传一张图片</button>
				</view>
				<view style="padding: 10upx;font-size: 26upx;"  v-if="imgUrl"> <view>图片路径：</view> {{imgUrl}}</view>
				<image style="width: 200upx;height: 200upx;"  v-if="imgUrl" :src="imgUrl" mode="widthFix"></image>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				imgUrl:''
			};
		},
		methods:{
		 	async getToken(){
				let res = await this.$ajax.get({
					url:"http://oss-sign.gek6.com/oss-sts-sign"
				});
				console.log(res);
			},
			uploadOne(){
				uni.chooseImage({
					success:async (tempRes) => {
						// console.log(tempRes.tempFiles);
						let file = tempRes.tempFiles[0]
						// 上传多张在这里写个for循环即可 因为是 await 所以会同步执行 一个个传完
						let res = await this.$uploader.upload2oss(file);
						this.imgUrl = res;
					}
				})
			},
			
			
		}
	}
</script>

<style lang="less">

</style>
