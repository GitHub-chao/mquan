(global["webpackJsonp"] = global["webpackJsonp"] || []).push([["uview-ui/components/u-popup/u-popup"],{

/***/ 227:
/*!***********************************************************************!*\
  !*** E:/HBuilder Project/优惠券/uview-ui/components/u-popup/u-popup.vue ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _u_popup_vue_vue_type_template_id_17becaea_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./u-popup.vue?vue&type=template&id=17becaea&scoped=true& */ 228);
/* harmony import */ var _u_popup_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./u-popup.vue?vue&type=script&lang=js& */ 230);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _u_popup_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _u_popup_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var _u_popup_vue_vue_type_style_index_0_id_17becaea_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./u-popup.vue?vue&type=style&index=0&id=17becaea&scoped=true&lang=scss& */ 232);
/* harmony import */ var _D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/runtime/componentNormalizer.js */ 10);

var renderjs





/* normalize component */

var component = Object(_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _u_popup_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _u_popup_vue_vue_type_template_id_17becaea_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _u_popup_vue_vue_type_template_id_17becaea_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "17becaea",
  null,
  false,
  _u_popup_vue_vue_type_template_id_17becaea_scoped_true___WEBPACK_IMPORTED_MODULE_0__["components"],
  renderjs
)

component.options.__file = "uview-ui/components/u-popup/u-popup.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ 228:
/*!******************************************************************************************************************!*\
  !*** E:/HBuilder Project/优惠券/uview-ui/components/u-popup/u-popup.vue?vue&type=template&id=17becaea&scoped=true& ***!
  \******************************************************************************************************************/
/*! exports provided: render, staticRenderFns, recyclableRender, components */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_16_0_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_u_popup_vue_vue_type_template_id_17becaea_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--16-0!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/template.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/page-meta.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!./u-popup.vue?vue&type=template&id=17becaea&scoped=true& */ 229);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_16_0_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_u_popup_vue_vue_type_template_id_17becaea_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_16_0_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_u_popup_vue_vue_type_template_id_17becaea_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "recyclableRender", function() { return _D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_16_0_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_u_popup_vue_vue_type_template_id_17becaea_scoped_true___WEBPACK_IMPORTED_MODULE_0__["recyclableRender"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "components", function() { return _D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_16_0_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_u_popup_vue_vue_type_template_id_17becaea_scoped_true___WEBPACK_IMPORTED_MODULE_0__["components"]; });



/***/ }),

/***/ 229:
/*!******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--16-0!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/template.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/page-meta.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!E:/HBuilder Project/优惠券/uview-ui/components/u-popup/u-popup.vue?vue&type=template&id=17becaea&scoped=true& ***!
  \******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns, recyclableRender, components */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "recyclableRender", function() { return recyclableRender; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "components", function() { return components; });
var components
try {
  components = {
    uMask: function() {
      return __webpack_require__.e(/*! import() | uview-ui/components/u-mask/u-mask */ "uview-ui/components/u-mask/u-mask").then(__webpack_require__.bind(null, /*! @/uview-ui/components/u-mask/u-mask.vue */ 290))
    },
    uIcon: function() {
      return __webpack_require__.e(/*! import() | uview-ui/components/u-icon/u-icon */ "uview-ui/components/u-icon/u-icon").then(__webpack_require__.bind(null, /*! @/uview-ui/components/u-icon/u-icon.vue */ 213))
    }
  }
} catch (e) {
  if (
    e.message.indexOf("Cannot find module") !== -1 &&
    e.message.indexOf(".vue") !== -1
  ) {
    console.error(e.message)
    console.error("1. 排查组件名称拼写是否正确")
    console.error(
      "2. 排查组件是否符合 easycom 规范，文档：https://uniapp.dcloud.net.cn/collocation/pages?id=easycom"
    )
    console.error(
      "3. 若组件不符合 easycom 规范，需手动引入，并在 components 中注册该组件"
    )
  } else {
    throw e
  }
}
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  var s0 = _vm.visibleSync
    ? _vm.__get_style([
        _vm.customStyle,
        {
          zIndex: _vm.uZindex - 1
        }
      ])
    : null
  var s1 = _vm.visibleSync ? _vm.__get_style([_vm.style]) : null
  var s2 =
    _vm.visibleSync && _vm.mode == "center"
      ? _vm.__get_style([_vm.centerStyle])
      : null
  _vm.$mp.data = Object.assign(
    {},
    {
      $root: {
        s0: s0,
        s1: s1,
        s2: s2
      }
    }
  )
}
var recyclableRender = false
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ 230:
/*!************************************************************************************************!*\
  !*** E:/HBuilder Project/优惠券/uview-ui/components/u-popup/u-popup.vue?vue&type=script&lang=js& ***!
  \************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _D_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_u_popup_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!./node_modules/babel-loader/lib!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--12-1!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/script.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!./u-popup.vue?vue&type=script&lang=js& */ 231);
/* harmony import */ var _D_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_u_popup_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_D_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_u_popup_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _D_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_u_popup_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _D_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_u_popup_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_D_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_u_popup_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ 231:
/*!*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--12-1!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/script.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!E:/HBuilder Project/优惠券/uview-ui/components/u-popup/u-popup.vue?vue&type=script&lang=js& ***!
  \*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0; //
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/**
 * popup 弹窗
 * @description 弹出层容器，用于展示弹窗、信息提示等内容，支持上、下、左、右和中部弹出。组件只提供容器，内部内容由用户自定义
 * @tutorial https://www.uviewui.com/components/popup.html
 * @property {String} mode 弹出方向（默认left）
 * @property {Boolean} mask 是否显示遮罩（默认true）
 * @property {Stringr | Number} length mode=left | 见官网说明（默认auto）
 * @property {Boolean} zoom 是否开启缩放动画，只在mode为center时有效（默认true）
 * @property {Boolean} safe-area-inset-bottom 是否开启底部安全区适配（默认false）
 * @property {Boolean} mask-close-able 点击遮罩是否可以关闭弹出层（默认true）
 * @property {Object} custom-style 用户自定义样式
 * @property {Stringr | Number} negative-top 中部弹出时，往上偏移的值
 * @property {Numberr | String} border-radius 弹窗圆角值（默认0）
 * @property {Numberr | String} z-index 弹出内容的z-index值（默认1075）
 * @property {Boolean} closeable 是否显示关闭图标（默认false）
 * @property {String} close-icon 关闭图标的名称，只能uView的内置图标
 * @property {String} close-icon-pos 自定义关闭图标位置（默认top-right）
 * @property {String} close-icon-color 关闭图标的颜色（默认#909399）
 * @property {Number | String} close-icon-size 关闭图标的大小，单位rpx（默认30）
 * @event {Function} open 弹出层打开
 * @event {Function} close 弹出层收起
 * @example <u-popup v-model="show"><view>出淤泥而不染，濯清涟而不妖</view></u-popup>
 */var _default2 =
{
  name: 'u-popup',
  props: {
    /**
     * 显示状态
     */
    show: {
      type: Boolean,
      default: false },

    /**
     * 弹出方向，left|right|top|bottom|center
     */
    mode: {
      type: String,
      default: 'left' },

    /**
     * 是否显示遮罩
     */
    mask: {
      type: Boolean,
      default: true },

    // 抽屉的宽度(mode=left|right)，或者高度(mode=top|bottom)，单位rpx，或者"auto"
    // 或者百分比"50%"，表示由内容撑开高度或者宽度
    length: {
      type: [Number, String],
      default: 'auto' },

    // 是否开启缩放动画，只在mode=center时有效
    zoom: {
      type: Boolean,
      default: true },

    // 是否开启底部安全区适配，开启的话，会在iPhoneX机型底部添加一定的内边距
    safeAreaInsetBottom: {
      type: Boolean,
      default: false },

    // 是否可以通过点击遮罩进行关闭
    maskCloseAble: {
      type: Boolean,
      default: true },

    // 用户自定义样式
    customStyle: {
      type: Object,
      default: function _default() {
        return {};
      } },

    value: {
      type: Boolean,
      default: false },

    // 此为内部参数，不在文档对外使用，为了解决Picker和keyboard等融合了弹窗的组件
    // 对v-model双向绑定多层调用造成报错不能修改props值的问题
    popup: {
      type: Boolean,
      default: true },

    // 显示显示弹窗的圆角，单位rpx
    borderRadius: {
      type: [Number, String],
      default: 0 },

    zIndex: {
      type: [Number, String],
      default: '' },

    // 是否显示关闭图标
    closeable: {
      type: Boolean,
      default: false },

    // 关闭图标的名称，只能uView的内置图标
    closeIcon: {
      type: String,
      default: 'close' },

    // 自定义关闭图标位置，top-left为左上角，top-right为右上角，bottom-left为左下角，bottom-right为右下角
    closeIconPos: {
      type: String,
      default: 'top-right' },

    // 关闭图标的颜色
    closeIconColor: {
      type: String,
      default: '#909399' },

    // 关闭图标的大小，单位rpx
    closeIconSize: {
      type: [String, Number],
      default: '30' },

    // 宽度，只对左，右，中部弹出时起作用，单位rpx，或者"auto"
    // 或者百分比"50%"，表示由内容撑开高度或者宽度，优先级高于length参数
    width: {
      type: String,
      default: '' },

    // 高度，只对上，下，中部弹出时起作用，单位rpx，或者"auto"
    // 或者百分比"50%"，表示由内容撑开高度或者宽度，优先级高于length参数
    height: {
      type: String,
      default: '' },

    // 给一个负的margin-top，往上偏移，避免和键盘重合的情况，仅在mode=center时有效
    negativeTop: {
      type: [String, Number],
      default: 0 },

    // 遮罩的样式，一般用于修改遮罩的透明度
    maskCustomStyle: {
      type: Object,
      default: function _default() {
        return {};
      } },

    // 遮罩打开或收起的动画过渡时间，单位ms
    duration: {
      type: [String, Number],
      default: 250 } },


  data: function data() {
    return {
      visibleSync: false,
      showDrawer: false,
      timer: null,
      closeFromInner: false // value的值改变，是发生在内部还是外部
    };
  },
  computed: {
    // 根据mode的位置，设定其弹窗的宽度(mode = left|right)，或者高度(mode = top|bottom)
    style: function style() {
      var style = {};
      // 如果是左边或者上边弹出时，需要给translate设置为负值，用于隐藏
      if (this.mode == 'left' || this.mode == 'right') {
        style = {
          width: this.width ? this.getUnitValue(this.width) : this.getUnitValue(this.length),
          height: '100%',
          transform: "translate3D(".concat(this.mode == 'left' ? '-100%' : '100%', ",0px,0px)") };

      } else if (this.mode == 'top' || this.mode == 'bottom') {
        style = {
          width: '100%',
          height: this.height ? this.getUnitValue(this.height) : this.getUnitValue(this.length),
          transform: "translate3D(0px,".concat(this.mode == 'top' ? '-100%' : '100%', ",0px)") };

      }
      style.zIndex = this.uZindex;
      // 如果用户设置了borderRadius值，添加弹窗的圆角
      if (this.borderRadius) {
        switch (this.mode) {
          case 'left':
            style.borderRadius = "0 ".concat(this.borderRadius, "rpx ").concat(this.borderRadius, "rpx 0");
            break;
          case 'top':
            style.borderRadius = "0 0 ".concat(this.borderRadius, "rpx ").concat(this.borderRadius, "rpx");
            break;
          case 'right':
            style.borderRadius = "".concat(this.borderRadius, "rpx 0 0 ").concat(this.borderRadius, "rpx");
            break;
          case 'bottom':
            style.borderRadius = "".concat(this.borderRadius, "rpx ").concat(this.borderRadius, "rpx 0 0");
            break;
          default:}

        // 不加可能圆角无效
        style.overflow = 'hidden';
      }
      if (this.duration) style.transition = "all ".concat(this.duration / 1000, "s linear");
      return style;
    },
    // 中部弹窗的特有样式
    centerStyle: function centerStyle() {
      var style = {};
      style.width = this.width ? this.getUnitValue(this.width) : this.getUnitValue(this.length);
      // 中部弹出的模式，如果没有设置高度，就用auto值，由内容撑开高度
      style.height = this.height ? this.getUnitValue(this.height) : 'auto';
      style.zIndex = this.uZindex;
      style.marginTop = "-".concat(this.$u.addUnit(this.negativeTop));
      if (this.borderRadius) {
        style.borderRadius = "".concat(this.borderRadius, "rpx");
        // 不加可能圆角无效
        style.overflow = 'hidden';
      }
      return style;
    },
    // 计算整理后的z-index值
    uZindex: function uZindex() {
      return this.zIndex ? this.zIndex : this.$u.zIndex.popup;
    } },

  watch: {
    value: function value(val) {
      if (val) {
        this.open();
      } else if (!this.closeFromInner) {
        this.close();
      }
      this.closeFromInner = false;
    } },

  mounted: function mounted() {
    // 组件渲染完成时，检查value是否为true，如果是，弹出popup
    this.value && this.open();
  },
  methods: {
    // 判断传入的值，是否带有单位，如果没有，就默认用rpx单位
    getUnitValue: function getUnitValue(val) {
      if (/(%|px|rpx|auto)$/.test(val)) return val;else
      return val + 'rpx';
    },
    // 遮罩被点击
    maskClick: function maskClick() {
      this.close();
    },
    close: function close() {
      // 标记关闭是内部发生的，否则修改了value值，导致watch中对value检测，导致再执行一遍close
      // 造成@close事件触发两次
      this.closeFromInner = true;
      this.change('showDrawer', 'visibleSync', false);
    },
    // 中部弹出时，需要.u-drawer-content将居中内容，此元素会铺满屏幕，点击需要关闭弹窗
    // 让其只在mode=center时起作用
    modeCenterClose: function modeCenterClose(mode) {
      if (mode != 'center' || !this.maskCloseAble) return;
      this.close();
    },
    open: function open() {
      this.change('visibleSync', 'showDrawer', true);
    },
    // 此处的原理是，关闭时先通过动画隐藏弹窗和遮罩，再移除整个组件
    // 打开时，先渲染组件，延时一定时间再让遮罩和弹窗的动画起作用
    change: function change(param1, param2, status) {var _this = this;
      // 如果this.popup为false，意味着为picker，actionsheet等组件调用了popup组件
      if (this.popup == true) {
        this.$emit('input', status);
      }
      this[param1] = status;
      if (status) {

        this.timer = setTimeout(function () {
          _this[param2] = status;
          _this.$emit(status ? 'open' : 'close');
        }, 50);







      } else {
        this.timer = setTimeout(function () {
          _this[param2] = status;
          _this.$emit(status ? 'open' : 'close');
        }, this.duration);
      }
    } } };exports.default = _default2;

/***/ }),

/***/ 232:
/*!*********************************************************************************************************************************!*\
  !*** E:/HBuilder Project/优惠券/uview-ui/components/u-popup/u-popup.vue?vue&type=style&index=0&id=17becaea&scoped=true&lang=scss& ***!
  \*********************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _D_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_D_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_2_D_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_3_D_HBuilderX_plugins_uniapp_cli_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_4_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_5_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_u_popup_vue_vue_type_style_index_0_id_17becaea_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!./node_modules/mini-css-extract-plugin/dist/loader.js??ref--8-oneOf-1-0!./node_modules/css-loader/dist/cjs.js??ref--8-oneOf-1-1!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--8-oneOf-1-2!./node_modules/postcss-loader/src??ref--8-oneOf-1-3!./node_modules/sass-loader/dist/cjs.js??ref--8-oneOf-1-4!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--8-oneOf-1-5!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!./u-popup.vue?vue&type=style&index=0&id=17becaea&scoped=true&lang=scss& */ 233);
/* harmony import */ var _D_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_D_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_2_D_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_3_D_HBuilderX_plugins_uniapp_cli_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_4_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_5_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_u_popup_vue_vue_type_style_index_0_id_17becaea_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_D_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_D_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_2_D_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_3_D_HBuilderX_plugins_uniapp_cli_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_4_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_5_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_u_popup_vue_vue_type_style_index_0_id_17becaea_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _D_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_D_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_2_D_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_3_D_HBuilderX_plugins_uniapp_cli_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_4_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_5_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_u_popup_vue_vue_type_style_index_0_id_17becaea_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _D_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_D_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_2_D_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_3_D_HBuilderX_plugins_uniapp_cli_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_4_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_5_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_u_popup_vue_vue_type_style_index_0_id_17becaea_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_D_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_D_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_2_D_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_3_D_HBuilderX_plugins_uniapp_cli_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_4_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_5_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_u_popup_vue_vue_type_style_index_0_id_17becaea_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ 233:
/*!***********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/mini-css-extract-plugin/dist/loader.js??ref--8-oneOf-1-0!./node_modules/css-loader/dist/cjs.js??ref--8-oneOf-1-1!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--8-oneOf-1-2!./node_modules/postcss-loader/src??ref--8-oneOf-1-3!./node_modules/sass-loader/dist/cjs.js??ref--8-oneOf-1-4!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--8-oneOf-1-5!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!E:/HBuilder Project/优惠券/uview-ui/components/u-popup/u-popup.vue?vue&type=style&index=0&id=17becaea&scoped=true&lang=scss& ***!
  \***********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin
    if(false) { var cssReload; }
  

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vRTovSEJ1aWxkZXIgUHJvamVjdC/kvJjmg6DliLgvdXZpZXctdWkvY29tcG9uZW50cy91LXBvcHVwL3UtcG9wdXAudnVlPzJmNmYiLCJ3ZWJwYWNrOi8vL0U6L0hCdWlsZGVyIFByb2plY3Qv5LyY5oOg5Yi4L3V2aWV3LXVpL2NvbXBvbmVudHMvdS1wb3B1cC91LXBvcHVwLnZ1ZT9hYjM2Iiwid2VicGFjazovLy9FOi9IQnVpbGRlciBQcm9qZWN0L+S8mOaDoOWIuC91dmlldy11aS9jb21wb25lbnRzL3UtcG9wdXAvdS1wb3B1cC52dWU/NjQ1OSIsIndlYnBhY2s6Ly8vRTovSEJ1aWxkZXIgUHJvamVjdC/kvJjmg6DliLgvdXZpZXctdWkvY29tcG9uZW50cy91LXBvcHVwL3UtcG9wdXAudnVlP2MyZGUiLCJ1bmktYXBwOi8vL3V2aWV3LXVpL2NvbXBvbmVudHMvdS1wb3B1cC91LXBvcHVwLnZ1ZSIsIndlYnBhY2s6Ly8vRTovSEJ1aWxkZXIgUHJvamVjdC/kvJjmg6DliLgvdXZpZXctdWkvY29tcG9uZW50cy91LXBvcHVwL3UtcG9wdXAudnVlPzJhYjIiLCJ3ZWJwYWNrOi8vL0U6L0hCdWlsZGVyIFByb2plY3Qv5LyY5oOg5Yi4L3V2aWV3LXVpL2NvbXBvbmVudHMvdS1wb3B1cC91LXBvcHVwLnZ1ZT8zOWM5Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBZ0k7QUFDaEk7QUFDMkQ7QUFDTDtBQUNzQzs7O0FBRzVGO0FBQ3FLO0FBQ3JLLGdCQUFnQiwrS0FBVTtBQUMxQixFQUFFLDZFQUFNO0FBQ1IsRUFBRSw4RkFBTTtBQUNSLEVBQUUsdUdBQWU7QUFDakI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEVBQUUsa0dBQVU7QUFDWjtBQUNBOztBQUVBO0FBQ2UsZ0Y7Ozs7Ozs7Ozs7OztBQ3ZCZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FB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QUFBO0FBQUE7QUFBMm5DLENBQWdCLHFtQ0FBRyxFQUFDLEM7Ozs7Ozs7Ozs7O0FDQS9vQztBQUNBLE9BQU8sS0FBVSxFQUFFLGtCQUtkIiwiZmlsZSI6InV2aWV3LXVpL2NvbXBvbmVudHMvdS1wb3B1cC91LXBvcHVwLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgcmVuZGVyLCBzdGF0aWNSZW5kZXJGbnMsIHJlY3ljbGFibGVSZW5kZXIsIGNvbXBvbmVudHMgfSBmcm9tIFwiLi91LXBvcHVwLnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD0xN2JlY2FlYSZzY29wZWQ9dHJ1ZSZcIlxudmFyIHJlbmRlcmpzXG5pbXBvcnQgc2NyaXB0IGZyb20gXCIuL3UtcG9wdXAudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiXG5leHBvcnQgKiBmcm9tIFwiLi91LXBvcHVwLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIlxuaW1wb3J0IHN0eWxlMCBmcm9tIFwiLi91LXBvcHVwLnZ1ZT92dWUmdHlwZT1zdHlsZSZpbmRleD0wJmlkPTE3YmVjYWVhJnNjb3BlZD10cnVlJmxhbmc9c2NzcyZcIlxuXG5cbi8qIG5vcm1hbGl6ZSBjb21wb25lbnQgKi9cbmltcG9ydCBub3JtYWxpemVyIGZyb20gXCIhRDpcXFxcSEJ1aWxkZXJYXFxcXHBsdWdpbnNcXFxcdW5pYXBwLWNsaVxcXFxub2RlX21vZHVsZXNcXFxcQGRjbG91ZGlvXFxcXHZ1ZS1jbGktcGx1Z2luLXVuaVxcXFxwYWNrYWdlc1xcXFx2dWUtbG9hZGVyXFxcXGxpYlxcXFxydW50aW1lXFxcXGNvbXBvbmVudE5vcm1hbGl6ZXIuanNcIlxudmFyIGNvbXBvbmVudCA9IG5vcm1hbGl6ZXIoXG4gIHNjcmlwdCxcbiAgcmVuZGVyLFxuICBzdGF0aWNSZW5kZXJGbnMsXG4gIGZhbHNlLFxuICBudWxsLFxuICBcIjE3YmVjYWVhXCIsXG4gIG51bGwsXG4gIGZhbHNlLFxuICBjb21wb25lbnRzLFxuICByZW5kZXJqc1xuKVxuXG5jb21wb25lbnQub3B0aW9ucy5fX2ZpbGUgPSBcInV2aWV3LXVpL2NvbXBvbmVudHMvdS1wb3B1cC91LXBvcHVwLnZ1ZVwiXG5leHBvcnQgZGVmYXVsdCBjb21wb25lbnQuZXhwb3J0cyIsImV4cG9ydCAqIGZyb20gXCItIUQ6XFxcXEhCdWlsZGVyWFxcXFxwbHVnaW5zXFxcXHVuaWFwcC1jbGlcXFxcbm9kZV9tb2R1bGVzXFxcXEBkY2xvdWRpb1xcXFx2dWUtY2xpLXBsdWdpbi11bmlcXFxccGFja2FnZXNcXFxcdnVlLWxvYWRlclxcXFxsaWJcXFxcbG9hZGVyc1xcXFx0ZW1wbGF0ZUxvYWRlci5qcz8/dnVlLWxvYWRlci1vcHRpb25zIUQ6XFxcXEhCdWlsZGVyWFxcXFxwbHVnaW5zXFxcXHVuaWFwcC1jbGlcXFxcbm9kZV9tb2R1bGVzXFxcXEBkY2xvdWRpb1xcXFx2dWUtY2xpLXBsdWdpbi11bmlcXFxccGFja2FnZXNcXFxcd2VicGFjay1wcmVwcm9jZXNzLWxvYWRlclxcXFxpbmRleC5qcz8/cmVmLS0xNi0wIUQ6XFxcXEhCdWlsZGVyWFxcXFxwbHVnaW5zXFxcXHVuaWFwcC1jbGlcXFxcbm9kZV9tb2R1bGVzXFxcXEBkY2xvdWRpb1xcXFx3ZWJwYWNrLXVuaS1tcC1sb2FkZXJcXFxcbGliXFxcXHRlbXBsYXRlLmpzIUQ6XFxcXEhCdWlsZGVyWFxcXFxwbHVnaW5zXFxcXHVuaWFwcC1jbGlcXFxcbm9kZV9tb2R1bGVzXFxcXEBkY2xvdWRpb1xcXFx2dWUtY2xpLXBsdWdpbi11bmlcXFxccGFja2FnZXNcXFxcd2VicGFjay11bmktYXBwLWxvYWRlclxcXFxwYWdlLW1ldGEuanMhRDpcXFxcSEJ1aWxkZXJYXFxcXHBsdWdpbnNcXFxcdW5pYXBwLWNsaVxcXFxub2RlX21vZHVsZXNcXFxcQGRjbG91ZGlvXFxcXHZ1ZS1jbGktcGx1Z2luLXVuaVxcXFxwYWNrYWdlc1xcXFx2dWUtbG9hZGVyXFxcXGxpYlxcXFxpbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIUQ6XFxcXEhCdWlsZGVyWFxcXFxwbHVnaW5zXFxcXHVuaWFwcC1jbGlcXFxcbm9kZV9tb2R1bGVzXFxcXEBkY2xvdWRpb1xcXFx3ZWJwYWNrLXVuaS1tcC1sb2FkZXJcXFxcbGliXFxcXHN0eWxlLmpzIS4vdS1wb3B1cC52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9MTdiZWNhZWEmc2NvcGVkPXRydWUmXCIiLCJ2YXIgY29tcG9uZW50c1xudHJ5IHtcbiAgY29tcG9uZW50cyA9IHtcbiAgICB1TWFzazogZnVuY3Rpb24oKSB7XG4gICAgICByZXR1cm4gaW1wb3J0KFxuICAgICAgICAvKiB3ZWJwYWNrQ2h1bmtOYW1lOiBcInV2aWV3LXVpL2NvbXBvbmVudHMvdS1tYXNrL3UtbWFza1wiICovIFwiQC91dmlldy11aS9jb21wb25lbnRzL3UtbWFzay91LW1hc2sudnVlXCJcbiAgICAgIClcbiAgICB9LFxuICAgIHVJY29uOiBmdW5jdGlvbigpIHtcbiAgICAgIHJldHVybiBpbXBvcnQoXG4gICAgICAgIC8qIHdlYnBhY2tDaHVua05hbWU6IFwidXZpZXctdWkvY29tcG9uZW50cy91LWljb24vdS1pY29uXCIgKi8gXCJAL3V2aWV3LXVpL2NvbXBvbmVudHMvdS1pY29uL3UtaWNvbi52dWVcIlxuICAgICAgKVxuICAgIH1cbiAgfVxufSBjYXRjaCAoZSkge1xuICBpZiAoXG4gICAgZS5tZXNzYWdlLmluZGV4T2YoXCJDYW5ub3QgZmluZCBtb2R1bGVcIikgIT09IC0xICYmXG4gICAgZS5tZXNzYWdlLmluZGV4T2YoXCIudnVlXCIpICE9PSAtMVxuICApIHtcbiAgICBjb25zb2xlLmVycm9yKGUubWVzc2FnZSlcbiAgICBjb25zb2xlLmVycm9yKFwiMS4g5o6S5p+l57uE5Lu25ZCN56ew5ou85YaZ5piv5ZCm5q2j56GuXCIpXG4gICAgY29uc29sZS5lcnJvcihcbiAgICAgIFwiMi4g5o6S5p+l57uE5Lu25piv5ZCm56ym5ZCIIGVhc3ljb20g6KeE6IyD77yM5paH5qGj77yaaHR0cHM6Ly91bmlhcHAuZGNsb3VkLm5ldC5jbi9jb2xsb2NhdGlvbi9wYWdlcz9pZD1lYXN5Y29tXCJcbiAgICApXG4gICAgY29uc29sZS5lcnJvcihcbiAgICAgIFwiMy4g6Iul57uE5Lu25LiN56ym5ZCIIGVhc3ljb20g6KeE6IyD77yM6ZyA5omL5Yqo5byV5YWl77yM5bm25ZyoIGNvbXBvbmVudHMg5Lit5rOo5YaM6K+l57uE5Lu2XCJcbiAgICApXG4gIH0gZWxzZSB7XG4gICAgdGhyb3cgZVxuICB9XG59XG52YXIgcmVuZGVyID0gZnVuY3Rpb24oKSB7XG4gIHZhciBfdm0gPSB0aGlzXG4gIHZhciBfaCA9IF92bS4kY3JlYXRlRWxlbWVudFxuICB2YXIgX2MgPSBfdm0uX3NlbGYuX2MgfHwgX2hcbiAgdmFyIHMwID0gX3ZtLnZpc2libGVTeW5jXG4gICAgPyBfdm0uX19nZXRfc3R5bGUoW1xuICAgICAgICBfdm0uY3VzdG9tU3R5bGUsXG4gICAgICAgIHtcbiAgICAgICAgICB6SW5kZXg6IF92bS51WmluZGV4IC0gMVxuICAgICAgICB9XG4gICAgICBdKVxuICAgIDogbnVsbFxuICB2YXIgczEgPSBfdm0udmlzaWJsZVN5bmMgPyBfdm0uX19nZXRfc3R5bGUoW192bS5zdHlsZV0pIDogbnVsbFxuICB2YXIgczIgPVxuICAgIF92bS52aXNpYmxlU3luYyAmJiBfdm0ubW9kZSA9PSBcImNlbnRlclwiXG4gICAgICA/IF92bS5fX2dldF9zdHlsZShbX3ZtLmNlbnRlclN0eWxlXSlcbiAgICAgIDogbnVsbFxuICBfdm0uJG1wLmRhdGEgPSBPYmplY3QuYXNzaWduKFxuICAgIHt9LFxuICAgIHtcbiAgICAgICRyb290OiB7XG4gICAgICAgIHMwOiBzMCxcbiAgICAgICAgczE6IHMxLFxuICAgICAgICBzMjogczJcbiAgICAgIH1cbiAgICB9XG4gIClcbn1cbnZhciByZWN5Y2xhYmxlUmVuZGVyID0gZmFsc2VcbnZhciBzdGF0aWNSZW5kZXJGbnMgPSBbXVxucmVuZGVyLl93aXRoU3RyaXBwZWQgPSB0cnVlXG5cbmV4cG9ydCB7IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zLCByZWN5Y2xhYmxlUmVuZGVyLCBjb21wb25lbnRzIH0iLCJpbXBvcnQgbW9kIGZyb20gXCItIUQ6XFxcXEhCdWlsZGVyWFxcXFxwbHVnaW5zXFxcXHVuaWFwcC1jbGlcXFxcbm9kZV9tb2R1bGVzXFxcXGJhYmVsLWxvYWRlclxcXFxsaWJcXFxcaW5kZXguanMhRDpcXFxcSEJ1aWxkZXJYXFxcXHBsdWdpbnNcXFxcdW5pYXBwLWNsaVxcXFxub2RlX21vZHVsZXNcXFxcQGRjbG91ZGlvXFxcXHZ1ZS1jbGktcGx1Z2luLXVuaVxcXFxwYWNrYWdlc1xcXFx3ZWJwYWNrLXByZXByb2Nlc3MtbG9hZGVyXFxcXGluZGV4LmpzPz9yZWYtLTEyLTEhRDpcXFxcSEJ1aWxkZXJYXFxcXHBsdWdpbnNcXFxcdW5pYXBwLWNsaVxcXFxub2RlX21vZHVsZXNcXFxcQGRjbG91ZGlvXFxcXHdlYnBhY2stdW5pLW1wLWxvYWRlclxcXFxsaWJcXFxcc2NyaXB0LmpzIUQ6XFxcXEhCdWlsZGVyWFxcXFxwbHVnaW5zXFxcXHVuaWFwcC1jbGlcXFxcbm9kZV9tb2R1bGVzXFxcXEBkY2xvdWRpb1xcXFx2dWUtY2xpLXBsdWdpbi11bmlcXFxccGFja2FnZXNcXFxcdnVlLWxvYWRlclxcXFxsaWJcXFxcaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyFEOlxcXFxIQnVpbGRlclhcXFxccGx1Z2luc1xcXFx1bmlhcHAtY2xpXFxcXG5vZGVfbW9kdWxlc1xcXFxAZGNsb3VkaW9cXFxcd2VicGFjay11bmktbXAtbG9hZGVyXFxcXGxpYlxcXFxzdHlsZS5qcyEuL3UtcG9wdXAudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiOyBleHBvcnQgZGVmYXVsdCBtb2Q7IGV4cG9ydCAqIGZyb20gXCItIUQ6XFxcXEhCdWlsZGVyWFxcXFxwbHVnaW5zXFxcXHVuaWFwcC1jbGlcXFxcbm9kZV9tb2R1bGVzXFxcXGJhYmVsLWxvYWRlclxcXFxsaWJcXFxcaW5kZXguanMhRDpcXFxcSEJ1aWxkZXJYXFxcXHBsdWdpbnNcXFxcdW5pYXBwLWNsaVxcXFxub2RlX21vZHVsZXNcXFxcQGRjbG91ZGlvXFxcXHZ1ZS1jbGktcGx1Z2luLXVuaVxcXFxwYWNrYWdlc1xcXFx3ZWJwYWNrLXByZXByb2Nlc3MtbG9hZGVyXFxcXGluZGV4LmpzPz9yZWYtLTEyLTEhRDpcXFxcSEJ1aWxkZXJYXFxcXHBsdWdpbnNcXFxcdW5pYXBwLWNsaVxcXFxub2RlX21vZHVsZXNcXFxcQGRjbG91ZGlvXFxcXHdlYnBhY2stdW5pLW1wLWxvYWRlclxcXFxsaWJcXFxcc2NyaXB0LmpzIUQ6XFxcXEhCdWlsZGVyWFxcXFxwbHVnaW5zXFxcXHVuaWFwcC1jbGlcXFxcbm9kZV9tb2R1bGVzXFxcXEBkY2xvdWRpb1xcXFx2dWUtY2xpLXBsdWdpbi11bmlcXFxccGFja2FnZXNcXFxcdnVlLWxvYWRlclxcXFxsaWJcXFxcaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyFEOlxcXFxIQnVpbGRlclhcXFxccGx1Z2luc1xcXFx1bmlhcHAtY2xpXFxcXG5vZGVfbW9kdWxlc1xcXFxAZGNsb3VkaW9cXFxcd2VicGFjay11bmktbXAtbG9hZGVyXFxcXGxpYlxcXFxzdHlsZS5qcyEuL3UtcG9wdXAudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiIiwiPHRlbXBsYXRlPlxyXG5cdDx2aWV3IHYtaWY9XCJ2aXNpYmxlU3luY1wiIDpzdHlsZT1cIltjdXN0b21TdHlsZSwge1xyXG5cdFx0ekluZGV4OiB1WmluZGV4IC0gMVxyXG5cdH1dXCIgY2xhc3M9XCJ1LWRyYXdlclwiIGhvdmVyLXN0b3AtcHJvcGFnYXRpb24+XHJcblx0XHQ8dS1tYXNrIDpkdXJhdGlvbj1cImR1cmF0aW9uXCIgOmN1c3RvbS1zdHlsZT1cIm1hc2tDdXN0b21TdHlsZVwiIDptYXNrQ2xpY2tBYmxlPVwibWFza0Nsb3NlQWJsZVwiIDp6LWluZGV4PVwidVppbmRleCAtIDJcIiA6c2hvdz1cInNob3dEcmF3ZXIgJiYgbWFza1wiIEBjbGljaz1cIm1hc2tDbGlja1wiPjwvdS1tYXNrPlxyXG5cdFx0PHZpZXdcclxuXHRcdFx0Y2xhc3M9XCJ1LWRyYXdlci1jb250ZW50XCJcclxuXHRcdFx0QHRhcD1cIm1vZGVDZW50ZXJDbG9zZShtb2RlKVwiXHJcblx0XHRcdDpjbGFzcz1cIltcclxuXHRcdFx0XHRzYWZlQXJlYUluc2V0Qm90dG9tID8gJ3NhZmUtYXJlYS1pbnNldC1ib3R0b20nIDogJycsXHJcblx0XHRcdFx0J3UtZHJhd2VyLScgKyBtb2RlLFxyXG5cdFx0XHRcdHNob3dEcmF3ZXIgPyAndS1kcmF3ZXItY29udGVudC12aXNpYmxlJyA6ICcnLFxyXG5cdFx0XHRcdHpvb20gJiYgbW9kZSA9PSAnY2VudGVyJyA/ICd1LWFuaW1hdGlvbi16b29tJyA6ICcnXHJcblx0XHRcdF1cIlxyXG5cdFx0XHRAdG91Y2htb3ZlLnN0b3AucHJldmVudFxyXG5cdFx0XHRAdGFwLnN0b3AucHJldmVudFxyXG5cdFx0XHQ6c3R5bGU9XCJbc3R5bGVdXCJcclxuXHRcdD5cclxuXHRcdFx0PHZpZXcgY2xhc3M9XCJ1LW1vZGUtY2VudGVyLWJveFwiIEB0YXAuc3RvcC5wcmV2ZW50IEB0b3VjaG1vdmUuc3RvcC5wcmV2ZW50IHYtaWY9XCJtb2RlID09ICdjZW50ZXInXCIgOnN0eWxlPVwiW2NlbnRlclN0eWxlXVwiPlxyXG5cdFx0XHRcdDx1LWljb25cclxuXHRcdFx0XHRcdEBjbGljaz1cImNsb3NlXCJcclxuXHRcdFx0XHRcdHYtaWY9XCJjbG9zZWFibGVcIlxyXG5cdFx0XHRcdFx0Y2xhc3M9XCJ1LWNsb3NlXCJcclxuXHRcdFx0XHRcdDpjbGFzcz1cIlsndS1jbG9zZS0tJyArIGNsb3NlSWNvblBvc11cIlxyXG5cdFx0XHRcdFx0Om5hbWU9XCJjbG9zZUljb25cIlxyXG5cdFx0XHRcdFx0OmNvbG9yPVwiY2xvc2VJY29uQ29sb3JcIlxyXG5cdFx0XHRcdFx0OnNpemU9XCJjbG9zZUljb25TaXplXCJcclxuXHRcdFx0XHQ+PC91LWljb24+XHJcblx0XHRcdFx0PHNjcm9sbC12aWV3IGNsYXNzPVwidS1kcmF3ZXJfX3Njcm9sbC12aWV3XCIgc2Nyb2xsLXk9XCJ0cnVlXCI+XHJcblx0XHRcdFx0XHQ8c2xvdCAvPlxyXG5cdFx0XHRcdDwvc2Nyb2xsLXZpZXc+XHJcblx0XHRcdDwvdmlldz5cclxuXHRcdFx0PHNjcm9sbC12aWV3IGNsYXNzPVwidS1kcmF3ZXJfX3Njcm9sbC12aWV3XCIgc2Nyb2xsLXk9XCJ0cnVlXCIgdi1lbHNlPlxyXG5cdFx0XHRcdDxzbG90IC8+XHJcblx0XHRcdDwvc2Nyb2xsLXZpZXc+XHJcblx0XHRcdDx2aWV3IEB0YXA9XCJjbG9zZVwiIGNsYXNzPVwidS1jbG9zZVwiIDpjbGFzcz1cIlsndS1jbG9zZS0tJyArIGNsb3NlSWNvblBvc11cIj5cclxuXHRcdFx0XHQ8dS1pY29uXHJcblx0XHRcdFx0XHR2LWlmPVwibW9kZSAhPSAnY2VudGVyJyAmJiBjbG9zZWFibGVcIlxyXG5cdFx0XHRcdFx0Om5hbWU9XCJjbG9zZUljb25cIlxyXG5cdFx0XHRcdFx0OmNvbG9yPVwiY2xvc2VJY29uQ29sb3JcIlxyXG5cdFx0XHRcdFx0OnNpemU9XCJjbG9zZUljb25TaXplXCJcclxuXHRcdFx0XHQ+PC91LWljb24+XHJcblx0XHRcdDwvdmlldz5cclxuXHRcdDwvdmlldz5cclxuXHQ8L3ZpZXc+XHJcbjwvdGVtcGxhdGU+XHJcblxyXG48c2NyaXB0PlxyXG4vKipcclxuICogcG9wdXAg5by556qXXHJcbiAqIEBkZXNjcmlwdGlvbiDlvLnlh7rlsYLlrrnlmajvvIznlKjkuo7lsZXnpLrlvLnnqpfjgIHkv6Hmga/mj5DnpLrnrYnlhoXlrrnvvIzmlK/mjIHkuIrjgIHkuIvjgIHlt6bjgIHlj7PlkozkuK3pg6jlvLnlh7rjgILnu4Tku7blj6rmj5DkvpvlrrnlmajvvIzlhoXpg6jlhoXlrrnnlLHnlKjmiLfoh6rlrprkuYlcclxuICogQHR1dG9yaWFsIGh0dHBzOi8vd3d3LnV2aWV3dWkuY29tL2NvbXBvbmVudHMvcG9wdXAuaHRtbFxyXG4gKiBAcHJvcGVydHkge1N0cmluZ30gbW9kZSDlvLnlh7rmlrnlkJHvvIjpu5jorqRsZWZ077yJXHJcbiAqIEBwcm9wZXJ0eSB7Qm9vbGVhbn0gbWFzayDmmK/lkKbmmL7npLrpga7nvanvvIjpu5jorqR0cnVl77yJXHJcbiAqIEBwcm9wZXJ0eSB7U3RyaW5nciB8IE51bWJlcn0gbGVuZ3RoIG1vZGU9bGVmdCB8IOingeWumOe9keivtOaYju+8iOm7mOiupGF1dG/vvIlcclxuICogQHByb3BlcnR5IHtCb29sZWFufSB6b29tIOaYr+WQpuW8gOWQr+e8qeaUvuWKqOeUu++8jOWPquWcqG1vZGXkuLpjZW50ZXLml7bmnInmlYjvvIjpu5jorqR0cnVl77yJXHJcbiAqIEBwcm9wZXJ0eSB7Qm9vbGVhbn0gc2FmZS1hcmVhLWluc2V0LWJvdHRvbSDmmK/lkKblvIDlkK/lupXpg6jlronlhajljLrpgILphY3vvIjpu5jorqRmYWxzZe+8iVxyXG4gKiBAcHJvcGVydHkge0Jvb2xlYW59IG1hc2stY2xvc2UtYWJsZSDngrnlh7vpga7nvanmmK/lkKblj6/ku6XlhbPpl63lvLnlh7rlsYLvvIjpu5jorqR0cnVl77yJXHJcbiAqIEBwcm9wZXJ0eSB7T2JqZWN0fSBjdXN0b20tc3R5bGUg55So5oi36Ieq5a6a5LmJ5qC35byPXHJcbiAqIEBwcm9wZXJ0eSB7U3RyaW5nciB8IE51bWJlcn0gbmVnYXRpdmUtdG9wIOS4remDqOW8ueWHuuaXtu+8jOW+gOS4iuWBj+enu+eahOWAvFxyXG4gKiBAcHJvcGVydHkge051bWJlcnIgfCBTdHJpbmd9IGJvcmRlci1yYWRpdXMg5by556qX5ZyG6KeS5YC877yI6buY6K6kMO+8iVxyXG4gKiBAcHJvcGVydHkge051bWJlcnIgfCBTdHJpbmd9IHotaW5kZXgg5by55Ye65YaF5a6555qEei1pbmRleOWAvO+8iOm7mOiupDEwNzXvvIlcclxuICogQHByb3BlcnR5IHtCb29sZWFufSBjbG9zZWFibGUg5piv5ZCm5pi+56S65YWz6Zet5Zu+5qCH77yI6buY6K6kZmFsc2XvvIlcclxuICogQHByb3BlcnR5IHtTdHJpbmd9IGNsb3NlLWljb24g5YWz6Zet5Zu+5qCH55qE5ZCN56ew77yM5Y+q6IO9dVZpZXfnmoTlhoXnva7lm77moIdcclxuICogQHByb3BlcnR5IHtTdHJpbmd9IGNsb3NlLWljb24tcG9zIOiHquWumuS5ieWFs+mXreWbvuagh+S9jee9ru+8iOm7mOiupHRvcC1yaWdodO+8iVxyXG4gKiBAcHJvcGVydHkge1N0cmluZ30gY2xvc2UtaWNvbi1jb2xvciDlhbPpl63lm77moIfnmoTpopzoibLvvIjpu5jorqQjOTA5Mzk577yJXHJcbiAqIEBwcm9wZXJ0eSB7TnVtYmVyIHwgU3RyaW5nfSBjbG9zZS1pY29uLXNpemUg5YWz6Zet5Zu+5qCH55qE5aSn5bCP77yM5Y2V5L2NcnB477yI6buY6K6kMzDvvIlcclxuICogQGV2ZW50IHtGdW5jdGlvbn0gb3BlbiDlvLnlh7rlsYLmiZPlvIBcclxuICogQGV2ZW50IHtGdW5jdGlvbn0gY2xvc2Ug5by55Ye65bGC5pS26LW3XHJcbiAqIEBleGFtcGxlIDx1LXBvcHVwIHYtbW9kZWw9XCJzaG93XCI+PHZpZXc+5Ye65rek5rOl6ICM5LiN5p+T77yM5r+v5riF5raf6ICM5LiN5aaWPC92aWV3PjwvdS1wb3B1cD5cclxuICovXHJcbmV4cG9ydCBkZWZhdWx0IHtcclxuXHRuYW1lOiAndS1wb3B1cCcsXHJcblx0cHJvcHM6IHtcclxuXHRcdC8qKlxyXG5cdFx0ICog5pi+56S654q25oCBXHJcblx0XHQgKi9cclxuXHRcdHNob3c6IHtcclxuXHRcdFx0dHlwZTogQm9vbGVhbixcclxuXHRcdFx0ZGVmYXVsdDogZmFsc2VcclxuXHRcdH0sXHJcblx0XHQvKipcclxuXHRcdCAqIOW8ueWHuuaWueWQke+8jGxlZnR8cmlnaHR8dG9wfGJvdHRvbXxjZW50ZXJcclxuXHRcdCAqL1xyXG5cdFx0bW9kZToge1xyXG5cdFx0XHR0eXBlOiBTdHJpbmcsXHJcblx0XHRcdGRlZmF1bHQ6ICdsZWZ0J1xyXG5cdFx0fSxcclxuXHRcdC8qKlxyXG5cdFx0ICog5piv5ZCm5pi+56S66YGu572pXHJcblx0XHQgKi9cclxuXHRcdG1hc2s6IHtcclxuXHRcdFx0dHlwZTogQm9vbGVhbixcclxuXHRcdFx0ZGVmYXVsdDogdHJ1ZVxyXG5cdFx0fSxcclxuXHRcdC8vIOaKveWxieeahOWuveW6pihtb2RlPWxlZnR8cmlnaHQp77yM5oiW6ICF6auY5bqmKG1vZGU9dG9wfGJvdHRvbSnvvIzljZXkvY1ycHjvvIzmiJbogIVcImF1dG9cIlxyXG5cdFx0Ly8g5oiW6ICF55m+5YiG5q+UXCI1MCVcIu+8jOihqOekuueUseWGheWuueaSkeW8gOmrmOW6puaIluiAheWuveW6plxyXG5cdFx0bGVuZ3RoOiB7XHJcblx0XHRcdHR5cGU6IFtOdW1iZXIsIFN0cmluZ10sXHJcblx0XHRcdGRlZmF1bHQ6ICdhdXRvJ1xyXG5cdFx0fSxcclxuXHRcdC8vIOaYr+WQpuW8gOWQr+e8qeaUvuWKqOeUu++8jOWPquWcqG1vZGU9Y2VudGVy5pe25pyJ5pWIXHJcblx0XHR6b29tOiB7XHJcblx0XHRcdHR5cGU6IEJvb2xlYW4sXHJcblx0XHRcdGRlZmF1bHQ6IHRydWVcclxuXHRcdH0sXHJcblx0XHQvLyDmmK/lkKblvIDlkK/lupXpg6jlronlhajljLrpgILphY3vvIzlvIDlkK/nmoTor53vvIzkvJrlnKhpUGhvbmVY5py65Z6L5bqV6YOo5re75Yqg5LiA5a6a55qE5YaF6L656LedXHJcblx0XHRzYWZlQXJlYUluc2V0Qm90dG9tOiB7XHJcblx0XHRcdHR5cGU6IEJvb2xlYW4sXHJcblx0XHRcdGRlZmF1bHQ6IGZhbHNlXHJcblx0XHR9LFxyXG5cdFx0Ly8g5piv5ZCm5Y+v5Lul6YCa6L+H54K55Ye76YGu572p6L+b6KGM5YWz6ZetXHJcblx0XHRtYXNrQ2xvc2VBYmxlOiB7XHJcblx0XHRcdHR5cGU6IEJvb2xlYW4sXHJcblx0XHRcdGRlZmF1bHQ6IHRydWVcclxuXHRcdH0sXHJcblx0XHQvLyDnlKjmiLfoh6rlrprkuYnmoLflvI9cclxuXHRcdGN1c3RvbVN0eWxlOiB7XHJcblx0XHRcdHR5cGU6IE9iamVjdCxcclxuXHRcdFx0ZGVmYXVsdCgpIHtcclxuXHRcdFx0XHRyZXR1cm4ge307XHJcblx0XHRcdH1cclxuXHRcdH0sXHJcblx0XHR2YWx1ZToge1xyXG5cdFx0XHR0eXBlOiBCb29sZWFuLFxyXG5cdFx0XHRkZWZhdWx0OiBmYWxzZVxyXG5cdFx0fSxcclxuXHRcdC8vIOatpOS4uuWGhemDqOWPguaVsO+8jOS4jeWcqOaWh+aho+WvueWkluS9v+eUqO+8jOS4uuS6huino+WGs1BpY2tlcuWSjGtleWJvYXJk562J6J6N5ZCI5LqG5by556qX55qE57uE5Lu2XHJcblx0XHQvLyDlr7l2LW1vZGVs5Y+M5ZCR57uR5a6a5aSa5bGC6LCD55So6YCg5oiQ5oql6ZSZ5LiN6IO95L+u5pS5cHJvcHPlgLznmoTpl67pophcclxuXHRcdHBvcHVwOiB7XHJcblx0XHRcdHR5cGU6IEJvb2xlYW4sXHJcblx0XHRcdGRlZmF1bHQ6IHRydWVcclxuXHRcdH0sXHJcblx0XHQvLyDmmL7npLrmmL7npLrlvLnnqpfnmoTlnIbop5LvvIzljZXkvY1ycHhcclxuXHRcdGJvcmRlclJhZGl1czoge1xyXG5cdFx0XHR0eXBlOiBbTnVtYmVyLCBTdHJpbmddLFxyXG5cdFx0XHRkZWZhdWx0OiAwXHJcblx0XHR9LFxyXG5cdFx0ekluZGV4OiB7XHJcblx0XHRcdHR5cGU6IFtOdW1iZXIsIFN0cmluZ10sXHJcblx0XHRcdGRlZmF1bHQ6ICcnXHJcblx0XHR9LFxyXG5cdFx0Ly8g5piv5ZCm5pi+56S65YWz6Zet5Zu+5qCHXHJcblx0XHRjbG9zZWFibGU6IHtcclxuXHRcdFx0dHlwZTogQm9vbGVhbixcclxuXHRcdFx0ZGVmYXVsdDogZmFsc2VcclxuXHRcdH0sXHJcblx0XHQvLyDlhbPpl63lm77moIfnmoTlkI3np7DvvIzlj6rog711Vmlld+eahOWGhee9ruWbvuagh1xyXG5cdFx0Y2xvc2VJY29uOiB7XHJcblx0XHRcdHR5cGU6IFN0cmluZyxcclxuXHRcdFx0ZGVmYXVsdDogJ2Nsb3NlJ1xyXG5cdFx0fSxcclxuXHRcdC8vIOiHquWumuS5ieWFs+mXreWbvuagh+S9jee9ru+8jHRvcC1sZWZ05Li65bem5LiK6KeS77yMdG9wLXJpZ2h05Li65Y+z5LiK6KeS77yMYm90dG9tLWxlZnTkuLrlt6bkuIvop5LvvIxib3R0b20tcmlnaHTkuLrlj7PkuIvop5JcclxuXHRcdGNsb3NlSWNvblBvczoge1xyXG5cdFx0XHR0eXBlOiBTdHJpbmcsXHJcblx0XHRcdGRlZmF1bHQ6ICd0b3AtcmlnaHQnXHJcblx0XHR9LFxyXG5cdFx0Ly8g5YWz6Zet5Zu+5qCH55qE6aKc6ImyXHJcblx0XHRjbG9zZUljb25Db2xvcjoge1xyXG5cdFx0XHR0eXBlOiBTdHJpbmcsXHJcblx0XHRcdGRlZmF1bHQ6ICcjOTA5Mzk5J1xyXG5cdFx0fSxcclxuXHRcdC8vIOWFs+mXreWbvuagh+eahOWkp+Wwj++8jOWNleS9jXJweFxyXG5cdFx0Y2xvc2VJY29uU2l6ZToge1xyXG5cdFx0XHR0eXBlOiBbU3RyaW5nLCBOdW1iZXJdLFxyXG5cdFx0XHRkZWZhdWx0OiAnMzAnXHJcblx0XHR9LFxyXG5cdFx0Ly8g5a695bqm77yM5Y+q5a+55bem77yM5Y+z77yM5Lit6YOo5by55Ye65pe26LW35L2c55So77yM5Y2V5L2NcnB477yM5oiW6ICFXCJhdXRvXCJcclxuXHRcdC8vIOaIluiAheeZvuWIhuavlFwiNTAlXCLvvIzooajnpLrnlLHlhoXlrrnmkpHlvIDpq5jluqbmiJbogIXlrr3luqbvvIzkvJjlhYjnuqfpq5jkuo5sZW5ndGjlj4LmlbBcclxuXHRcdHdpZHRoOiB7XHJcblx0XHRcdHR5cGU6IFN0cmluZyxcclxuXHRcdFx0ZGVmYXVsdDogJydcclxuXHRcdH0sXHJcblx0XHQvLyDpq5jluqbvvIzlj6rlr7nkuIrvvIzkuIvvvIzkuK3pg6jlvLnlh7rml7botbfkvZznlKjvvIzljZXkvY1ycHjvvIzmiJbogIVcImF1dG9cIlxyXG5cdFx0Ly8g5oiW6ICF55m+5YiG5q+UXCI1MCVcIu+8jOihqOekuueUseWGheWuueaSkeW8gOmrmOW6puaIluiAheWuveW6pu+8jOS8mOWFiOe6p+mrmOS6jmxlbmd0aOWPguaVsFxyXG5cdFx0aGVpZ2h0OiB7XHJcblx0XHRcdHR5cGU6IFN0cmluZyxcclxuXHRcdFx0ZGVmYXVsdDogJydcclxuXHRcdH0sXHJcblx0XHQvLyDnu5nkuIDkuKrotJ/nmoRtYXJnaW4tdG9w77yM5b6A5LiK5YGP56e777yM6YG/5YWN5ZKM6ZSu55uY6YeN5ZCI55qE5oOF5Ya177yM5LuF5ZyobW9kZT1jZW50ZXLml7bmnInmlYhcclxuXHRcdG5lZ2F0aXZlVG9wOiB7XHJcblx0XHRcdHR5cGU6IFtTdHJpbmcsIE51bWJlcl0sXHJcblx0XHRcdGRlZmF1bHQ6IDBcclxuXHRcdH0sXHJcblx0XHQvLyDpga7nvannmoTmoLflvI/vvIzkuIDoiKznlKjkuo7kv67mlLnpga7nvannmoTpgI/mmI7luqZcclxuXHRcdG1hc2tDdXN0b21TdHlsZToge1xyXG5cdFx0XHR0eXBlOiBPYmplY3QsXHJcblx0XHRcdGRlZmF1bHQoKSB7XHJcblx0XHRcdFx0cmV0dXJuIHt9XHJcblx0XHRcdH1cclxuXHRcdH0sXHJcblx0XHQvLyDpga7nvanmiZPlvIDmiJbmlLbotbfnmoTliqjnlLvov4fmuKHml7bpl7TvvIzljZXkvY1tc1xyXG5cdFx0ZHVyYXRpb246IHtcclxuXHRcdFx0dHlwZTogW1N0cmluZywgTnVtYmVyXSxcclxuXHRcdFx0ZGVmYXVsdDogMjUwXHJcblx0XHR9XHJcblx0fSxcclxuXHRkYXRhKCkge1xyXG5cdFx0cmV0dXJuIHtcclxuXHRcdFx0dmlzaWJsZVN5bmM6IGZhbHNlLFxyXG5cdFx0XHRzaG93RHJhd2VyOiBmYWxzZSxcclxuXHRcdFx0dGltZXI6IG51bGwsXHJcblx0XHRcdGNsb3NlRnJvbUlubmVyOiBmYWxzZSwgLy8gdmFsdWXnmoTlgLzmlLnlj5jvvIzmmK/lj5HnlJ/lnKjlhoXpg6jov5jmmK/lpJbpg6hcclxuXHRcdH07XHJcblx0fSxcclxuXHRjb21wdXRlZDoge1xyXG5cdFx0Ly8g5qC55o2ubW9kZeeahOS9jee9ru+8jOiuvuWumuWFtuW8ueeql+eahOWuveW6pihtb2RlID0gbGVmdHxyaWdodCnvvIzmiJbogIXpq5jluqYobW9kZSA9IHRvcHxib3R0b20pXHJcblx0XHRzdHlsZSgpIHtcclxuXHRcdFx0bGV0IHN0eWxlID0ge307XHJcblx0XHRcdC8vIOWmguaenOaYr+W3pui+ueaIluiAheS4iui+ueW8ueWHuuaXtu+8jOmcgOimgee7mXRyYW5zbGF0Zeiuvue9ruS4uui0n+WAvO+8jOeUqOS6jumakOiXj1xyXG5cdFx0XHRpZiAodGhpcy5tb2RlID09ICdsZWZ0JyB8fCB0aGlzLm1vZGUgPT0gJ3JpZ2h0Jykge1xyXG5cdFx0XHRcdHN0eWxlID0ge1xyXG5cdFx0XHRcdFx0d2lkdGg6IHRoaXMud2lkdGggPyB0aGlzLmdldFVuaXRWYWx1ZSh0aGlzLndpZHRoKSA6IHRoaXMuZ2V0VW5pdFZhbHVlKHRoaXMubGVuZ3RoKSxcclxuXHRcdFx0XHRcdGhlaWdodDogJzEwMCUnLFxyXG5cdFx0XHRcdFx0dHJhbnNmb3JtOiBgdHJhbnNsYXRlM0QoJHt0aGlzLm1vZGUgPT0gJ2xlZnQnID8gJy0xMDAlJyA6ICcxMDAlJ30sMHB4LDBweClgXHJcblx0XHRcdFx0fTtcclxuXHRcdFx0fSBlbHNlIGlmICh0aGlzLm1vZGUgPT0gJ3RvcCcgfHwgdGhpcy5tb2RlID09ICdib3R0b20nKSB7XHJcblx0XHRcdFx0c3R5bGUgPSB7XHJcblx0XHRcdFx0XHR3aWR0aDogJzEwMCUnLFxyXG5cdFx0XHRcdFx0aGVpZ2h0OiB0aGlzLmhlaWdodCA/IHRoaXMuZ2V0VW5pdFZhbHVlKHRoaXMuaGVpZ2h0KSA6IHRoaXMuZ2V0VW5pdFZhbHVlKHRoaXMubGVuZ3RoKSxcclxuXHRcdFx0XHRcdHRyYW5zZm9ybTogYHRyYW5zbGF0ZTNEKDBweCwke3RoaXMubW9kZSA9PSAndG9wJyA/ICctMTAwJScgOiAnMTAwJSd9LDBweClgXHJcblx0XHRcdFx0fTtcclxuXHRcdFx0fVxyXG5cdFx0XHRzdHlsZS56SW5kZXggPSB0aGlzLnVaaW5kZXg7XHJcblx0XHRcdC8vIOWmguaenOeUqOaIt+iuvue9ruS6hmJvcmRlclJhZGl1c+WAvO+8jOa3u+WKoOW8ueeql+eahOWchuinklxyXG5cdFx0XHRpZiAodGhpcy5ib3JkZXJSYWRpdXMpIHtcclxuXHRcdFx0XHRzd2l0Y2ggKHRoaXMubW9kZSkge1xyXG5cdFx0XHRcdFx0Y2FzZSAnbGVmdCc6XHJcblx0XHRcdFx0XHRcdHN0eWxlLmJvcmRlclJhZGl1cyA9IGAwICR7dGhpcy5ib3JkZXJSYWRpdXN9cnB4ICR7dGhpcy5ib3JkZXJSYWRpdXN9cnB4IDBgO1xyXG5cdFx0XHRcdFx0XHRicmVhaztcclxuXHRcdFx0XHRcdGNhc2UgJ3RvcCc6XHJcblx0XHRcdFx0XHRcdHN0eWxlLmJvcmRlclJhZGl1cyA9IGAwIDAgJHt0aGlzLmJvcmRlclJhZGl1c31ycHggJHt0aGlzLmJvcmRlclJhZGl1c31ycHhgO1xyXG5cdFx0XHRcdFx0XHRicmVhaztcclxuXHRcdFx0XHRcdGNhc2UgJ3JpZ2h0JzpcclxuXHRcdFx0XHRcdFx0c3R5bGUuYm9yZGVyUmFkaXVzID0gYCR7dGhpcy5ib3JkZXJSYWRpdXN9cnB4IDAgMCAke3RoaXMuYm9yZGVyUmFkaXVzfXJweGA7XHJcblx0XHRcdFx0XHRcdGJyZWFrO1xyXG5cdFx0XHRcdFx0Y2FzZSAnYm90dG9tJzpcclxuXHRcdFx0XHRcdFx0c3R5bGUuYm9yZGVyUmFkaXVzID0gYCR7dGhpcy5ib3JkZXJSYWRpdXN9cnB4ICR7dGhpcy5ib3JkZXJSYWRpdXN9cnB4IDAgMGA7XHJcblx0XHRcdFx0XHRcdGJyZWFrO1xyXG5cdFx0XHRcdFx0ZGVmYXVsdDpcclxuXHRcdFx0XHR9XHJcblx0XHRcdFx0Ly8g5LiN5Yqg5Y+v6IO95ZyG6KeS5peg5pWIXHJcblx0XHRcdFx0c3R5bGUub3ZlcmZsb3cgPSAnaGlkZGVuJztcclxuXHRcdFx0fVxyXG5cdFx0XHRpZih0aGlzLmR1cmF0aW9uKSBzdHlsZS50cmFuc2l0aW9uID0gYGFsbCAke3RoaXMuZHVyYXRpb24gLyAxMDAwfXMgbGluZWFyYDtcclxuXHRcdFx0cmV0dXJuIHN0eWxlO1xyXG5cdFx0fSxcclxuXHRcdC8vIOS4remDqOW8ueeql+eahOeJueacieagt+W8j1xyXG5cdFx0Y2VudGVyU3R5bGUoKSB7XHJcblx0XHRcdGxldCBzdHlsZSA9IHt9O1xyXG5cdFx0XHRzdHlsZS53aWR0aCA9IHRoaXMud2lkdGggPyB0aGlzLmdldFVuaXRWYWx1ZSh0aGlzLndpZHRoKSA6IHRoaXMuZ2V0VW5pdFZhbHVlKHRoaXMubGVuZ3RoKTtcclxuXHRcdFx0Ly8g5Lit6YOo5by55Ye655qE5qih5byP77yM5aaC5p6c5rKh5pyJ6K6+572u6auY5bqm77yM5bCx55SoYXV0b+WAvO+8jOeUseWGheWuueaSkeW8gOmrmOW6plxyXG5cdFx0XHRzdHlsZS5oZWlnaHQgPSB0aGlzLmhlaWdodCA/IHRoaXMuZ2V0VW5pdFZhbHVlKHRoaXMuaGVpZ2h0KSA6ICdhdXRvJztcclxuXHRcdFx0c3R5bGUuekluZGV4ID0gdGhpcy51WmluZGV4O1xyXG5cdFx0XHRzdHlsZS5tYXJnaW5Ub3AgPSBgLSR7dGhpcy4kdS5hZGRVbml0KHRoaXMubmVnYXRpdmVUb3ApfWA7XHJcblx0XHRcdGlmICh0aGlzLmJvcmRlclJhZGl1cykge1xyXG5cdFx0XHRcdHN0eWxlLmJvcmRlclJhZGl1cyA9IGAke3RoaXMuYm9yZGVyUmFkaXVzfXJweGA7XHJcblx0XHRcdFx0Ly8g5LiN5Yqg5Y+v6IO95ZyG6KeS5peg5pWIXHJcblx0XHRcdFx0c3R5bGUub3ZlcmZsb3cgPSAnaGlkZGVuJztcclxuXHRcdFx0fVxyXG5cdFx0XHRyZXR1cm4gc3R5bGU7XHJcblx0XHR9LFxyXG5cdFx0Ly8g6K6h566X5pW055CG5ZCO55qEei1pbmRleOWAvFxyXG5cdFx0dVppbmRleCgpIHtcclxuXHRcdFx0cmV0dXJuIHRoaXMuekluZGV4ID8gdGhpcy56SW5kZXggOiB0aGlzLiR1LnpJbmRleC5wb3B1cDtcclxuXHRcdH1cclxuXHR9LFxyXG5cdHdhdGNoOiB7XHJcblx0XHR2YWx1ZSh2YWwpIHtcclxuXHRcdFx0aWYgKHZhbCkge1xyXG5cdFx0XHRcdHRoaXMub3BlbigpO1xyXG5cdFx0XHR9IGVsc2UgaWYoIXRoaXMuY2xvc2VGcm9tSW5uZXIpIHtcclxuXHRcdFx0XHR0aGlzLmNsb3NlKCk7XHJcblx0XHRcdH1cclxuXHRcdFx0dGhpcy5jbG9zZUZyb21Jbm5lciA9IGZhbHNlO1xyXG5cdFx0fVxyXG5cdH0sXHJcblx0bW91bnRlZCgpIHtcclxuXHRcdC8vIOe7hOS7tua4suafk+WujOaIkOaXtu+8jOajgOafpXZhbHVl5piv5ZCm5Li6dHJ1Ze+8jOWmguaenOaYr++8jOW8ueWHunBvcHVwXHJcblx0XHR0aGlzLnZhbHVlICYmIHRoaXMub3BlbigpO1xyXG5cdH0sXHJcbiAgICBtZXRob2RzOiB7XHJcblx0XHQvLyDliKTmlq3kvKDlhaXnmoTlgLzvvIzmmK/lkKbluKbmnInljZXkvY3vvIzlpoLmnpzmsqHmnInvvIzlsLHpu5jorqTnlKhycHjljZXkvY1cclxuXHRcdGdldFVuaXRWYWx1ZSh2YWwpIHtcclxuXHRcdFx0aWYoLyglfHB4fHJweHxhdXRvKSQvLnRlc3QodmFsKSkgcmV0dXJuIHZhbDtcclxuXHRcdFx0ZWxzZSByZXR1cm4gdmFsICsgJ3JweCdcclxuXHRcdH0sXHJcblx0XHQvLyDpga7nvanooqvngrnlh7tcclxuXHRcdG1hc2tDbGljaygpIHtcclxuXHRcdFx0dGhpcy5jbG9zZSgpO1xyXG5cdFx0fSxcclxuXHRcdGNsb3NlKCkge1xyXG5cdFx0XHQvLyDmoIforrDlhbPpl63mmK/lhoXpg6jlj5HnlJ/nmoTvvIzlkKbliJnkv67mlLnkuoZ2YWx1ZeWAvO+8jOWvvOiHtHdhdGNo5Lit5a+5dmFsdWXmo4DmtYvvvIzlr7zoh7Tlho3miafooYzkuIDpgY1jbG9zZVxyXG5cdFx0XHQvLyDpgKDmiJBAY2xvc2Xkuovku7bop6blj5HkuKTmrKFcclxuXHRcdFx0dGhpcy5jbG9zZUZyb21Jbm5lciA9IHRydWU7XHJcblx0XHRcdHRoaXMuY2hhbmdlKCdzaG93RHJhd2VyJywgJ3Zpc2libGVTeW5jJywgZmFsc2UpO1xyXG5cdFx0fSxcclxuXHRcdC8vIOS4remDqOW8ueWHuuaXtu+8jOmcgOimgS51LWRyYXdlci1jb250ZW505bCG5bGF5Lit5YaF5a6577yM5q2k5YWD57Sg5Lya6ZO65ruh5bGP5bmV77yM54K55Ye76ZyA6KaB5YWz6Zet5by556qXXHJcblx0XHQvLyDorqnlhbblj6rlnKhtb2RlPWNlbnRlcuaXtui1t+S9nOeUqFxyXG5cdFx0bW9kZUNlbnRlckNsb3NlKG1vZGUpIHtcclxuXHRcdFx0aWYgKG1vZGUgIT0gJ2NlbnRlcicgfHwgIXRoaXMubWFza0Nsb3NlQWJsZSkgcmV0dXJuO1xyXG5cdFx0XHR0aGlzLmNsb3NlKCk7XHJcblx0XHR9LFxyXG5cdFx0b3BlbigpIHtcclxuXHRcdFx0dGhpcy5jaGFuZ2UoJ3Zpc2libGVTeW5jJywgJ3Nob3dEcmF3ZXInLCB0cnVlKTtcclxuXHRcdH0sXHJcblx0XHQvLyDmraTlpITnmoTljp/nkIbmmK/vvIzlhbPpl63ml7blhYjpgJrov4fliqjnlLvpmpDol4/lvLnnqpflkozpga7nvanvvIzlho3np7vpmaTmlbTkuKrnu4Tku7ZcclxuXHRcdC8vIOaJk+W8gOaXtu+8jOWFiOa4suafk+e7hOS7tu+8jOW7tuaXtuS4gOWumuaXtumXtOWGjeiuqemBrue9qeWSjOW8ueeql+eahOWKqOeUu+i1t+S9nOeUqFxyXG5cdFx0Y2hhbmdlKHBhcmFtMSwgcGFyYW0yLCBzdGF0dXMpIHtcclxuXHRcdFx0Ly8g5aaC5p6cdGhpcy5wb3B1cOS4umZhbHNl77yM5oSP5ZGz552A5Li6cGlja2Vy77yMYWN0aW9uc2hlZXTnrYnnu4Tku7bosIPnlKjkuoZwb3B1cOe7hOS7tlxyXG5cdFx0XHRpZiAodGhpcy5wb3B1cCA9PSB0cnVlKSB7XHJcblx0XHRcdFx0dGhpcy4kZW1pdCgnaW5wdXQnLCBzdGF0dXMpO1xyXG5cdFx0XHR9XHJcblx0XHRcdHRoaXNbcGFyYW0xXSA9IHN0YXR1cztcclxuXHRcdFx0aWYoc3RhdHVzKSB7XHJcblx0XHRcdFx0Ly8gI2lmZGVmIEg1IHx8IE1QXHJcblx0XHRcdFx0dGhpcy50aW1lciA9IHNldFRpbWVvdXQoKCkgPT4ge1xyXG5cdFx0XHRcdFx0dGhpc1twYXJhbTJdID0gc3RhdHVzO1xyXG5cdFx0XHRcdFx0dGhpcy4kZW1pdChzdGF0dXMgPyAnb3BlbicgOiAnY2xvc2UnKTtcclxuXHRcdFx0XHR9LCA1MCk7XHJcblx0XHRcdFx0Ly8gI2VuZGlmXHJcblx0XHRcdFx0Ly8gI2lmbmRlZiBINSB8fCBNUFxyXG5cdFx0XHRcdHRoaXMuJG5leHRUaWNrKCgpID0+IHtcclxuXHRcdFx0XHRcdHRoaXNbcGFyYW0yXSA9IHN0YXR1cztcclxuXHRcdFx0XHRcdHRoaXMuJGVtaXQoc3RhdHVzID8gJ29wZW4nIDogJ2Nsb3NlJyk7XHJcblx0XHRcdFx0fSlcclxuXHRcdFx0XHQvLyAjZW5kaWZcclxuXHRcdFx0fSBlbHNlIHtcclxuXHRcdFx0XHR0aGlzLnRpbWVyID0gc2V0VGltZW91dCgoKSA9PiB7XHJcblx0XHRcdFx0XHR0aGlzW3BhcmFtMl0gPSBzdGF0dXM7XHJcblx0XHRcdFx0XHR0aGlzLiRlbWl0KHN0YXR1cyA/ICdvcGVuJyA6ICdjbG9zZScpO1xyXG5cdFx0XHRcdH0sIHRoaXMuZHVyYXRpb24pO1xyXG5cdFx0XHR9XHJcblx0XHR9XHJcblx0fVxyXG59O1xyXG48L3NjcmlwdD5cclxuXHJcbjxzdHlsZSBzY29wZWQgbGFuZz1cInNjc3NcIj5cclxuQGltcG9ydCBcIi4uLy4uL2xpYnMvY3NzL3N0eWxlLmNvbXBvbmVudHMuc2Nzc1wiO1xyXG5cclxuLnUtZHJhd2VyIHtcclxuXHQvKiAjaWZuZGVmIEFQUC1OVlVFICovXHJcblx0ZGlzcGxheTogYmxvY2s7XHJcblx0LyogI2VuZGlmICovXHJcblx0cG9zaXRpb246IGZpeGVkO1xyXG5cdHRvcDogMDtcclxuXHRsZWZ0OiAwO1xyXG5cdHJpZ2h0OiAwO1xyXG5cdGJvdHRvbTogMDtcclxuXHRvdmVyZmxvdzogaGlkZGVuO1xyXG59XHJcblxyXG4udS1kcmF3ZXItY29udGVudCB7XHJcblx0LyogI2lmbmRlZiBBUFAtTlZVRSAqL1xyXG5cdGRpc3BsYXk6IGJsb2NrO1xyXG5cdC8qICNlbmRpZiAqL1xyXG5cdHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuXHR6LWluZGV4OiAxMDAzO1xyXG5cdHRyYW5zaXRpb246IGFsbCAwLjI1cyBsaW5lYXI7XHJcbn1cclxuXHJcbi51LWRyYXdlcl9fc2Nyb2xsLXZpZXcge1xyXG5cdHdpZHRoOiAxMDAlO1xyXG5cdGhlaWdodDogMTAwJTtcclxufVxyXG5cclxuLnUtZHJhd2VyLWxlZnQge1xyXG5cdHRvcDogMDtcclxuXHRib3R0b206IDA7XHJcblx0bGVmdDogMDtcclxuXHRiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmZmZmO1xyXG59XHJcblxyXG4udS1kcmF3ZXItcmlnaHQge1xyXG5cdHJpZ2h0OiAwO1xyXG5cdHRvcDogMDtcclxuXHRib3R0b206IDA7XHJcblx0YmFja2dyb3VuZC1jb2xvcjogI2ZmZmZmZjtcclxufVxyXG5cclxuLnUtZHJhd2VyLXRvcCB7XHJcblx0dG9wOiAwO1xyXG5cdGxlZnQ6IDA7XHJcblx0cmlnaHQ6IDA7XHJcblx0YmFja2dyb3VuZC1jb2xvcjogI2ZmZmZmZjtcclxufVxyXG5cclxuLnUtZHJhd2VyLWJvdHRvbSB7XHJcblx0Ym90dG9tOiAwO1xyXG5cdGxlZnQ6IDA7XHJcblx0cmlnaHQ6IDA7XHJcblx0YmFja2dyb3VuZC1jb2xvcjogI2ZmZmZmZjtcclxufVxyXG5cclxuLnUtZHJhd2VyLWNlbnRlciB7XHJcblx0QGluY2x1ZGUgdnVlLWZsZXg7XHJcblx0ZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuXHRib3R0b206IDA7XHJcblx0bGVmdDogMDtcclxuXHRyaWdodDogMDtcclxuXHR0b3A6IDA7XHJcblx0anVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcblx0YWxpZ24taXRlbXM6IGNlbnRlcjtcclxuXHRvcGFjaXR5OiAwO1xyXG5cdHotaW5kZXg6IDk5OTk5O1xyXG59XHJcblxyXG4udS1tb2RlLWNlbnRlci1ib3gge1xyXG5cdG1pbi13aWR0aDogMTAwcnB4O1xyXG5cdG1pbi1oZWlnaHQ6IDEwMHJweDtcclxuXHQvKiAjaWZuZGVmIEFQUC1OVlVFICovXHJcblx0ZGlzcGxheTogYmxvY2s7XHJcblx0LyogI2VuZGlmICovXHJcblx0cG9zaXRpb246IHJlbGF0aXZlO1xyXG5cdGJhY2tncm91bmQtY29sb3I6ICNmZmZmZmY7XHJcbn1cclxuXHJcbi51LWRyYXdlci1jb250ZW50LXZpc2libGUudS1kcmF3ZXItY2VudGVyIHtcclxuXHR0cmFuc2Zvcm06IHNjYWxlKDEpO1xyXG5cdG9wYWNpdHk6IDE7XHJcbn1cclxuXHJcbi51LWFuaW1hdGlvbi16b29tIHtcclxuXHR0cmFuc2Zvcm06IHNjYWxlKDEuMTUpO1xyXG59XHJcblxyXG4udS1kcmF3ZXItY29udGVudC12aXNpYmxlIHtcclxuXHR0cmFuc2Zvcm06IHRyYW5zbGF0ZTNEKDBweCwgMHB4LCAwcHgpICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi51LWNsb3NlIHtcclxuXHRwb3NpdGlvbjogYWJzb2x1dGU7XHJcblx0ei1pbmRleDogMztcclxufVxyXG5cclxuLnUtY2xvc2UtLXRvcC1sZWZ0IHtcclxuXHR0b3A6IDMwcnB4O1xyXG5cdGxlZnQ6IDMwcnB4O1xyXG59XHJcblxyXG4udS1jbG9zZS0tdG9wLXJpZ2h0IHtcclxuXHR0b3A6IDMwcnB4O1xyXG5cdHJpZ2h0OiAzMHJweDtcclxufVxyXG5cclxuLnUtY2xvc2UtLWJvdHRvbS1sZWZ0IHtcclxuXHRib3R0b206IDMwcnB4O1xyXG5cdGxlZnQ6IDMwcnB4O1xyXG59XHJcblxyXG4udS1jbG9zZS0tYm90dG9tLXJpZ2h0IHtcclxuXHRyaWdodDogMzBycHg7XHJcblx0Ym90dG9tOiAzMHJweDtcclxufVxyXG48L3N0eWxlPlxyXG4iLCJpbXBvcnQgbW9kIGZyb20gXCItIUQ6XFxcXEhCdWlsZGVyWFxcXFxwbHVnaW5zXFxcXHVuaWFwcC1jbGlcXFxcbm9kZV9tb2R1bGVzXFxcXG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luXFxcXGRpc3RcXFxcbG9hZGVyLmpzPz9yZWYtLTgtb25lT2YtMS0wIUQ6XFxcXEhCdWlsZGVyWFxcXFxwbHVnaW5zXFxcXHVuaWFwcC1jbGlcXFxcbm9kZV9tb2R1bGVzXFxcXGNzcy1sb2FkZXJcXFxcZGlzdFxcXFxjanMuanM/P3JlZi0tOC1vbmVPZi0xLTEhRDpcXFxcSEJ1aWxkZXJYXFxcXHBsdWdpbnNcXFxcdW5pYXBwLWNsaVxcXFxub2RlX21vZHVsZXNcXFxcQGRjbG91ZGlvXFxcXHZ1ZS1jbGktcGx1Z2luLXVuaVxcXFxwYWNrYWdlc1xcXFx2dWUtbG9hZGVyXFxcXGxpYlxcXFxsb2FkZXJzXFxcXHN0eWxlUG9zdExvYWRlci5qcyFEOlxcXFxIQnVpbGRlclhcXFxccGx1Z2luc1xcXFx1bmlhcHAtY2xpXFxcXG5vZGVfbW9kdWxlc1xcXFxAZGNsb3VkaW9cXFxcdnVlLWNsaS1wbHVnaW4tdW5pXFxcXHBhY2thZ2VzXFxcXHdlYnBhY2stcHJlcHJvY2Vzcy1sb2FkZXJcXFxcaW5kZXguanM/P3JlZi0tOC1vbmVPZi0xLTIhRDpcXFxcSEJ1aWxkZXJYXFxcXHBsdWdpbnNcXFxcdW5pYXBwLWNsaVxcXFxub2RlX21vZHVsZXNcXFxccG9zdGNzcy1sb2FkZXJcXFxcc3JjXFxcXGluZGV4LmpzPz9yZWYtLTgtb25lT2YtMS0zIUQ6XFxcXEhCdWlsZGVyWFxcXFxwbHVnaW5zXFxcXHVuaWFwcC1jbGlcXFxcbm9kZV9tb2R1bGVzXFxcXHNhc3MtbG9hZGVyXFxcXGRpc3RcXFxcY2pzLmpzPz9yZWYtLTgtb25lT2YtMS00IUQ6XFxcXEhCdWlsZGVyWFxcXFxwbHVnaW5zXFxcXHVuaWFwcC1jbGlcXFxcbm9kZV9tb2R1bGVzXFxcXEBkY2xvdWRpb1xcXFx2dWUtY2xpLXBsdWdpbi11bmlcXFxccGFja2FnZXNcXFxcd2VicGFjay1wcmVwcm9jZXNzLWxvYWRlclxcXFxpbmRleC5qcz8/cmVmLS04LW9uZU9mLTEtNSFEOlxcXFxIQnVpbGRlclhcXFxccGx1Z2luc1xcXFx1bmlhcHAtY2xpXFxcXG5vZGVfbW9kdWxlc1xcXFxAZGNsb3VkaW9cXFxcdnVlLWNsaS1wbHVnaW4tdW5pXFxcXHBhY2thZ2VzXFxcXHZ1ZS1sb2FkZXJcXFxcbGliXFxcXGluZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhRDpcXFxcSEJ1aWxkZXJYXFxcXHBsdWdpbnNcXFxcdW5pYXBwLWNsaVxcXFxub2RlX21vZHVsZXNcXFxcQGRjbG91ZGlvXFxcXHdlYnBhY2stdW5pLW1wLWxvYWRlclxcXFxsaWJcXFxcc3R5bGUuanMhLi91LXBvcHVwLnZ1ZT92dWUmdHlwZT1zdHlsZSZpbmRleD0wJmlkPTE3YmVjYWVhJnNjb3BlZD10cnVlJmxhbmc9c2NzcyZcIjsgZXhwb3J0IGRlZmF1bHQgbW9kOyBleHBvcnQgKiBmcm9tIFwiLSFEOlxcXFxIQnVpbGRlclhcXFxccGx1Z2luc1xcXFx1bmlhcHAtY2xpXFxcXG5vZGVfbW9kdWxlc1xcXFxtaW5pLWNzcy1leHRyYWN0LXBsdWdpblxcXFxkaXN0XFxcXGxvYWRlci5qcz8/cmVmLS04LW9uZU9mLTEtMCFEOlxcXFxIQnVpbGRlclhcXFxccGx1Z2luc1xcXFx1bmlhcHAtY2xpXFxcXG5vZGVfbW9kdWxlc1xcXFxjc3MtbG9hZGVyXFxcXGRpc3RcXFxcY2pzLmpzPz9yZWYtLTgtb25lT2YtMS0xIUQ6XFxcXEhCdWlsZGVyWFxcXFxwbHVnaW5zXFxcXHVuaWFwcC1jbGlcXFxcbm9kZV9tb2R1bGVzXFxcXEBkY2xvdWRpb1xcXFx2dWUtY2xpLXBsdWdpbi11bmlcXFxccGFja2FnZXNcXFxcdnVlLWxvYWRlclxcXFxsaWJcXFxcbG9hZGVyc1xcXFxzdHlsZVBvc3RMb2FkZXIuanMhRDpcXFxcSEJ1aWxkZXJYXFxcXHBsdWdpbnNcXFxcdW5pYXBwLWNsaVxcXFxub2RlX21vZHVsZXNcXFxcQGRjbG91ZGlvXFxcXHZ1ZS1jbGktcGx1Z2luLXVuaVxcXFxwYWNrYWdlc1xcXFx3ZWJwYWNrLXByZXByb2Nlc3MtbG9hZGVyXFxcXGluZGV4LmpzPz9yZWYtLTgtb25lT2YtMS0yIUQ6XFxcXEhCdWlsZGVyWFxcXFxwbHVnaW5zXFxcXHVuaWFwcC1jbGlcXFxcbm9kZV9tb2R1bGVzXFxcXHBvc3Rjc3MtbG9hZGVyXFxcXHNyY1xcXFxpbmRleC5qcz8/cmVmLS04LW9uZU9mLTEtMyFEOlxcXFxIQnVpbGRlclhcXFxccGx1Z2luc1xcXFx1bmlhcHAtY2xpXFxcXG5vZGVfbW9kdWxlc1xcXFxzYXNzLWxvYWRlclxcXFxkaXN0XFxcXGNqcy5qcz8/cmVmLS04LW9uZU9mLTEtNCFEOlxcXFxIQnVpbGRlclhcXFxccGx1Z2luc1xcXFx1bmlhcHAtY2xpXFxcXG5vZGVfbW9kdWxlc1xcXFxAZGNsb3VkaW9cXFxcdnVlLWNsaS1wbHVnaW4tdW5pXFxcXHBhY2thZ2VzXFxcXHdlYnBhY2stcHJlcHJvY2Vzcy1sb2FkZXJcXFxcaW5kZXguanM/P3JlZi0tOC1vbmVPZi0xLTUhRDpcXFxcSEJ1aWxkZXJYXFxcXHBsdWdpbnNcXFxcdW5pYXBwLWNsaVxcXFxub2RlX21vZHVsZXNcXFxcQGRjbG91ZGlvXFxcXHZ1ZS1jbGktcGx1Z2luLXVuaVxcXFxwYWNrYWdlc1xcXFx2dWUtbG9hZGVyXFxcXGxpYlxcXFxpbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIUQ6XFxcXEhCdWlsZGVyWFxcXFxwbHVnaW5zXFxcXHVuaWFwcC1jbGlcXFxcbm9kZV9tb2R1bGVzXFxcXEBkY2xvdWRpb1xcXFx3ZWJwYWNrLXVuaS1tcC1sb2FkZXJcXFxcbGliXFxcXHN0eWxlLmpzIS4vdS1wb3B1cC52dWU/dnVlJnR5cGU9c3R5bGUmaW5kZXg9MCZpZD0xN2JlY2FlYSZzY29wZWQ9dHJ1ZSZsYW5nPXNjc3MmXCIiLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW5cbiAgICBpZihtb2R1bGUuaG90KSB7XG4gICAgICAvLyAxNjMwOTM1MDAwODYxXG4gICAgICB2YXIgY3NzUmVsb2FkID0gcmVxdWlyZShcIkQ6L0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL21pbmktY3NzLWV4dHJhY3QtcGx1Z2luL2Rpc3QvaG1yL2hvdE1vZHVsZVJlcGxhY2VtZW50LmpzXCIpKG1vZHVsZS5pZCwge1wiaG1yXCI6dHJ1ZSxcInB1YmxpY1BhdGhcIjpcIi4uLy4uL1wiLFwibG9jYWxzXCI6ZmFsc2V9KTtcbiAgICAgIG1vZHVsZS5ob3QuZGlzcG9zZShjc3NSZWxvYWQpO1xuICAgICAgbW9kdWxlLmhvdC5hY2NlcHQodW5kZWZpbmVkLCBjc3NSZWxvYWQpO1xuICAgIH1cbiAgIl0sInNvdXJjZVJvb3QiOiIifQ==
;(global["webpackJsonp"] = global["webpackJsonp"] || []).push([
    'uview-ui/components/u-popup/u-popup-create-component',
    {
        'uview-ui/components/u-popup/u-popup-create-component':(function(module, exports, __webpack_require__){
            __webpack_require__('1')['createComponent'](__webpack_require__(227))
        })
    },
    [['uview-ui/components/u-popup/u-popup-create-component']]
]);
