<template>
	<view style="padding-bottom: 500upx;">
		<view style="overflow: hidden;">
			<button type="primary" @click="$store.dispatch('menu_2')">2个菜单</button>
			<button type="primary" @click="$store.dispatch('menu_3')">3个菜单</button>
			<button type="primary" @click="$store.dispatch('menu_4')">4个菜单</button>
			<button type="primary" @click="$store.dispatch('menu_5')">5个菜单</button>
			<button type="primary" @click="open_loading">显示loading</button>
 
			
		</view>
		
		<view class="item" @click="get_detail(item.id)" v-for="(item,index) in list" :key="index">{{item.title}}</view>
		<view class="des">数据来自 nodejs 中文社区 API </view>
		
		
	</view>
</template>
<script>
	export default {
		data() {
			return {
				
			};
		},
		computed:{
			list(){
				 
				return this.$store.state.list;
			}
		},
		methods:{
			open_loading(){
				this.$loading()
			},
			get_detail(id){
				
				uni.navigateTo({
					url:"/pages/detail/detail?id="+id
				})
			},
			
		}
	}
</script>

<style>
.item{
	font-size: 28upx;
	line-height: 60upx;
	height: 60upx;
	border-bottom: 2upx solid #f1f1f1;
	padding-left: 30upx;
	padding-right: 30upx;
	color: #888;
	text-align: left;
	overflow: hidden;
	text-overflow:ellipsis;
	white-space: nowrap;
}
.des{
	text-align: center;
	padding: 30upx;
	margin-top: 100upx;
	font-size: 30upx;
	color: #888888;
}
button{
	width: 330upx;
	float: left;
	margin-left: 30upx;
	margin-top: 30upx;
	padding: 10upx 20upx;
	font-size: 32upx;
}
</style>
