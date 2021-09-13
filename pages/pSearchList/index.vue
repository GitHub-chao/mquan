<template>
	<view class="pageBody">
		<view style="background-color: #FFF; padding: 10rpx 10rpx 10rpx;">
			<u-search v-model="keyWord" input-align="center" height="50" :show-action="false"
				@search="searchFun" margin="0rpx 20rpx 10rpx "></u-search>
			
			<view class="CustomSort">
				<u-row class="CustomSortRow">
					<u-col span="3" text-align="center">
						<u-dropdown class="u-dropdown">
							<u-dropdown-item style="width: 100%;" v-model="ZongHeValue" :title="paixuTitle" :options="ZongHeOptions"
								@change='paixuChange'></u-dropdown-item>
						</u-dropdown>
					</u-col>
					<u-col span="3" text-align="center">
						<!-- 5-按销量升序;6-按销量降序 -->
						<view style="height: 34px; line-height: 34px;" @click="xiaoliangFun">
							销量
							<u-icon :color='xiaoliangSort == 0 ? "#fa3534" : "#c0c4cc"' size="22" width='10' name="arrow-up-fill"></u-icon>
							<u-icon :color='xiaoliangSort == 1 ? "#fa3534" : "#c0c4cc"' size="22" name="arrow-down-fill"></u-icon>
						</view>
					</u-col>
					<u-col span="3" text-align="center">
						<!-- 3-按价格升序;4-按价格降序 -->
						<view style="height: 34px; line-height: 34px;" @click="jiageFun">
							价格
							<u-icon :color='jiageSort == 0 ? "#fa3534" : "#c0c4cc"' size="22" width='10' name="arrow-up-fill"></u-icon>
							<u-icon :color='jiageSort == 1 ? "#fa3534" : "#c0c4cc"' size="22" name="arrow-down-fill"></u-icon>
						</view>
					</u-col>
					<u-col span="3" text-align="center">
						<view style="height: 34px; line-height: 34px;" @click="ShaiXuanFun">
							筛选
							<u-icon color='#c0c4cc' size="22" width='10' name="grid"></u-icon>
						</view>
					</u-col>
				</u-row>
			</view>
			<uni-transition ref="ani" :modeClass="['fade']" :styles="{'z-index':'9999','margin-top':'15rpx','position':'fixed','background-color':'#FFF', 'width':'100%'}" :show="shaixuanBoxShow">
				<view class="ScreenBoxForm">
					<view class="viewlabel">
						价格区间(元)
					</view>
					<view class="PriceSelectInfo">
						<view>
							<u-row gutter="16">
								<u-col offset="1" span="3" text-align="center">
									<u-tag text="0-30" :type="PriceSelectTagFlag == 'PriceSelect1' ? 'error' :'info'" style="border: 0px;" index='PriceSelect1' @click="PriceSelectFun" />
								</u-col>
								<u-col offset="1" span="3" text-align="center">
									<u-tag text="30-70" :type="PriceSelectTagFlag == 'PriceSelect2' ? 'error' :'info'" style="border: 0px;" index='PriceSelect2' @click="PriceSelectFun" />
								</u-col>
								<u-col offset="1" span="3" text-align="center">
									<u-tag text="70以上" :type="PriceSelectTagFlag == 'PriceSelect3' ? 'error' :'info'" style="border: 0px;" index='PriceSelect3' @click="PriceSelectFun" />
								</u-col>
							</u-row>
						</view>
						<view class="PriceInputView" style="margin-top: 10rpx;">
							<u-row gutter="16">
								<u-col offset="1" span="5" text-align="center">
									<!-- #ifdef H5 -->
									<u-input placeholder='最低价' v-model="PriceSelectParam.LowPrice" @input='PriceSelectInputChange' type="number" style="background-color:#f4f4f5; color: #909399;padding:6rpx 20rpx;font-size: 19px; border-radius: 10rpx;" />
									<!-- #endif -->
									
									<!-- #ifdef MP-WEIXIN -->
									<input placeholder='最低价' v-model="PriceSelectParam.LowPrice" @input='PriceSelectInputChange' type="number" style="background-color:#f4f4f5; color: #909399;border-radius: 10rpx;" />
									<!-- #endif -->
								</u-col>
								<!-- #ifdef H5 -->
								<label style="color: #C8C9CC;">-</label>
								<!-- #endif -->
								<u-col span="5" text-align="center">
									<!-- #ifdef H5 -->
									<u-input placeholder='最高价' v-model="PriceSelectParam.HighPrice" @input='PriceSelectInputChange' type="number" style="background-color:#f4f4f5; color: #909399;padding:6rpx 20rpx;font-size: 19px; border-radius: 10rpx;" />
									<!-- #endif -->
									
									<!-- #ifdef MP-WEIXIN -->
									<input placeholder='最高价' v-model="PriceSelectParam.HighPrice" @input='PriceSelectInputChange' type="number" style="background-color:#f4f4f5; color: #909399;border-radius: 10rpx;" />
									<!-- #endif -->
								</u-col>
							</u-row>
						</view>
					</view>
					<view class="ScreenBoxForm-footer" style="text-align: center; margin-top: 15rpx; padding-top: 15rpx;border-top: 1px solid #e4e7ed;">
						<u-button size='mini' type="error" style="width: 20%;display: inline-flex; margin-right: 10%;" @click="ShaiXuanFunSave">确定</u-button>
						<u-button size='mini' style="width: 20%;display: inline-flex;" @click="ShaiXuanFunCancel">重置</u-button>
					</view>
				</view>
			</uni-transition>
		</view>		
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
			<view  v-if="GoodsRecommend.length <= 0" style="text-align: center; width: 100%;">
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
				<view v-show="IsGoodsPageEnd">
					<u-divider bg-color="#F3F4F6" margin-top="30" margin-bottom="30" half-width="25%" color="#909399">人家是有底线的呦</u-divider>
				</view>
			</view>
		</view>
		
		<!-- 返回顶部 -->
		<u-back-top :scroll-top="scrollTop" top="600" right='20' ></u-back-top>
		<!-- Toast 消息提示 -->
		<u-toast ref="uToast" />
	</view>
</template>

<script>
	export default {
		data() {
			return {
				paixuTitle: '综合',
				xiaoliangSort: 2,
				jiageSort: 2,
				ZongHeValue:'',
				ZongHeOptions:[{
					label: '综合排序',
					value: 0,
				},{
					label: '好评排序',
					value: 32,
				}],
				shaixuanBoxShow: false,
				PriceSelectTagFlag:'',
				PriceSelectParam:{
					LowPrice:'',
					HighPrice:''
				},
				is_brand_goods: false,
				with_coupon: false,
				scrollTop:0,
				keyWord:'',
				opt_id:'',
				IsRequestGoodsList: false,
				GoodsRecommend: [],
				GoodsRecommendSearch_id:'',
				GoodsRecommendPage: 1,
				GoodsRecommendPageSize: 30,
				GoodsRecommendList_id:'',
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
			that.keyWord = option.keyword;
			if(option.opt_id){
				that.opt_id = option.opt_id
				that.dicParam.opt_id =option.opt_id
			}
			that.InitGoodsListData();
		},
		// 滚动加载事件
		onReachBottom(){
			if(!this.IsRequestGoodsList){
				this.GoodsRecommendPage = this.GoodsRecommendPage + 1	
				this.InitGoodsListData()
			}
		},
		methods: {
			jiageFun(){
				this.jiageSort = this.jiageSort == 0 ? 1 : 0;
				this.xiaoliangSort = 2;
				let value = this.jiageSort == 0 ? 3 : 4;
				this.dicParam.sort_type = value
				this.GoodsRecommendPage = 1
				this.GoodsRecommend = []
				this.InitGoodsListData()
			},
			xiaoliangFun(){
				this.jiageSort = 2;
				this.xiaoliangSort = this.xiaoliangSort == 0 ? 1 : 0;
				let value = this.xiaoliangSort == 0 ? 5 : 6;
				this.dicParam.sort_type = value
				this.GoodsRecommendPage = 1
				this.GoodsRecommend = []
				this.InitGoodsListData()
			},
			paixuChange(value){
				if(value == 0){
					this.paixuTitle = '综合'
				}else(
					this.paixuTitle = '好评'
				)
				this.dicParam.sort_type = value
				this.GoodsRecommendPage = 1
				this.GoodsRecommend = []
				this.InitGoodsListData()
			},
			ShaiXuanFun(){
				this.shaixuanBoxShow = !this.shaixuanBoxShow
			},
			PriceSelectFun(index){
				this.PriceSelectTagFlag = index
			},
			PriceSelectInputChange(e){
				this.PriceSelectTagFlag = ''
			},
			ShaiXuanFunSave(){
				this.jiageSort = 2;
				this.xiaoliangSort = 2;
				let range_from = 0
				let range_to = 0
				if(this.PriceSelectTagFlag == "PriceSelect1"){
					range_from = 0
					range_to = 30
				}else if(this.PriceSelectTagFlag == "PriceSelect2"){
					range_from = 30
					range_to = 70
				}else if(this.PriceSelectTagFlag == "PriceSelect3"){
					range_from = 70
					range_to = 9999999
				}else{
					range_from = this.PriceSelectParam.LowPrice == '' ? 0 : this.PriceSelectParam.LowPrice
					range_to = this.PriceSelectParam.HighPrice == '' ? 9999999 : this.PriceSelectParam.HighPrice
				}
				let range_list = [{
					range_id: 0,
					range_from: range_from,
					range_to: range_to
				}]
				// '[{"range_id":0,"range_from":'+range_from+',"range_to":'+range_to +'}]'
				this.dicParam.range_list = JSON.stringify(range_list)
				this.GoodsRecommendPage = 1
				this.GoodsRecommend = []
				this.InitGoodsListData()
				this.shaixuanBoxShow = !this.shaixuanBoxShow
			},
			ShaiXuanFunCancel(){
				this.dicParam.range_list = undefined
				this.GoodsRecommendPage = 1
				this.GoodsRecommend = []
				this.InitGoodsListData()
				this.shaixuanBoxShow = !this.shaixuanBoxShow
			},
			// 是否品牌商品 改变事件
			ChangeIsBrandGoods(e){
				this.dicParam.is_brand_goods = e.value
				this.GoodsRecommendPage = 1
				this.GoodsRecommend = []
				this.InitGoodsListData()
			},
			// 只看有券 改变事件
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
				that.IsRequestGoodsList = true
				let param = {
					page: that.GoodsRecommendPage,
					page_size: that.GoodsRecommendPageSize,
					keyword: that.keyWord,
					custom_parameters: "{\"new\":1}",
					list_id: that.GoodsRecommendList_id
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
								that.GoodsRecommendSearch_id = res.Data.search_id
								if(res.Data.list_id){
									that.GoodsRecommendList_id = res.Data.list_id
								}
							}else{
								if(that.GoodsRecommendPage <= 1){
									that.$refs.uToast.show({
										title: '未找到相关商品，请重新搜索',
										type: 'warning'
									})
								}
								that.IsGoodsPageEnd = true
								that.IsRequestGoodsList = true
							}
						}else{
							that.$refs.uToast.show({
								title: res.DataMsg,
								type: 'error'
							})
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
	height: 100ch;
}
.CustomSort{
	display: flex;
	width: 100%;
	height: 50rpx;
	line-height: 50rpx;
	margin-bottom: 20rpx;
	.CustomSortRow{
		width: 100%;
		.CustomSortCol{
			text-align: center;
		}
	}
}
.ScreenBoxForm{
	padding: 15rpx;
	.viewlabel{
		color: #606266;
		font-size: 14px;
	}
}

.CustomScreen{
	display: flex;
	width: 100%;
	height: 50rpx;
	line-height: 50rpx;
	padding: 10rpx 0px;
	.ScreenItem{
		width: 50%;
		text-align: center;
		.ItemLabel{
			margin-right: 10rpx;
		}
	}
}
.goodList {
	padding: 20rpx;
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
