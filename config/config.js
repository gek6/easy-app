

// 项目公共配置
let config = {
	// 接口前缀
	baseUrl:'http://douban-api.gek6.cn',
	// 图片前缀
	imgPreUrl:'',
	// 无图时默认图片
	imgDefault:'',
	
	
   // 在微信浏览器下 是否获取code
   get_wx_code:false,
   /* 授权方式 静默授权 手动授权
   	snsapi_base 不弹出授权页面，直接跳转，只能获取用户openid
   	snsapi_userinfo 弹出授权页面，可通过openid拿到昵称、性别、所在地。并且， 即使在未关注的情况下，只要用户授权，也能获取其信息
   */
	wx_code_type:'snsapi_userinfo',
	/* 配置 */
	OSS_endpoint:"oss-cn-beijing.aliyuncs.com", // OSS地址
	OSS_bucket:"xxx",// oss 仓库名
	oss_host:'https://xxx.oss-cn-beijing.aliyuncs.com/', // 客户端直传时的地址 
	// OSS最高权限的 秘钥 H5端 用不到
	oss_accesskey:'xxxxxxx',
	oss_accessId:'xxxxx',
	
}

if(process.env.NODE_ENV === 'development'){
    console.log('开发环境')
	// 这里可配置开发环境的baseUrl等参数
}else{
    console.log('生产环境')
}





export default {
	install:function(Vue){
		Vue.prototype.$config = config
	},
	...config
}
