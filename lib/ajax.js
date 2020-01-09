/*
	2019-02-20
	lane
*/
import config from "@/config/config.js"
let BaseUrl = config.baseUrl;
function request(params, method) {
	let token = uni.getStorageSync('token') || '';
	
	return new Promise(function(resolve, reject) {
		let URL = ''
		if(params.url.includes('http://')||params.url.includes('https://')){
			URL = params.url;
		}else{
			URL = BaseUrl + params.url;
		}
		uni.request({
			url: URL,
			data: params.data,
			method: method,
			header: {
				"content-type": "application/x-www-form-urlencoded;charset=UTF-8",
				"token": token,
				...params.header
			},
			success(res) {
				// 成功回调
				if (res.statusCode == 200) {
					resolve(res.data)
				} else {
					switch (res.statusCode) {
						case 401:
							uni.showToast({
								title:'未登录或已过期',
								icon:'none'
							})
							break;
						default:
							reject(res)
							break;
					}
				}
			},
			fail(err) {
				uni.hideLoading()
				uni.showToast({
					title: '服务器错误',
					icon: "none"
				})
				reject(err)
				// 失败回调
			},
			complete() {
				uni.hideLoading()
				// 无论成功或失败 只要请求完成的 回调
			}
		})
	})
};
export default {

	get(params) {
		return request(params, "GET");
	},
	post(params) {
		return request(params, "POST")
	},
	put(params) {
		return request(params, "PUT")
	},
 
}
