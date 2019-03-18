<template>
	<view class="content">
		<homePage v-if="page_code=='home'"></homePage>
		<pageTwo v-if="page_code=='publish'"></pageTwo>
		<pageThree v-if="page_code=='my'"></pageThree>
		<fr-loading></fr-loading>
		<footerNav></footerNav>
	</view>
</template>

<script>
	import homePage from "./pages/home_page.vue";
	import pageTwo from "./pages/page_two.vue";
	import pageThree from "./pages/page_three.vue";
	import footerNav from "../../components/footer/footer_nav.vue";
	export default {
		data() {
			return {}
		},
		components: {
			homePage,
			pageTwo,
			pageThree,
			footerNav
		},
		
		computed: {
			page_code() {
				return this.$store.state.footer_store.footer_nav[this.$store.state.footer_store.now_page_index].name_code;
			}
		},
		onLoad() {
			console.log('index onload')
						this.$store.dispatch('get_data')
		},
		methods: {
			open_loading() {
				this.$loading()
			}
		}
		
	}
</script>

<style>
	 
	.content {
		text-align: center;
		padding-bottom: 400upx;
	}

	.logo {
		height: 200upx;
		width: 200upx;
		margin-top: 200upx;
	}

	.title {
		font-size: 36upx;
		color: #8f8f94;
	}
</style>
