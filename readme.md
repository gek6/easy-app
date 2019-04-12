> UNIAPP 自带的原生导航尽管流畅度非常好，但是在具体项目中有的时候需要动态设置以及特殊样式的 底部菜单 这个时候就需要自己去写一个自定义的底部tabbar

1、比如需要特殊的图标 多出来一部分的
![多出一部分的图标](https://upload-images.jianshu.io/upload_images/14418687-4d62fc04da4e8c6c.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)

2、根据登陆帐号的身份加载不同的tabbar
![根据登陆帐号的身份加载不同的tabbar](https://upload-images.jianshu.io/upload_images/14418687-ee79d8a8f6f0d4f9.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)
##### 动图预览
![预览](https://upload-images.jianshu.io/upload_images/14418687-baa8b957e28a455e.gif?imageMogr2/auto-orient/strip)

##### 解决方案
- 将整个首屏4个页面作为组件加载进来 如 入口 index.vue
- 将 自定义tabbar 写到 index.vue 中 或将其封装为组件 加载进来
- 使用vuex 统一管理数据
- 使用小程序自定义组件去解析HTML代码 （UNI的wxParse 看着麻烦 直接撸小程序自定义组件）


##### 引入组件（页面）
![引入组件（页面）](https://upload-images.jianshu.io/upload_images/14418687-8d0d3e9d5ba1fad6.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)
![渲染首页数据](https://upload-images.jianshu.io/upload_images/14418687-52f5b4dc11852c3f.jpg?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)


##### 底部tabbar的切换及数据来源
只要控制 store中的 底部菜单数据 即可。页面中动态渲染

```
export default {
	state:{
		footer_nav:[
			{
				name:'首页',
				name_code:'home',
				icon:'/static/footer_icon/a2.png',
				select_icon:'/static/footer_icon/a1.png'
			},
			{
				name:'发布',
				name_code:'publish',
				icon:'/static/footer_icon/f2.png',
				select_icon:'/static/footer_icon/f1.png'
			},
			{
				name:'我的',
				name_code:'my',
				icon:'/static/footer_icon/d1.png',
				select_icon:'/static/footer_icon/d2.png'
			},
			
		],
		now_page_index:0,
	},
	mutations:{
		change_page(state,index){
			state.now_page_index = index;
		}
	}
}
```

> 添加了自己常用的  request请求模块
```
//请求示例
			this.$ajax
				.get({
					url: '/admin/get_product_list',
					data: {
						a: 1
					}
				})
				.then(res => {
					this.$alert('状态码：' + res.code);
					console.log(res);
				});
```
> 添加了自己封装的 上传图片的 模块
```
//上传示例
			async choose_img_upload(n) {
				this.data_null()
				let uploader = new this.$Uploader();
				let path_arr = await uploader.choose_and_upload(n);
				console.log(path_arr);
				this.img_urls = path_arr;
				console.log(this.img_urls)
			},
```




