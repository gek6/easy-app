<template>
	<view style="min-height:100vh;background-color: #F1F1F1;">
		<view class="cu-card case">
			<view class="cu-item shadow">
				<view class="image">
					<image src="https://front-master.oss-cn-beijing.aliyuncs.com/public/img/%E8%8E%B2%E6%B9%96%E5%BA%97%E6%B7%BB%E5%8A%A0%E5%AD%A6%E7%94%9Fbanner.png"
					 mode="widthFix"></image>
					<view class="cu-tag bg-blue">标签</view>
					<view class="cu-bar bg-shadeBottom"> <text class="text-cut">我已天理为凭，踏入这片荒芜，不再受凡人的枷锁遏制。我已天理为凭，踏入这片荒芜，不再受凡人的枷锁遏制。</text></view>
				</view>
				<view class="cu-list menu-avatar">
					<view class="cu-item">
						<view class="cu-avatar round lg" style="background-image:url(https://front-master.oss-cn-beijing.aliyuncs.com/public/other/20170823110912_ezTtH.jpeg);"></view>
						<view class="content flex-sub">
							<view class="text-grey">小编</view>
							<view class="text-gray text-sm flex justify-between">
								十天前
								<view class="text-gray text-sm">
									<text class="cuIcon-attentionfill margin-lr-xs"></text> 10
									<text class="cuIcon-appreciatefill margin-lr-xs"></text> 20
									<text class="cuIcon-messagefill margin-lr-xs"></text> 30
								</view>
							</view>
						</view>
					</view>
				</view>
			</view>
		</view>
		<view class="cu-card article">
			<view class="cu-item shadow"  v-for="(item,index) in articles" :key="index">
				<view class="title"><view class="text-cut">{{item.title}}</view></view>
				<view class="content">
					<image :src="item.images.small"
					 mode="aspectFill"></image>
					<view class="desc">
						<view class="text-content"> Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsam id dicta similique necessitatibus impedit explicabo ab itaque quibusdam incidunt delectus in repellat harum veritatis quia ratione molestiae praesentium earum? Alias?</view>
						<view>
							<view class="cu-tag bg-red light sm round">{{item.genres[0]}}</view>
							<view class="cu-tag bg-green light sm round">{{item.genres[1]}}</view>
						</view>
					</view>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	import {mapState} from "vuex"
	export default {
		data() {
			return {
				isCard: false
			};
		},
		computed:{
			...mapState({
				textColor:'textColor',
				descTextColor:'descTextColor',
				articles:'articles',
			})
		},
		methods: {
			IsCard(e) {
				this.isCard = e.detail.value
			},
		}
	}
</script>

<style>

</style>
