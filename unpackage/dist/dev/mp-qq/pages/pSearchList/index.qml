<view class="pageBody data-v-4cecb660"><view style="background-color:#FFF;padding:10rpx 10rpx 10rpx;" class="data-v-4cecb660"><u-search vue-id="4cecddcc-1" input-align="center" height="50" show-action="{{false}}" margin="0rpx 20rpx 10rpx " value="{{keyWord}}" data-event-opts="{{[['^search',[['searchFun']]],['^input',[['__set_model',['','keyWord','$event',[]]]]]]}}" bind:search="__e" bind:input="__e" class="data-v-4cecb660" bind:__l="__l"></u-search><view class="CustomSort data-v-4cecb660"><u-row class="CustomSortRow data-v-4cecb660" vue-id="4cecddcc-2" bind:__l="__l" vue-slots="{{['default']}}"><u-col vue-id="{{('4cecddcc-3')+','+('4cecddcc-2')}}" span="3" text-align="center" class="data-v-4cecb660" bind:__l="__l" vue-slots="{{['default']}}"><u-dropdown class="u-dropdown data-v-4cecb660" vue-id="{{('4cecddcc-4')+','+('4cecddcc-3')}}" bind:__l="__l" vue-slots="{{['default']}}"><u-dropdown-item style="width:100%;" vue-id="{{('4cecddcc-5')+','+('4cecddcc-4')}}" title="{{paixuTitle}}" options="{{ZongHeOptions}}" value="{{ZongHeValue}}" data-event-opts="{{[['^change',[['paixuChange']]],['^input',[['__set_model',['','ZongHeValue','$event',[]]]]]]}}" bind:change="__e" bind:input="__e" class="data-v-4cecb660" bind:__l="__l"></u-dropdown-item></u-dropdown></u-col><u-col vue-id="{{('4cecddcc-6')+','+('4cecddcc-2')}}" span="3" text-align="center" class="data-v-4cecb660" bind:__l="__l" vue-slots="{{['default']}}"><view data-event-opts="{{[['tap',[['xiaoliangFun',['$event']]]]]}}" style="height:34px;line-height:34px;" bindtap="__e" class="data-v-4cecb660">销量<u-icon vue-id="{{('4cecddcc-7')+','+('4cecddcc-6')}}" color="{{xiaoliangSort==0?'#fa3534':'#c0c4cc'}}" size="22" width="10" name="arrow-up-fill" class="data-v-4cecb660" bind:__l="__l"></u-icon><u-icon vue-id="{{('4cecddcc-8')+','+('4cecddcc-6')}}" color="{{xiaoliangSort==1?'#fa3534':'#c0c4cc'}}" size="22" name="arrow-down-fill" class="data-v-4cecb660" bind:__l="__l"></u-icon></view></u-col><u-col vue-id="{{('4cecddcc-9')+','+('4cecddcc-2')}}" span="3" text-align="center" class="data-v-4cecb660" bind:__l="__l" vue-slots="{{['default']}}"><view data-event-opts="{{[['tap',[['jiageFun',['$event']]]]]}}" style="height:34px;line-height:34px;" bindtap="__e" class="data-v-4cecb660">价格<u-icon vue-id="{{('4cecddcc-10')+','+('4cecddcc-9')}}" color="{{jiageSort==0?'#fa3534':'#c0c4cc'}}" size="22" width="10" name="arrow-up-fill" class="data-v-4cecb660" bind:__l="__l"></u-icon><u-icon vue-id="{{('4cecddcc-11')+','+('4cecddcc-9')}}" color="{{jiageSort==1?'#fa3534':'#c0c4cc'}}" size="22" name="arrow-down-fill" class="data-v-4cecb660" bind:__l="__l"></u-icon></view></u-col><u-col vue-id="{{('4cecddcc-12')+','+('4cecddcc-2')}}" span="3" text-align="center" class="data-v-4cecb660" bind:__l="__l" vue-slots="{{['default']}}"><view data-event-opts="{{[['tap',[['ShaiXuanFun',['$event']]]]]}}" style="height:34px;line-height:34px;" bindtap="__e" class="data-v-4cecb660">筛选<u-icon vue-id="{{('4cecddcc-13')+','+('4cecddcc-12')}}" color="#c0c4cc" size="22" width="10" name="grid" class="data-v-4cecb660" bind:__l="__l"></u-icon></view></u-col></u-row></view><uni-transition vue-id="4cecddcc-14" modeClass="{{['fade']}}" styles="{{$root.a0}}" show="{{shaixuanBoxShow}}" data-ref="ani" class="data-v-4cecb660 vue-ref" bind:__l="__l" vue-slots="{{['default']}}"><view class="ScreenBoxForm data-v-4cecb660"><view class="viewlabel data-v-4cecb660">价格区间(元)</view><view class="PriceSelectInfo data-v-4cecb660"><view class="data-v-4cecb660"><u-row vue-id="{{('4cecddcc-15')+','+('4cecddcc-14')}}" gutter="16" class="data-v-4cecb660" bind:__l="__l" vue-slots="{{['default']}}"><u-col vue-id="{{('4cecddcc-16')+','+('4cecddcc-15')}}" offset="1" span="3" text-align="center" class="data-v-4cecb660" bind:__l="__l" vue-slots="{{['default']}}"><u-tag style="border:0px;" vue-id="{{('4cecddcc-17')+','+('4cecddcc-16')}}" text="0-30" type="{{PriceSelectTagFlag=='PriceSelect1'?'error':'info'}}" index="PriceSelect1" data-event-opts="{{[['^click',[['PriceSelectFun']]]]}}" bind:click="__e" class="data-v-4cecb660" bind:__l="__l"></u-tag></u-col><u-col vue-id="{{('4cecddcc-18')+','+('4cecddcc-15')}}" offset="1" span="3" text-align="center" class="data-v-4cecb660" bind:__l="__l" vue-slots="{{['default']}}"><u-tag style="border:0px;" vue-id="{{('4cecddcc-19')+','+('4cecddcc-18')}}" text="30-70" type="{{PriceSelectTagFlag=='PriceSelect2'?'error':'info'}}" index="PriceSelect2" data-event-opts="{{[['^click',[['PriceSelectFun']]]]}}" bind:click="__e" class="data-v-4cecb660" bind:__l="__l"></u-tag></u-col><u-col vue-id="{{('4cecddcc-20')+','+('4cecddcc-15')}}" offset="1" span="3" text-align="center" class="data-v-4cecb660" bind:__l="__l" vue-slots="{{['default']}}"><u-tag style="border:0px;" vue-id="{{('4cecddcc-21')+','+('4cecddcc-20')}}" text="70以上" type="{{PriceSelectTagFlag=='PriceSelect3'?'error':'info'}}" index="PriceSelect3" data-event-opts="{{[['^click',[['PriceSelectFun']]]]}}" bind:click="__e" class="data-v-4cecb660" bind:__l="__l"></u-tag></u-col></u-row></view><view class="PriceInputView data-v-4cecb660" style="margin-top:10rpx;"><u-row vue-id="{{('4cecddcc-22')+','+('4cecddcc-14')}}" gutter="16" class="data-v-4cecb660" bind:__l="__l" vue-slots="{{['default']}}"><u-col vue-id="{{('4cecddcc-23')+','+('4cecddcc-22')}}" offset="1" span="5" text-align="center" class="data-v-4cecb660" bind:__l="__l"></u-col><u-col vue-id="{{('4cecddcc-24')+','+('4cecddcc-22')}}" span="5" text-align="center" class="data-v-4cecb660" bind:__l="__l"></u-col></u-row></view></view><view class="ScreenBoxForm-footer data-v-4cecb660" style="text-align:center;margin-top:15rpx;padding-top:15rpx;border-top:1px solid #e4e7ed;"><u-button style="width:20%;display:inline-flex;margin-right:10%;" vue-id="{{('4cecddcc-25')+','+('4cecddcc-14')}}" size="mini" type="error" data-event-opts="{{[['^click',[['ShaiXuanFunSave']]]]}}" bind:click="__e" class="data-v-4cecb660" bind:__l="__l" vue-slots="{{['default']}}">确定</u-button><u-button style="width:20%;display:inline-flex;" vue-id="{{('4cecddcc-26')+','+('4cecddcc-14')}}" size="mini" data-event-opts="{{[['^click',[['ShaiXuanFunCancel']]]]}}" bind:click="__e" class="data-v-4cecb660" bind:__l="__l" vue-slots="{{['default']}}">重置</u-button></view></view></uni-transition></view><view class="CustomScreen data-v-4cecb660"><view class="ScreenItem data-v-4cecb660"><label class="ItemLabel data-v-4cecb660">是否品牌商品</label><u-checkbox bind:change="__e" bind:input="__e" vue-id="4cecddcc-27" value="{{is_brand_goods}}" data-event-opts="{{[['^change',[['ChangeIsBrandGoods']]],['^input',[['__set_model',['','is_brand_goods','$event',[]]]]]]}}" class="data-v-4cecb660" bind:__l="__l"></u-checkbox></view><u-line vue-id="4cecddcc-28" direction="col" border-style="dashed" color="#c8c9cc" class="data-v-4cecb660" bind:__l="__l"></u-line><view class="ScreenItem data-v-4cecb660"><label class="ItemLabel data-v-4cecb660">只看有券</label><u-checkbox bind:change="__e" bind:input="__e" vue-id="4cecddcc-29" value="{{with_coupon}}" data-event-opts="{{[['^change',[['ChangeWithCoupon']]],['^input',[['__set_model',['','with_coupon','$event',[]]]]]]}}" class="data-v-4cecb660" bind:__l="__l"></u-checkbox></view></view><view class="goodList data-v-4cecb660"><block qq:if="{{GoodsRecommend.length<=0}}"><view style="text-align:center;width:100%;" class="data-v-4cecb660"><u-loading vue-id="4cecddcc-30" show="{{!(GoodsRecommend.length>0)}}" size="54" mode="flower" class="data-v-4cecb660" bind:__l="__l"></u-loading></view></block><block qq:for="{{$root.l0}}" qq:for-item="item" qq:for-index="gIndex" qq:key="gIndex"><view data-event-opts="{{[['tap',[['gotoDetail',['$0'],[[['GoodsRecommend','',gIndex]]]]]]]}}" class="goodItem data-v-4cecb660" bindtap="__e"><view class="goodImg data-v-4cecb660"><image class="u-image imginfo data-v-4cecb660" src="{{item.$orig.goods_thumbnail_url}}"></image></view><view class="goodDesc data-v-4cecb660"><view class="title u-line-2 data-v-4cecb660">{{item.$orig.goods_desc}}</view><view class="price data-v-4cecb660"><view class="newprice data-v-4cecb660">{{"￥"+item.m0}}</view><view class="oldprice data-v-4cecb660">{{"￥"+item.$orig.min_group_price/100}}</view><view class="saleinfo data-v-4cecb660">{{"已抢"+item.$orig.sales_tip+"件"}}</view></view><view class="goodTags data-v-4cecb660"><u-tag class="tag data-v-4cecb660" vue-id="{{'4cecddcc-31-'+gIndex}}" text="{{'再减'+item.$orig.coupon_discount/100+'元'}}" type="error" mode="dark" bind:__l="__l"></u-tag></view></view></view></block><view style="width:100%;" class="data-v-4cecb660"><view hidden="{{!(IsGoodsPageEnd)}}" class="data-v-4cecb660"><u-divider vue-id="4cecddcc-32" bg-color="#F3F4F6" margin-top="30" margin-bottom="30" half-width="25%" color="#909399" class="data-v-4cecb660" bind:__l="__l" vue-slots="{{['default']}}">人家是有底线的呦</u-divider></view></view></view><u-back-top vue-id="4cecddcc-33" scroll-top="{{scrollTop}}" top="600" right="20" class="data-v-4cecb660" bind:__l="__l"></u-back-top><u-toast vue-id="4cecddcc-34" data-ref="uToast" class="data-v-4cecb660 vue-ref" bind:__l="__l"></u-toast></view>