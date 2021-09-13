<template>
	<view class="pageBody">
		<view v-if="ActivitList.length <= 0" style="text-align: center; width: 100%;">
			<u-loading :show="!(ActivitList.length > 0)" size="54" mode="flower"></u-loading>
		</view>
		<view class="PinDaoList">
			<view class="item" v-for="(item, index) in ActivitList" :key="index" @click="pdClick(index)">
				<image class="img" :src="item.ActivityImage"></image>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				PageLoading: false,
				ActivitList:[]
			}
		},
		onLoad() {
			const that = this;
			that.PageLoading = true;
			that.InitPageData();
			setTimeout(() => {
				this.PageLoading = false;
			}, 2000)
		},
		methods: {
			// 频道点击事件
			pdClick(index){
				let ActivitItem = this.ActivitList[index]
				window.location.href = ActivitItem.ActivityUrl
			},
			// 页面数据初始化
			InitPageData(){
				const that = this
				that.$u
					.post('/app/AppDuoduoJuan/GetActivityChannelList')
					.then(res => {
						this.PageLoading = false
						if (res.Issuccess) {
							let ActivitListJson = res.Data.ActivitList
							that.ActivitList = JSON.parse(ActivitListJson)
						}
					})
					.catch(function(error) {
						console.log(error);
					});
			},
		}
	}
</script>

<style lang="scss" scoped>
.pageBody {
	background-color: #f3f4f6;
	height: 100ch;
}
.PinDaoList{
	padding: 20rpx;
	padding-bottom: 120rpx;
	.item{
		width: 100%;
		display: flex;
		margin-bottom: 20rpx;
		.img{
			height: 300rpx;
			border-radius: 20rpx;
		}
	}
}
</style>
