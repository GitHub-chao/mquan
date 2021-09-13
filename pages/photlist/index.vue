<template>
	<view class="pageBody">
		<view class="goodList">
			<view class="CustomScreen">
				<view class="ScreenItem">
					<label class="ItemLabel">是否个性推荐</label>
					<u-checkbox @change="ChangeUseCustomized" v-model="use_customized" ></u-checkbox>
				</view class="ScreenItem">
				<u-line direction='col' border-style='dashed' color="#c8c9cc" />
				<view class="ScreenItem">
					<label class="ItemLabel">只看有券</label>
					<u-checkbox @change="ChangeWithCoupon" v-model="with_coupon" ></u-checkbox>
				</view>
			</view>
			<view v-if="!(GoodsRecommend.length > 0)" style="text-align: center; width: 100%;">
				<u-loading :show="!(GoodsRecommend.length > 0)" size="54" mode="flower"></u-loading>
			</view>
			<view v-for="(item, gIndex) in GoodsRecommend" :key="gIndex" class="goodItem" @click="gotoDetail(item)">
				<view class="goodImg"><image class="u-image imginfo" :src="item.goods_thumbnail_url"></image></view>
				<view class="goodDesc">
					<view class="title u-line-2">{{ item.goods_desc }}</view>
					<view class="price">
						<view class="newprice">￥{{ computePrice((item.min_group_price/100),(item.coupon_discount/100)) }}</view>
						<view class="oldprice">￥{{ item.min_group_price / 100 }}</view>
						<view class="saleinfo">已抢{{ item.sales_tip }}件</view>
					</view>
					<view class="goodTags">
						<u-tag class="tag" :text="'再减'+ item.coupon_discount / 100 + '元'" type="error" mode='dark' />
						<!-- <u-tag v-for="tag in item.unified_tags" class="tag" v-if="tag != '' && tag != null" :text="tag" type="error" /> -->
					</view>
				</view>
			</view>
			<view style="width: 100%;">
				<view v-if="IsGoodsPageEnd">
					<u-divider bg-color="#F3F4F6" margin-top="30" margin-bottom="30" half-width="25%" color="#909399">人家是有底线的呦</u-divider>
				</view>
			</view>
		</view>
		
		<!-- 返回顶部 -->
		<u-back-top :scroll-top="scrollTop" top="600" right='20' ></u-back-top>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				use_customized: false,
				with_coupon: false,
				scrollTop:0,
				channel_type: '6',
				IsRequestGoodsList: false,
				GoodsRecommend: [],
				GoodsRecommendSearch_id:'',
				GoodsRecommendPage: 1,
				GoodsRecommendPageSize: 30,
				IsGoodsPageEnd: false,
				dicParam: {}
			}
		},
		// 返回顶部
		onPageScroll(e) {
			this.scrollTop = e.scrollTop;
		},
		onLoad(option) {
			const that = this;
			that.channel_type = option.channel_type;
			that.InitGoodsListData();
			if(option.title){
				uni.setNavigationBarTitle({
				    title: option.title
				});
			}
		},
		// 滚动加载事件
		onReachBottom(){
			if(!this.IsRequestGoodsList){
				this.GoodsRecommendPage = this.GoodsRecommendPage + 1	
				this.InitGoodsListData()
			}
		},
		methods: {
			// 是否个性推荐 改变事件
			ChangeUseCustomized(e){
				this.dicParam.use_customized = e.value
				this.GoodsRecommendPage = 1
				this.GoodsRecommend = []
				this.InitGoodsListData()
			},
			// 是否品牌商品 改变事件
			ChangeWithCoupon(e){
				this.dicParam.with_coupon = e.value
				this.GoodsRecommendPage = 1
				this.GoodsRecommend = []
				this.InitGoodsListData()
			},
			// 页面价格计算
			computePrice(price, coupon){
				return parseFloat(price - coupon).toFixed(2)
			},
			InitGoodsListData(){
				const that = this;
				that.IsRequestGoodsRecommend = true
				let param = {
					page: that.GoodsRecommendPage,
					page_size: that.GoodsRecommendPageSize,
					channel_type: that.channel_type
				};
				if(that.dicParam){
					param = this.$u.deepMerge(that.dicParam, param);
				}
				if(that.GoodsRecommendList_id){
					param.list_id = that.GoodsRecommendList_id
				}
				this.$u
					.post('/app/AppDuoduoJuan/GetGoodsSearchList', param)
					.then(res => {
						that.IsRequestGoodsRecommend = false
						if (res.Issuccess) {
							res.Data.goods_list.forEach(x => {
								that.GoodsRecommend.push(x);
							});
							that.GoodsRecommendSearch_id = res.Data.search_id
							if(res.Data.list_id){
								that.GoodsRecommendList_id = res.Data.list_id
							}
						}
					})
					.catch(function(error) {
						that.IsRequestGoodsRecommend = false
						console.log(error);
					});
			},
			// 获取明细
			gotoDetail(item){
				this.$u.route('/pages/pdetail/index', {
					key: item.goods_sign,
					search_id: this.GoodsRecommendSearch_id
				});
			}
		}
	}
</script>

<style lang="scss" scoped>
.pageBody {
	background-color: #f3f4f6;
	height: 100ch;
	padding: 20rpx;
}
.CustomScreen{
	display: flex;
	width: 100%;
	height: 50rpx;
	line-height: 50rpx;
	border-bottom: 1px solid #e4e7ed;
	.ScreenItem{
		width: 50%;
		text-align: center;
		.ItemLabel{
			margin-right: 10rpx;
		}
	}
}
.goodList {
	display: flex;
	width: 100%;
	margin: 0 auto;
	display: -webkit-box;
	display: -webkit-flex;
	display: flex;
	-webkit-box-pack: justify;
	-webkit-justify-content: space-between;
	justify-content: space-between;
	-webkit-flex-wrap: wrap;
	flex-wrap: wrap;
	.goodItem {
		padding: 2%;
		background-color: #fff;
		width: 49%;
		margin-bottom: 22rpx;
		float: left;
		.goodImg {
			width: 100%;
			height: auto;
			border-radius: 0px;
			overflow: visible;
			opacity: 1;
			transition: opacity 0.5s ease-in-out 0s;
			background-color: transparent;
			.imginfo {
				height: 354rpx;
				width: 100%;
			}
		}
		.goodDesc {
			margin-top: 6rpx;
			.title {
				font-size: 11px;
				font-weight: 700;
				color: rgba(0, 0, 0, 0.7);
			}
			.price {
				margin-top: 6rpx;
				display: flex;
				align-items: flex-end;
				.newprice {
					color: red;
					font-size: 13px;
					font-weight: 600;
				}
				.oldprice {
					color: #a8a8a8;
					font-size: 8px;
					text-decoration: line-through;
				}
			}
			.goodTags {
				margin-top: 6rpx;
				.tag {
					margin: 5rpx;
				}
			}
		}
	}
}
</style>
