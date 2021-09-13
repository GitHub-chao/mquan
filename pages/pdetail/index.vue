<template>
	<view class="pageBody u-skeleton">
		<view>
			<u-swiper :list="pageData.goods_gallery_urls" height="760"></u-swiper>
		</view>
		<view class="goodinfo">
			<view class="goodtit">
				{{pageData.goods_name}}
			</view>
			<view class="price">
				<view class="price_info u-skeleton-circle">
					<view class="newprice">￥{{computePrice((pageData.min_group_price/100),(pageData.coupon_discount/100))}}</view>
					<view class="oldprice ">￥{{ pageData.min_group_price/100 }}</view>
					<view class="quaninfo">
						<u-tag class="tag" mode="dark" :text="(pageData.coupon_discount/100)+'元劵'" type="error" />
					</view>
				</view>
				<view class="sale_info u-skeleton-circle">
					<u-tag class="tag" :text="'已抢'+ pageData.sales_tip +'件'" type="success" />
				</view>
			</view>
			
			<view class="couponinfo">
				<view class="ticket">
					<view class="left">
						<view class="u-image picture">
							<image style="height: 40px; width: 40px;border-radius: 2px;" :src="pageData.goods_thumbnail_url"></image>
						</view>
						<view class="desc  u-skeleton-circle">
							<view class="top">
								￥<text style="font-size: 20px;font-weight: 700;margin:0px 8rpx;">{{(pageData.coupon_discount/100)}}</text>
								元优惠券
							</view>
							<view class="data u-line-1">
								{{$u.timeFormat(pageData.coupon_start_time, 'yyyy-mm-dd')}}
								~
								{{$u.timeFormat(pageData.coupon_end_time, 'yyyy-mm-dd')}}
							</view>
						</view>
					</view>
					<view class="right">
						<u-tag class="tag" mode="dark" text="立即领券" @click="GetCouponUrl" type="error" />
					</view>
				</view>
			</view>
			
			<view class="dianpu">
				<view class="logo">
					<image style="height: 50px;width: 50px;" :src="pageData.mall_img_url"></image>
				</view>
				<view class="desc">
					<view class="title u-skeleton-circle">
						{{pageData.mall_name}}
						<text v-if="pageData.merchant_type>2" style="font-weight: 500;">
							{{pageData.merchant_type==3?"(旗舰店)":pageData.merchant_type==4?"(专卖店)":pageData.merchant_type==5?"(专营店)":""}}
						</text>
					</view>
					<view class="jieshao">
						商品描述：<text style="color: #fa3534; margin-right: 10px;" class="u-skeleton-circle">{{pageData.desc_txt}}</text>
						物流评分：<text style="color: #fa3534;" class="u-skeleton-circle">{{pageData.lgst_txt}}</text>
					</view>
				</view>
			</view>
			
			<u-divider bg-color="#F3F4F6" margin-top="30" margin-bottom="30" fontSize="30" height="60" half-width="25%" color="#909399">商品详情</u-divider>
			<view class="gooddetail" style="margin-bottom: 50px;">
				<image v-for="(img, index) in pageData.goods_gallery_urls" :key="index" :src="img"
					style="width: 100%;"></image>
			</view>
			
			<view class="foot_btn">
				<view class="left_box">
					<view class="u-icon--bottom" @click="gotoPage('home')">
						<u-icon name="home" size="30"></u-icon>
						<view>首页</view>
					</view>
					<view class="u-icon--bottom" @click="gotoPage('kefu')">
						<u-icon name="kefu-ermai" size="30"></u-icon>
						<view>客服</view>
					</view>
					<view class="u-icon--bottom" @click="shareDetail">
						<u-icon name="zhuanfa" size="30"></u-icon>
						<view>分享</view>
					</view>
					
					<!-- #ifdef MP-WEIXIN -->
					<view class="u-icon--bottom">
						<view class="wxchatShareBtnView">
							<button class="wxchatShareBtn" size='mini' open-type="share">
								转发</button>
						</view>
					</view>
					<!-- #endif -->
				</view>
				<view class="right_box">
					<u-button shape="square" type="error" @click="GetCouponUrl">立即领券</u-button>
				</view>
			</view>
			
			<!-- 分享弹框 -->
			<u-popup class="shareModel" v-model="isShowShare" height='70%' width="80%" mode="center" border-radius="14" :maskCloseAble="false">
				<view class="shareBody">
					<view class="Content">
						<view class="shareImg">
							<image style="width: 360rpx; height: 360rpx;" :src="ShareImg"></image>
						</view>
						<view class="shateTit">
							{{ShareTit}}
						</view>
						<view>券后价： ￥{{computePrice((pageData.min_group_price/100),(pageData.coupon_discount/100))}} 元</view>
						<view>原价： ￥{{ pageData.min_group_price/100 }} 元</view>
						<view>隐藏券： ￥{{ (pageData.coupon_discount/100) }} 元</view>
						<view>链接： {{ ShareUrl }}</view>
					</view>
				</view>
				
				<view class="shareFooter">
					<u-tag @click="copyShare" style="margin-right: 50rpx;" class="tag" mode="dark" text="复制发给朋友" type="success" />
					<u-tag class="tag" mode='light' text="取消" type="info" @click="isShowShare=false" />
				</view>
			</u-popup>
			
			
			<!-- 返回顶部 -->
			<u-back-top :scroll-top="scrollTop"></u-back-top>
			<!--引用组件 Skeleton 骨架屏-->
			<u-skeleton :loading="PageLoading" :animation="true" bgColor="#FFF"></u-skeleton>
		</view>
	</view>
</template>

<script>
	// 引入文件
	import uniCopy from '@/js_sdk/xb-copy/uni-copy.js'
	 
	export default {
		data() {
			return {
				PageLoading: false,
				keyid:'',
				search_id:'',
				pageData:{},
				swiperList:[],
				scrollTop:20,
				isShowShare: false,
				ShareTit: '',
				ShareImg: '',
				ShareUrl: ''
			}
		},
		onLoad: function (option) {
			const that = this
			that.keyid = option.key;
			that.search_id = option.search_id
			that.PageLoading = true
			that.InitDetail();
			
		},
		onPageScroll(e) {
			this.scrollTop = e.scrollTop;
		},
		methods: {
			computePrice(price, coupon){
				return parseFloat(price - coupon).toFixed(2)
			},
			InitDetail(){
				const that = this;
				let param = {
					goods_sign: that.keyid,
					search_id: that.search_id
				};
				this.$u
					.post('/app/AppDuoduoJuan/GetGoodsDetailInfo', param)
					.then(res => {
						if (res.Issuccess) {
							that.pageData = res.Data.goods_details[0]
							that.$u.mpShare.title = that.pageData.goods_name
						}
						that.PageLoading = false
					})
					.catch(function(error) {
						console.log(error);
					});
			},
			// 立即领券
			GetCouponUrl(){
				const that = this;
				let param = {}
				//#ifdef H5
				param = {
					goods_sign_list: "['" + that.keyid + "']",
					generate_mall_collect_coupon: true,
					search_id: that.search_id
				};
				//#endif
				
				//#ifdef MP-WEIXIN
				param = {
					goods_sign_list: "['" + that.keyid + "']",
					generate_mall_collect_coupon: true,
					generate_we_app: true,
					search_id: that.search_id
				};
				//#endif
				this.$u
					.post('/app/AppDuoduoJuan/GenerateGoodsPromotionUrl', param)
					.then(res => {
						if (res.Issuccess) {
							let url = res.Data.goods_promotion_url_list[0];
							//#ifdef H5
							let short_url = url.short_url
							window.location.href = short_url
							//#endif
							
							//#ifdef MP-WEIXIN
							    uni.navigateToMiniProgram({
							      appId: url.we_app_info.app_id,
							      path: url.we_app_info.page_path,
							      success(res) {
							        // 打开成功
							      }
							    })
							//#endif
							
						}
					})
					.catch(function(error) {
						console.log(error);
					});
			},
			// 分享
			shareDetail(){
				const that = this;
				let param = {}
				//#ifdef H5
				param = {
					goods_sign_list: "['" + that.keyid + "']",
					generate_mall_collect_coupon: true,
					search_id: that.search_id
				};
				//#endif
				
				//#ifdef MP-WEIXIN
				param = {
					goods_sign_list: "['" + that.keyid + "']",
					generate_mall_collect_coupon: true,
					generate_we_app: true,
					search_id: that.search_id
				};
				//#endif
				this.$u
					.post('/app/AppDuoduoJuan/GenerateGoodsPromotionUrl', param)
					.then(res => {
						if (res.Issuccess) {
							let url = res.Data.goods_promotion_url_list[0];
							let short_url = url.short_url
							this.ShareTit = this.pageData.goods_name
							this.ShareImg = this.pageData.goods_gallery_urls[0]
							this.ShareUrl = short_url
							this.isShowShare = true							
						}
					})
					.catch(function(error) {
						console.log(error);
					});
			},
			copyShare(){
				 let copyVal = this.ShareTit + '\r\n';
				 copyVal += "券后价： ￥" + this.computePrice((this.pageData.min_group_price/100),(this.pageData.coupon_discount/100)) + "元\r\n";
				 copyVal += "原价： ￥" + this.pageData.min_group_price/100 + '元\r\n';
				 copyVal += '链接：' + this.ShareUrl
				 uniCopy({
					content: copyVal,
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
			},
			// 页面跳转
			gotoPage(type){
				if(type == 'home'){
					this.$u.route({
						type: 'switchTab',
						url: 'pages/index/index'
					}, 2000);	
				}else if(type == 'kefu'){
					this.$u.route({
						url: 'pages/kefu/index'
					}, 2000);
				}
			}
		}
	}
</script>

<style lang="scss" scoped>
.goodinfo{
	padding: 20rpx;
	.goodtit{
		font-size: 15px;
		color: rgba(0,0,0,.7);
		font-weight: 700;
		line-height: 160%;
	}
	.price {
		margin-top: 16rpx;
		display: flex;
		align-items: flex-end;
		.price_info{
			width: 70%;
			display: flex;
			align-items: flex-end;
			-webkit-box-align: end;
			.newprice {
				color: red;
				font-size: 15px;
				font-weight: 600;
			}
			.oldprice {
				color: #a8a8a8;
				font-size: 8px;
				text-decoration: line-through;
			}
			.quaninfo{
				margin-left: 30rpx;
			}
		}
	}
	
	.couponinfo{
		display: flex;
		width: 100%;
		background-color: #fff;
		padding: 8px 0px 4px;
		border-radius: 8px;
		display: -webkit-box;
		display: -webkit-flex;
		display: flex;
		-webkit-align-self: center;
		align-self: center;
		width: 98%;
		.ticket{
			display: flex;
			width: 100%;
			.left{
				width: 75%;
				padding: 12px 8px;
				background-color: #fff5f4;
				border-radius: 8px;
				border-right: dashed 0.5px #e0d7d3;
				display: -webkit-box;
				display: -webkit-flex;
				display: flex;
				.picture{
					height: auto;
					border-radius: 0px;
					overflow: visible;
					opacity: 1;
					transition: opacity 0.5s ease-in-out 0s;
					background-color: transparent;
				}
				.desc{
					margin-left: 10rpx;
					color: #f90;
					font-size: 11px;
					min-width: 106px;
				}
			}
			.right{
				width: 25%;
				padding: 17px 8px;
				background-color: #fff5f4;
				border-radius: 8px;
				display: -webkit-box;
				display: -webkit-flex;
				display: flex;
				-webkit-box-align: center;
				-webkit-align-items: center;
				align-items: center;
			}
		}
	}

	.dianpu{
		width: 100%;
		display: -webkit-box;
		display: -webkit-flex;
		display: flex;
		-webkit-box-orient: horizontal;
		-webkit-box-direction: normal;
		-webkit-flex-direction: row;
		flex-direction: row;
		-webkit-box-pack: justify;
		-webkit-justify-content: space-between;
		justify-content: space-between;
		padding: 20px;
		border-top: 6px solid #f7f7f7;
		border-bottom: 6px solid #f7f7f7;
		.logo{
			width: 20%;
			display: -webkit-box;
			display: -webkit-flex;
			display: flex;
			-webkit-align-self: center;
			align-self: center;
		}
		.desc{
			width: 78%;
			display: -webkit-box;
			display: -webkit-flex;
			display: flex;
			padding-left: 17px;
			-webkit-box-orient: vertical;
			-webkit-box-direction: normal;
			-webkit-flex-direction: column;
			flex-direction: column;
			-webkit-box-align: start;
			-webkit-align-items: flex-start;
			align-items: flex-start;
			-webkit-justify-content: space-around;
			justify-content: space-around;
			.title{
				font-weight: 700;
			}
			.jieshao{
				font-size: 10px;
				color: #a8a8a8;
			}
		}
	}
	
	.foot_btn {
		width: 100%;
		background: #fff;
		height: 42px;
		position: fixed;
		bottom: 0;
		display: -webkit-box;
		display: -webkit-flex;
		display: flex;
		-webkit-box-pack: justify;
		-webkit-justify-content: space-between;
		justify-content: space-between;
		border-radius: 4px 4px 0px 0px;
		.left_box{
			width: 50%;
			padding-left: 8px;
			display: -webkit-box;
			display: -webkit-flex;
			display: flex;
			-webkit-box-align: center;
			-webkit-align-items: center;
			align-items: center;
			-webkit-justify-content: space-around;
			justify-content: space-around;
			.u-icon--bottom{
				text-align: center;
			}
		}
		.right_box{
			width: 45%;
			padding-left: 8px;
			display: -webkit-box;
			display: -webkit-flex;
			display: flex;
			-webkit-box-align: center;
			-webkit-align-items: center;
			align-items: center;
			-webkit-justify-content: space-around;
			justify-content: space-around;
		}
	}
	
}
.wxchatShareBtnView{
	padding: 16rpx 0px;
	.wxchatShareBtn {
		background-color: #FFFFFF;
		height: 20px;
		line-height: 20px;
		padding: 0px;
	}
	.wxchatShareBtn:after{
		border: none;	
	}
}
.shareModel{
	.shareBody{
		width: 100%;
		height: 90%;
		position: absolute;
		padding: 20rpx;
		color: #606266;
		.Content{
			background-color: #f4f4f5;
			width: 100%;
			height: 100%;
			position: relative;
			border-radius: 5px;
			padding: 10px;
			.shareImg{
				text-align: center;
			}
		}
	}
	.shareFooter{
		position: absolute; 
		bottom: 10px; 
		text-align: center;
		width: 100%;
	}
}


</style>
