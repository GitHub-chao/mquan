<template>
	<view class="content">
		<view class="text-area">
			<text class="title">
				本系统旨在为广大用户提供京东、淘宝、拼多多、苏宁等各大电商平台的隐藏优惠券，并实时读取各平台的最新数据以及活动
				由<u-link :color="$u.color['primary']" :under-line="true" href="http://www.51softwarebox.com">卓云网络工作室</u-link>提供技术支持，卓云网络工作室，是一个为中小型企业提供技术服务，并拥有自己的电商平台
			</text>
		</view>
		<view class="text-area">
			<text class="title">
			当前系统还在逐步升级完善，欢迎各位提供建议或功能反馈
			</text>
		</view>
		<view class="">
			<u-tag class="tag" mode="dark" text="联系客服" @click="gotoPage" type="error" />
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				title: 'Hello'
			}
		},
		onLoad() {

		},
		methods: {
			// 页面跳转
			gotoPage(){
				this.$u.route({
					url: 'pages/kefu/index'
				}, 2000);
			}
		}
	}
</script>

<style lang="scss" scoped>
	.content {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		padding: 40rpx;
	}
	
	.logo {
		height: 200rpx;
		width: 200rpx;
		margin-top: 100rpx;
		margin-left: auto;
		margin-right: auto;
		margin-bottom: 50rpx;
	}

	.text-area {
		display: flex;
		justify-content: center;
	}
	
	.title {
		font-size: 28rpx;
		color: $u-content-color;
	}
	
	.link-demo {
		margin-top: 80rpx;
	}
</style>
