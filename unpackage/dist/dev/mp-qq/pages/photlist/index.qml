<view class="pageBody data-v-2d01af77"><view class="goodList data-v-2d01af77"><view class="CustomScreen data-v-2d01af77"><view class="ScreenItem data-v-2d01af77"><label class="ItemLabel data-v-2d01af77">是否个性推荐</label><u-checkbox bind:change="__e" bind:input="__e" vue-id="2d019bc1-1" value="{{use_customized}}" data-event-opts="{{[['^change',[['ChangeUseCustomized']]],['^input',[['__set_model',['','use_customized','$event',[]]]]]]}}" class="data-v-2d01af77" bind:__l="__l"></u-checkbox></view><u-line vue-id="2d019bc1-2" direction="col" border-style="dashed" color="#c8c9cc" class="data-v-2d01af77" bind:__l="__l"></u-line><view class="ScreenItem data-v-2d01af77"><label class="ItemLabel data-v-2d01af77">只看有券</label><u-checkbox bind:change="__e" bind:input="__e" vue-id="2d019bc1-3" value="{{with_coupon}}" data-event-opts="{{[['^change',[['ChangeWithCoupon']]],['^input',[['__set_model',['','with_coupon','$event',[]]]]]]}}" class="data-v-2d01af77" bind:__l="__l"></u-checkbox></view></view><block qq:if="{{!(GoodsRecommend.length>0)}}"><view style="text-align:center;width:100%;" class="data-v-2d01af77"><u-loading vue-id="2d019bc1-4" show="{{!(GoodsRecommend.length>0)}}" size="54" mode="flower" class="data-v-2d01af77" bind:__l="__l"></u-loading></view></block><block qq:for="{{$root.l0}}" qq:for-item="item" qq:for-index="gIndex" qq:key="gIndex"><view data-event-opts="{{[['tap',[['gotoDetail',['$0'],[[['GoodsRecommend','',gIndex]]]]]]]}}" class="goodItem data-v-2d01af77" bindtap="__e"><view class="goodImg data-v-2d01af77"><image class="u-image imginfo data-v-2d01af77" src="{{item.$orig.goods_thumbnail_url}}"></image></view><view class="goodDesc data-v-2d01af77"><view class="title u-line-2 data-v-2d01af77">{{item.$orig.goods_desc}}</view><view class="price data-v-2d01af77"><view class="newprice data-v-2d01af77">{{"￥"+item.m0}}</view><view class="oldprice data-v-2d01af77">{{"￥"+item.$orig.min_group_price/100}}</view><view class="saleinfo data-v-2d01af77">{{"已抢"+item.$orig.sales_tip+"件"}}</view></view><view class="goodTags data-v-2d01af77"><u-tag class="tag data-v-2d01af77" vue-id="{{'2d019bc1-5-'+gIndex}}" text="{{'再减'+item.$orig.coupon_discount/100+'元'}}" type="error" mode="dark" bind:__l="__l"></u-tag></view></view></view></block><view style="width:100%;" class="data-v-2d01af77"><block qq:if="{{IsGoodsPageEnd}}"><view class="data-v-2d01af77"><u-divider vue-id="2d019bc1-6" bg-color="#F3F4F6" margin-top="30" margin-bottom="30" half-width="25%" color="#909399" class="data-v-2d01af77" bind:__l="__l" vue-slots="{{['default']}}">人家是有底线的呦</u-divider></view></block></view></view><u-back-top vue-id="2d019bc1-7" scroll-top="{{scrollTop}}" top="600" right="20" class="data-v-2d01af77" bind:__l="__l"></u-back-top></view>