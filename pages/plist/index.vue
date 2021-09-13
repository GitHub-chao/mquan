<template>
	<view class="pageBody">
		<u-sticky :enable="stickyenable">
			<u-tabs class="optList" name="opt_name" v-if="GoodsOptList.length > 0" :list="GoodsOptList"
				active-color="#fa3534" :show-bar="false"
				:current="GoodsOptCurrent" 
				@change="GoodsOptChange"></u-tabs>
		</u-sticky>
		<view class="CustomScreen">
			<view class="ScreenItem">
				<label class="ItemLabel">是否品牌商品</label>
				<u-checkbox @change="ChangeIsBrandGoods" v-model="is_brand_goods" ></u-checkbox>
			</view class="ScreenItem">
			<u-line direction='col' border-style='dashed' color="#c8c9cc" />
			<view class="ScreenItem">
				<label class="ItemLabel">只看有券</label>
				<u-checkbox @change="ChangeWithCoupon" v-model="with_coupon" ></u-checkbox>
			</view>
		</view>
		<view class="goodList">
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
				stickyenable: false,
				is_brand_goods: false,
				with_coupon: false,
				action: '',
				GoodsOptList:[],
				GoodsOptCurrent:0,
				opt_id: '',
				title: '商品列表',
				scrollTop:0,
				IsRequestGoodsList: false,
				GoodsRecommend: [],
				GoodsRecommendSearch_id:'',
				GoodsRecommendPage: 1,
				GoodsRecommendPageSize: 30,
				IsGoodsPageEnd: false,
				dicParam: {}
			}
		},
		onLoad(option) {
			const that = this;
			that.action = option.action;
			that.opt_id = option.opt_id;
			that.title = option.opt_name;
			uni.setNavigationBarTitle({
			    title: that.title
			});
			
			if(that.action == 'opt'){
				that.dicParam = {
					opt_id: that.opt_id
				}
				// 加载下级类目
				that.GetGoodsOptListByParentID()
			}
			// 初始化数据
			that.InitGoodsListData();
		},
		// 返回顶部
		onPageScroll(e) {
			if(e.scrollTop>100){
				this.stickyenable = true 
			}
			this.scrollTop = e.scrollTop;
		},
		// 滚动加载事件
		onReachBottom(){
			if(!this.IsRequestGoodsList){
				this.GoodsRecommendPage = this.GoodsRecommendPage + 1	
				this.InitGoodsListData()
			}
		},
		methods: {
			// 是否品牌商品 改变事件
			ChangeIsBrandGoods(e){
				this.dicParam.is_brand_goods = e.value
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
			// 获取下级类目数据
			GetGoodsOptListByParentID(){
				const that = this;
				let param = {
					parent_opt_id: that.opt_id
				};
				that.$u
					.post('/app/AppDuoduoJuan/GetGoodsOptInfo', param)
					.then(res => {
						if(res.Issuccess) {
							that.GoodsOptList = []
							if(res.Data.goods_opt_list && res.Data.goods_opt_list.length > 0){
								that.GoodsOptList = res.Data.goods_opt_list
							}
						}
					})
					.catch(function(error) {
						console.log(error);
					});
			},
			// 页面类目改变事件
			GoodsOptChange(index){
				this.GoodsOptCurrent = index;
				if(this.GoodsOptList[index].opt_id){
					let opt_id = this.GoodsOptList[index].opt_id
					this.GoodsRecommend = []
					this.GoodsRecommendPage = 1
					this.dicParam.opt_id = opt_id
					this.InitGoodsListData()
				}
			},
			// 初始化数据
			InitGoodsListData(){
				const that = this;
				that.IsRequestGoodsList = true
				let param = {
					page: that.GoodsRecommendPage,
					page_size: that.GoodsRecommendPageSize
				};
				if(that.dicParam){
					param = this.$u.deepMerge(that.dicParam, param);
				}
				this.$u
					.post('/app/AppDuoduoJuan/GetGoodsSearchList', param)
					.then(res => {
						that.IsRequestGoodsList = false
						if (res.Issuccess) {
							if(res.Data.goods_list.length > 0){
								res.Data.goods_list.forEach(x => {
									that.GoodsRecommend.push(x);
								});
							}else{
								that.IsGoodsPageEnd = true
								that.IsRequestGoodsList = true
							}
						}
					})
					.catch(function(error) {
						that.IsRequestGoodsList = false
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
	height: 100%;
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
.optList{
	margin-bottom: 10rpx;
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
