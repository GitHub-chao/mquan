<template>
	<view class="pageBody u-skeleton">
		<u-top-tips ref="uTips"></u-top-tips>
		<u-sticky :enable="stickyenable">
				<u-tabs name="cate_name" count="cate_count" v-if="GoodsOptList.length > 0" 
					:list="GoodsOptList"
					active-color="#fa3534" :show-bar="false"
					:current="GoodsOptCurrent" 
					@change="GoodsOptChange"></u-tabs>
		</u-sticky>
		<u-search v-model="searchKeyWord" input-align="center" height="70" :show-action="false"
			@search="searchFun" margin="10rpx 50rpx" bg-color="#FFF"></u-search>
		<view v-if="GoodsOptCurrent==0" class="grid_header">
			<view class="wrap" v-if="ActivitList.length > 0">
				<u-swiper mode="none" :effect3d="true" :list="ActivitList" @click="ActivitClick"></u-swiper>
			</view>
			<u-grid :col="4" :border="false">
				<u-grid-item v-for="(menu, i) in MenuList" :key="i" :index="i" @click="uGridClick(menu)" class="u-skeleton-rect">
					<image class="icon_img" :src="menu.MenuIcon"></image>
					<view class="grid-text">{{ menu.MenuTitle }}</view>
				</u-grid-item>
			</u-grid>
		</view>
		
		<!-- 二级类目 -->
		<view v-if="GoodsOptCurrent > 0 && GoodsOptChildList.length > 0" class="childOptPanel">
			<u-tag class="tag childOptTag" v-for="(opt, oindex) in GoodsOptChildList" :key='oindex'
				:index='oindex' @click="childOptClick"
				:text="opt.opt_name" type='info' mode='dark' />
		</view>
		
		<u-divider bg-color="#F3F4F6" margin-top="30" half-width="25%" color="#909399">好物推荐</u-divider>
		<view class="goodList">
			<view v-if="GoodsRecommend.length <= 0" style="text-align: center; margin-top: 30rpx; width: 100%;">
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
		</view>
		
		<!-- 砸金蛋 -->
		<uni-transition ref="ani" :modeClass="['fade','slide-top']" :styles="{'position':'fixed','right':'20rpx','bottom':'300rpx'}" :show="anishow">
			<image @click="imgChaiHongBao" style="width: 100rpx; height: 100rpx;" src="http://www.51softwarebox.com/WebSiteCss/quanduoduo/rightzajindan.png"></image>
		</uni-transition>
		
		<!--<view st yle="position: ; : ; bottom: ;">
			<image style="width: 100rpx; height: 100rpx;" src="http://www.51softwarebox.com/WebSiteCss/quanduoduo/rightttchb.png"></image>
		</view> -->
		
		<!-- 返回顶部 -->
		<u-back-top :scroll-top="scrollTop" :top="scrollTopShow" right='20' ></u-back-top>
		
		<!--引用组件-->
		<u-skeleton :loading="PageLoading" :animation="true" bgColor="#FFF"></u-skeleton>
	</view>
</template>

<script>
export default {
	data() {
		return {
			anishow: false,
			stickyenable: false,
			GoodsOptList:[],
			GoodsOptCurrent:0,
			GoodsOptChildList:[],
			scrollTop:0,
			scrollTopShow: 600,
			searchKeyWord: '',
			PageLoading: false,
			MenuList:[],
			ActivitList: [],
			IsRequestGoodsRecommend: false,
			GoodsRecommend: [],
			GoodsRecommendSearch_id:'',
			GoodsRecommendList_id:'',
			GoodsRecommendPage: 1,
			GoodsRecommendPageSize: 30,
			dicParam: {}
		};
	},
	onLoad() {
		const that = this;
		// 微信小程序隐藏tabbar
		//#ifdef MP-WEIXIN
		uni.hideTabBar({animation:false})
		//#endif
		
		
		this.PageLoading = true;
		that.InitPageMenu();
		that.InitGoodsRecommendData();
		setTimeout(() => {
			this.PageLoading = false;
		}, 2000)
	},
	// 返回顶部
	onPageScroll(e) {
		if(e.scrollTop>100){
			this.stickyenable = true 
		}
		if(e.scrollTop+100 >= this.scrollTopShow){
			this.anishow = true
		}else{
			this.anishow = false
		}
		this.scrollTop = e.scrollTop;
	},
	// 滚动加载事件
	onReachBottom(){
		if(!this.IsRequestGoodsRecommend){
			this.GoodsRecommendPage = this.GoodsRecommendPage + 1	
			this.InitGoodsRecommendData()
		}
	},
	methods: {
		// 搜索事件
		searchFun(){
			if(this.searchKeyWord != ''){
				let opt_id = ''
				if(this.GoodsOptList[this.GoodsOptCurrent].opt_id){
					opt_id = this.GoodsOptList[this.GoodsOptCurrent].opt_id
				}
				this.$u.route('/pages/pSearchList/index', {
					keyword: this.searchKeyWord,
					opt_id: opt_id
				});
			}else{
				this.$refs.uTips.show({
					title: '请输入搜索关键词',
					type: "warning"
				});
			}
		},
		// 轮播图广告点击事件
		ActivitClick(index){
			let activityItem = this.ActivitList[index]
			let param = JSON.parse(activityItem.ActivityParam)
			this.$u.route(activityItem.ActivityUrl, {
				key: param.activity_tags,
				title: activityItem.ActivityName
			});
		},
		// 砸金蛋点击事件
		imgChaiHongBao(){
			const that = this
			// 砸金蛋---生成营销工具推广链接
			let param = {}
			//#ifdef H5
			param = {
				channel_type: 12,
				generate_short_url: true,
				p_id_list: '["21457098_218367810"]'
			}
			//#endif
			
			//#ifdef MP-WEIXIN
			param = {
				channel_type: 12,
				generate_we_app: true,
				p_id_list: '["21457098_218367810"]'
			}
			//#endif
			that.$u
				.post('/app/AppDuoduoJuan/GenerateRpPromUrl', param)
				.then(res => {
					if (res.Issuccess) {
						const _url = res.Data.url_list[0]
						//#ifdef H5
						window.location.href = _url.mobile_short_url
						//#endif
						
						//#ifdef MP-WEIXIN
						uni.navigateToMiniProgram({
						  appId: _url.we_app_info.app_id,
						  path: _url.we_app_info.page_path,
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
		//  频道推广点击事件
		uGridClick(menu) {
			const that = this
			if(menu.MenuType == "CmsPromUrl"){
				// 商城-频道推广
				let param = {}
				//#ifdef H5
				param = {
					generate_mobile: true,
					generate_short_url: true,
					channel_type: menu.MenuParam[0].channel_type,
					p_id_list: "['" + menu.MenuParam[0].p_id + "']"
				}
				//#endif
				
				//#ifdef MP-WEIXIN
				param = {
					generate_we_app: true,
					channel_type: menu.MenuParam[0].channel_type,
					p_id_list: "['" + menu.MenuParam[0].p_id + "']"
				}
				//#endif
				
				that.$u
					.post('/app/AppDuoduoJuan/GenerateCmsPromUrl', param)
					.then(res => {
						if (res.Issuccess) {
							const url = res.Data.url_list[0]
							//#ifdef H5
							window.location.href = url.short_url
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
			}else if(menu.MenuType == "ResourceUrl"){
				// 多多进宝频道推广
				let param = {
					generate_we_app: true,
					resource_type: menu.MenuParam[0].resource_type,
					pid: menu.MenuParam[0].pid
				}
				that.$u
					.post('/app/AppDuoduoJuan/GenerateResourceUrl', param)
					.then(res => {
						if (res.Issuccess) {
							//#ifdef H5
							const _url = res.Data.single_url_list.url
							window.location.href = _url
							//#endif
							
							//#ifdef MP-WEIXIN
							const mpUrl = res.Data.we_app_info
							uni.navigateToMiniProgram({
							  appId: mpUrl.app_id,
							  path: mpUrl.page_path,
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
			}else if(menu.MenuType == "PageUrl"){
				// 系统内的页面跳转
				this.$u.route(menu.MenuPage,{
					title: menu.MenuTitle,
					channel_type: menu.MenuParam[0].channel_type
				});
			}
		},
		// 页面价格计算
		computePrice(price, coupon){
			return parseFloat(price - coupon).toFixed(2)
		},
		// 页面菜单绑定
		InitPageMenu(){
			const that = this
			that.$u
				.post('/app/AppDuoduoJuan/GetMenuconfig')
				.then(res => {
					this.PageLoading = false
					if (res.Issuccess) {
						let menuJson = res.Data.MenuJson
						let ActivitListJson = res.Data.ActivitList
						let HeaderTabsJson  = res.Data.HeaderTabs
						let HeaderTabsArr = JSON.parse(HeaderTabsJson)
						that.MenuList = JSON.parse(menuJson)
						that.ActivitList = JSON.parse(ActivitListJson)
						that.GoodsOptList = []
						HeaderTabsArr.forEach(item=>{
							that.GoodsOptList.push({
								name: item.opt_name,
								opt_id:item.opt_id
							})
						})
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
				this.GoodsOptChildList = []
				this.GetGoodsOptListByParentID(opt_id)
				this.GoodsRecommend = []
				this.GoodsRecommendPage = 1
				this.dicParam.opt_id = opt_id
				if(this.dicParam.list_id){
					this.dicParam.list_id = ''
				}
				this.InitGoodsRecommendData()
			}
		},
		// 子类目 点击事件
		childOptClick(index){
			let opt = this.GoodsOptChildList[index]
			this.$u.route('/pages/plist/index', {
				action: 'opt',
				opt_id: opt.opt_id,
				opt_name: opt.opt_name,
			});
		},
		// 好物推荐 加载数据
		InitGoodsRecommendData() {
			const that = this;
			that.IsRequestGoodsRecommend = true
			let param = {
				page: that.GoodsRecommendPage,
				page_size: that.GoodsRecommendPageSize,
				activity_tags:"['10564','24','4','7']",
				channel_type: 4,
				use_customized: "true",
				with_coupon: "true"
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
		
		// 通过一级类目，获取下级类目数据
		GetGoodsOptListByParentID(optid){
			const that = this;
			let param = {
				parent_opt_id:optid
			};
			that.$u
				.post('/app/AppDuoduoJuan/GetGoodsOptInfo', param)
				.then(res => {
					if(res.Issuccess) {
						that.GoodsOptChildList = []
						if(res.Data.goods_opt_list && res.Data.goods_opt_list.length > 0){
							that.GoodsOptChildList = res.Data.goods_opt_list
						}
					}
				})
				.catch(function(error) {
					console.log(error);
				});
		},
		
		
		// 获取明细--跳转到明细页面
		gotoDetail(item){
			this.$u.route('/pages/pdetail/index', {
				key: item.goods_sign,
				search_id: this.GoodsRecommendSearch_id
			});
		}
		
		
		
	}
};
</script>

<style lang="scss" scoped>
.pageBody {
	background-color: #f3f4f6;
	height: 100ch;
}
.grid-text {
	font-size: 26rpx;
	margin-top: 15rpx;
	color: $u-type-info;
}
.icon_img {
	width: 33px;
	height: 34px;
}
.childOptPanel{
	padding: 0px 20rpx;
	.childOptTag{
		margin: 10rpx;
	}
}

.goodList {
	display: flex;
	width: 100%;
	margin: 0 auto;
	padding: 20rpx;
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
