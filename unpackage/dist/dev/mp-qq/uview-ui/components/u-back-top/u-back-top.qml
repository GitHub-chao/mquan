<view data-event-opts="{{[['tap',[['backToTop',['$event']]]]]}}" class="{{['u-back-top','data-v-b41816c0','u-back-top--mode--'+mode]}}" style="{{$root.s0}}" bindtap="__e"><block qq:if="{{!$slots.default&&!$slots.$default}}"><view class="u-back-top__content data-v-b41816c0"><u-icon vue-id="b4183e2c-1" name="{{icon}}" custom-style="{{iconStyle}}" data-event-opts="{{[['^click',[['backToTop']]]]}}" bind:click="__e" class="data-v-b41816c0" bind:__l="__l"></u-icon><view class="u-back-top__content__tips data-v-b41816c0">{{''+tips+''}}</view></view></block><block qq:else><slot></slot></block></view>