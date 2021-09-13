<template>
	<view  class="pageBody">
		<u-divider margin-top="30" margin-bottom="30" half-width="25%" color="#909399">客服微信二维码</u-divider>
		<view style="text-align: center;">
			<image src="../../static/kefuWeChat.jpg" style="width: 80%;"></image>
		</view>
		<u-divider margin-top="30" margin-bottom="30" half-width="25%" color="#909399">客服微信号</u-divider>
		<view style="text-align: center;">
			<view class="wechatInfo">
				{{ CustomerWeChat }}
			</view>
			<view style="margin-top: 10px;">
				<u-tag @click="copyWeChat"  class="tag" mode="dark" text="复制微信号" type="error" />
			</view>
		</view>
		
	</view>
</template>

<script>
	// 引入文件
	import uniCopy from '@/js_sdk/xb-copy/uni-copy.js'
	export default {
		data() {
			return {
				CustomerWeChat: 'chao-9966'
			}
		},
		methods: {
			copyWeChat(){
				 uniCopy({
					content: this.CustomerWeChat,
					success:(res)=>{
						uni.showToast({
							title: res,
							icon: 'none'
						})
					},
					error:(e)=>{
						uni.showToast({
							title: e,
							icon: 'none',
							duration:3000,
						})
					}
				})
			}
		}
	}
</script>

<style>
.wechatInfo{
	width: 70%;
	height: 34px;
	line-height: 12px;
	background-color: #f3f4f6;
	padding: 12px;
	border-radius: 8px;
	text-align: center;
	margin: 0 auto;
}
</style>
