/*
	2019-02-20
	lane
	封装uni-app请求
	
	
*/
import $store from "../store";
import config from "../config.js";

function request(params, method) {
	
	let token = uni.getStorageSync("token") || '3f2c4b212e089a766028c7e89d74c013ceecb9b3';
	
	return new Promise(function(resolve, reject) {

		if (!config.base_url || !config._acid || !config._uniacid) {
			console.log('config.js 中参数配置不全');
			reject('config.js 中参数配置不全');
			return
		}

		// 添加必要参数 根据具体业务定
		if (params.data) {
			params.data._acid = config._acid,
				params.data._uniacid = config._uniacid,
				params.data.access_token = token
		} else {
			params.data = {
				_acid: config._acid,
				_uniacid: config._uniacid,
				access_token: token

			}
		}
		$store.commit("switch_loading","1")
		uni.request({
			url: config.base_url + params.url,
			// url:"http://localhost/index.php",
			data: params.data,
			method: method,
			header:{
				"content-type":"application/x-www-form-urlencoded;charset=UTF-8"
			},
			success(res) {
				// 成功回调
				if (res.sta) {
					resolve(res)
				}

			},
			fail() {
				uni.showToast({
					title: '服务器错误',
					icon: "none"
				})
				// 失败回调
			},
			complete() {
				// 无论成功或失败 只要请求完成的 回调
				$store.commit("switch_loading","0")
			}
		})
	})
};
export default {

	async get(params) {
		await request(params, "GET")
	},
	async post(params) {
		await request(params, "POST")
	},

}
