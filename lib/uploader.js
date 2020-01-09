import config from "@/config/config.js"
// #ifdef H5 
// H5上传
const OSS = require('ali-oss');
// #endif

import {
	Base64
} from 'js-base64';
const dateFormat = require('dateformat');
var randomString = require('random-string');

import OSSUtil from "./Upload_2_OSS/ossUtil.js";
class Uploader {
	constructor() {
		this.qiniuTokenApi = "http://qiniu.gek6.com/get_token.php";
		this.qiniuUploadApi = "http://upload-z1.qiniu.com/putb64";
		this.qiniuImgDomain = "http://img.gek6.com";
		this.ossTokenApi = "http://oss-sign.gek6.com/oss-sts-sign";
	}
	async upload2oss(file) {
		// #ifdef H5 
		// H5上传
		return await this.h5OssUpload(file.path)
		// #endif

		// #ifdef MP-WEIXIN
		// 微信小程序上传
		return await this.mpUpload2oss(file.path)
		// #endif
	}
	// 小程序 上传到OSS 前端签名
	async mpUpload2oss(imageSrc) {
		return new Promise(async (resolve, reject) => {
			let sign = await OSSUtil.get_STS()
			let fileName = "fr-uni-app" + "/" + dateFormat(new Date(), "yyyy/mm/dd/HH") + "/" + randomString({
				length: 10
			})
			let uploadTask = uni.uploadFile({
				url: sign.host,
				filePath: imageSrc,
				fileType: 'image',
				name: 'file',
				formData: {
					name: imageSrc,
					'key': fileName,
					'policy': sign.policy,
					'OSSAccessKeyId': sign.accessId,
					'success_action_status': '200',
					//让服务端返回200,不然，默认会返回204
					'signature': sign.signature,
				},
				success: (res) => {
					// console.log('uploadImage success, res is:', res)
					uni.showToast({
						title: '上传成功',
						icon: 'none',
					});
					let ret = {
						data: sign.host + fileName
					}
					resolve(ret.data)

				},
				fail: (err) => {
					// console.log('uploadImage fail', err);
					uni.showModal({
						content: err.errMsg,
						showCancel: false
					});
					reject();
				}
			});
			uploadTask.onProgressUpdate((res) => {
				// console.log("上传进度" + res.progress);
				this.progress = res.progress;
			});
		})
	}
	async h5OssUpload(blob_src) {
		// H5通过blob上传
		return new Promise(async (resolve, reject) => {
			let blob_obj = await this.h5BlobUrlToBlobObj(blob_src);
			const oss_sign = await this.getOssSTSSign();
			console.log(oss_sign);
			const client = new OSS({
				accessKeyId: oss_sign.AccessKeyId,
				accessKeySecret: oss_sign.AccessKeySecret,
				stsToken: oss_sign.SecurityToken,
				endpoint: config.OSS_endpoint,
				bucket: config.OSS_bucket
			})
			let customFileName = "fr-uni-app" + "/" + dateFormat(new Date(), "yyyy/mm/dd/HH") + "/" + randomString({
				length: 10
			})
			const result = await client.put(customFileName, blob_obj)
			resolve(result.url)
		})
	}
	getOssSTSSign() {
		return new Promise((resolve, reject) => {
			uni.request({
				method: "GET",
				url: this.ossTokenApi,
				success: (res) => {
					resolve(res.data);
				},
				fail(err) {
					reject(err)
				}
			})
		})
	}
	async upload2qiniu(file) {
		// 统一通过base64 上传
		let base64 = await this.path2base64(file.path);
		let token = await this.getToken();
		return new Promise((resolve, reject) => {
			let customFileName = "fr-uni-app" + "/" + dateFormat(new Date(), "yyyy/mm/dd/HH") + "/" + randomString({
				length: 10
			})
			uni.request({
				url: `${this.qiniuUploadApi}/${file.size||'-1'}/key/${Base64.encode(customFileName)}`,
				method: 'POST',
				header: {
					"Content-Type": "application/octet-stream",
					"Authorization": "UpToken " + token
				},
				data: base64,
				success: res => {
					resolve(this.qiniuImgDomain + "/" + res.data.key)
				},
				fail() {

				}
			})
		})
	}

	path2base64(path) {
		return new Promise(async (resolve, reject) => {
			// #ifdef MP-WEIXIN
			console.log('path2base64 微信小程序')
			uni.request({
				method: 'GET',
				url: path,
				responseType: 'arraybuffer',
				success(res) {
					let base64 = uni.arrayBufferToBase64(res.data);
					resolve(base64)
				},
				fail(err) {
					reject(err)
				}
			})
			// #endif

			// #ifdef H5
			console.log('path2base64 H5')
			let blobObj = await this.h5BlobUrlToBlobObj(path);
			let base64 = this.blobObjToBase64(blobObj);
			resolve(base64)

			// #endif

			// #ifdef MP-TOUTIAO
			console.log('path2base64 头条小程序')
			uni.request({
				method: 'GET',
				url: path,
				responseType: 'arraybuffer',
				success(res) {
					let base64 = uni.arrayBufferToBase64(res.data);
					resolve(base64)
				},
				fail(err) {
					reject(err)
				}
			})
			// #endif

			// #ifdef APP-PLUS
			console.log('path2base64 APP')
			console.log(path);
			let base64 = await this.appReadFileToBase64(path);
			resolve(base64)
			// #endif
		})

	}

	async getToken() {
		return new Promise((resolve, reject) => {
			uni.request({
				url: this.qiniuTokenApi,
				method: "GET",
				success(res) {
					resolve(res.data.data)
				},
				fail(err) {
					reject(err)
				}
			})
		})

	}

	async h5BlobUrlToBlobObj(url) {
		return new Promise((resolve, reject) => {
			const xhr = new XMLHttpRequest();
			xhr.open('GET', url, true);
			xhr.responseType = 'blob';
			xhr.onload = function(e) {
				if (this.status == 200) {
					var Blob = this.response;
					resolve(Blob)
				}
			};
			xhr.send();
		})
	}

	async blobObjToBase64(blob) {
		return new Promise((resolve, reject) => {
			const Reader = new FileReader();
			Reader.readAsDataURL(blob);
			Reader.onload = function(e) {
				let getRes = e.target.result; //读取的结果在result中
				resolve(getRes.split(",")[1]) // 这里的base64只需要 后面的数据部分 不要 data:image/png;base64,
			}
		})
	}

	async appReadFileToBase64(path) {
		return new Promise((resolve, reject) => {

			plus.io.resolveLocalFileSystemURL(path, function(entry) {
				entry.file(function(file) {
					var AppReader = new plus.io.FileReader();
					AppReader.onloadend = function(e) {
						let base64 = e.target.result
						resolve(base64.split(",")[1])
					};
					AppReader.onerror = function(err) {
						reject(err)
					};
					AppReader.readAsDataURL(file);
				}, function(e) {
					reject(e)

				});
			});

		})

	}

}














export default new Uploader();
