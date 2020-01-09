import Crypto from './crypto/crypto.js';
	// const CryptoJS  = require("crypto-js");
	import './crypto/hmac.js';
	import './crypto/sha1.js';
	import {
		Base64
	} from './crypto/base64.js';
	import config from '@/config/config.js'
	// import {
	// 	format
	// } from 'date-fns'

	const uploadFileSize = 1024 * 1024 * 100; // 上传文件的大小限制100m
	const accesskey = config.oss_accesskey;
	const accessId = config.oss_accessId

	export default {
		_getPolicy() {
			let policyText = {
				"expiration": "2040-01-01T12:00:00.000Z", //设置该Policy的失效时间，超过这个失效时间之后，就没有办法通过这个policy上传文件了
				"conditions": [
					["content-length-range", 0, uploadFileSize] // 设置上传文件的大小限制
				]
			};

			return Base64.encode(JSON.stringify(policyText))
		},
		_getSignature(message) {
			let bytes = Crypto.HMAC(Crypto.SHA1, message, accesskey, {
				asBytes: true
			});
			return Crypto.util.bytesToBase64(bytes);
		},
		_getSuffix(filename) {
			let pos = filename.lastIndexOf('.')
			let suffix = ''
			if (pos != -1) {
				suffix = filename.substring(pos)
			}
			return suffix;
		},
		getFileName(filename) {
			let curTime = new Date();
			let year = curTime.getFullYear(),
				month = curTime.getMonth() + 1,
				day = curTime.getDate()
			return 'tmp/' + year + '/' + (month < 10 ? '0' + month : month) + '-' + (day < 10 ? '0' + day : day) + '/' + parseInt(Math.random()*100000) + this._getSuffix(
				filename)
		},
		getImage() {
			return new Promise((resolve, reject) => {
				uni.chooseImage({
					count: 1, //默认9
					sizeType: ['original'], //可以指定是原图还是压缩图，默认二者都有
					sourceType: ['album', 'camera'],
					success: (res) => {
						resolve(res)
					}
				})
			});
		},
		getVideo() {
			return new Promise((resolve, reject) => {
				uni.chooseVideo({
					count: 1,
					sourceType: ['camera', 'album'],
					success: function(res) {
						if (res.size > uploadFileSize) {
							uni.showToast({
								title: '文件大小超过系统上传限制：' + uploadFileSize,
								icon: 'none',
								duration: 1000
							});
							return;
						}
						resolve(res.tempFilePath)
					},
					fail: () => {
						uni.showToast({
							title: '取消选择视频',
							icon: 'none',
							duration: 2000
						});
					}
				})
			});
		},
		// 获取STS签名
		get_STS() {
			// 读取接口
			/*
			return new Promise((resolve, reject) => {
				let name = new Date().getTime() + Math.random();
				let operate = 'uploadImg';
				let that = this;
				uni.request({
					method: "GET",
					url: "https://role.bayinyq.com/index/index/oss",
					data: {
						name,
						operate,
						sign: CryptoJS.MD5(name + operate + "bayinabayin888").toString()
					},
					success(res) {
						if (res.data.code != 200) {
							that.$alert(res.data.message || res.data.msg)
						} else {
							resolve(res.data.data)
						}
					},
					error(err) {
						reject(err)
					}
				})
			}) 
			
			*/
			// 本地获取

			return new Promise((resolve, reject) => {
				let policy = this._getPolicy();
				let res = {
					accessId: accessId,
					host: config.oss_host,
					policy,
					signature: this._getSignature(policy),
				};
				resolve(res)
			})


		},
	};
