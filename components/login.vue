<template>
	<view>
		<view class="img">
			<image src="http://img.gek6.com/FjerHKdBPF7MS6uxMfoCLKcZILdc" mode=""></image>
		</view>
		<view class="form">
			<view class="input_line">
				<input type="text" maxlength="11" placeholder="输入手机号"/>
			</view>
			<view class="input_line ">
				<input type="text" maxlength="6" placeholder="输入验证码"/>
				<button class="msg_code">获取验证码</button>
			</view>
			<view class="input_line " style="margin-top: 100upx;">
				 
				<button class="msg_code submit" hover-class="submit_hover">登录</button>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				
			};
		}
	}
</script>

<style scoped="true" lang="less">
.img{
	width: 100%;
	height: 300upx;
	// background-color: #ccc;
	text-align: center;
	display: flex;
	align-items: center;
	justify-content: space-around;
	image{
		width: 150upx;
		height: 150upx;
		border-radius: 50%;
		
	}
}
.form{
	width: 100%;
	min-height: 500upx;
	// background-color: #aaa;
	.input_line{
		
		// background-color: #ccc;
		width: 500upx;
		margin-left: 125upx;
		height: 100upx;
		display: flex;
		align-items: center;
		input{
			background-color: #fff;
			width: 100%;
			height: 72upx;
			padding-left: 30upx;
			box-shadow: 0 0 10upx #888;
			font-size: 28upx;
			color: #888;
		}
		button.msg_code{
			height: 76upx;
			color: #888;
			margin: 0;
			padding: 0;
			width: 400upx;
			margin-left: 30upx;
			font-size: 28upx;
			padding-left: 30upx;
			padding-right: 30upx;
			text-align: center;
			line-height: 72upx;
		}
		button.submit{
			background-color: #4C8CF5;
			color:#fff;
			margin-left: 0upx;
			width: 100%;
		}
		button.submit_hover{
			background-color: #1C67EA;
		}
	}
}
</style>
