(global["webpackJsonp"] = global["webpackJsonp"] || []).push([["uview-ui/components/u-dropdown/u-dropdown"],{

/***/ 262:
/*!*****************************************************************************!*\
  !*** E:/HBuilder Project/优惠券/uview-ui/components/u-dropdown/u-dropdown.vue ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _u_dropdown_vue_vue_type_template_id_0340bb60_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./u-dropdown.vue?vue&type=template&id=0340bb60&scoped=true& */ 263);
/* harmony import */ var _u_dropdown_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./u-dropdown.vue?vue&type=script&lang=js& */ 265);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _u_dropdown_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _u_dropdown_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var _u_dropdown_vue_vue_type_style_index_0_id_0340bb60_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./u-dropdown.vue?vue&type=style&index=0&id=0340bb60&scoped=true&lang=scss& */ 267);
/* harmony import */ var _D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/runtime/componentNormalizer.js */ 10);

var renderjs





/* normalize component */

var component = Object(_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _u_dropdown_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _u_dropdown_vue_vue_type_template_id_0340bb60_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _u_dropdown_vue_vue_type_template_id_0340bb60_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "0340bb60",
  null,
  false,
  _u_dropdown_vue_vue_type_template_id_0340bb60_scoped_true___WEBPACK_IMPORTED_MODULE_0__["components"],
  renderjs
)

component.options.__file = "uview-ui/components/u-dropdown/u-dropdown.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ 263:
/*!************************************************************************************************************************!*\
  !*** E:/HBuilder Project/优惠券/uview-ui/components/u-dropdown/u-dropdown.vue?vue&type=template&id=0340bb60&scoped=true& ***!
  \************************************************************************************************************************/
/*! exports provided: render, staticRenderFns, recyclableRender, components */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_16_0_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_u_dropdown_vue_vue_type_template_id_0340bb60_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--16-0!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/template.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/page-meta.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!./u-dropdown.vue?vue&type=template&id=0340bb60&scoped=true& */ 264);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_16_0_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_u_dropdown_vue_vue_type_template_id_0340bb60_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_16_0_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_u_dropdown_vue_vue_type_template_id_0340bb60_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "recyclableRender", function() { return _D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_16_0_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_u_dropdown_vue_vue_type_template_id_0340bb60_scoped_true___WEBPACK_IMPORTED_MODULE_0__["recyclableRender"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "components", function() { return _D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_16_0_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_u_dropdown_vue_vue_type_template_id_0340bb60_scoped_true___WEBPACK_IMPORTED_MODULE_0__["components"]; });



/***/ }),

/***/ 264:
/*!************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--16-0!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/template.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/page-meta.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!E:/HBuilder Project/优惠券/uview-ui/components/u-dropdown/u-dropdown.vue?vue&type=template&id=0340bb60&scoped=true& ***!
  \************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
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
  var g0 = _vm.$u.addUnit(_vm.height)
  var g1 = _vm.$u.addUnit(_vm.titleSize)
  var g2 = _vm.$u.addUnit(_vm.menuIconSize)

  var s0 = _vm.__get_style([
    _vm.contentStyle,
    {
      transition: "opacity " + _vm.duration / 1000 + "s linear",
      top: _vm.$u.addUnit(_vm.height),
      height: _vm.contentHeight + "px"
    }
  ])

  var s1 = _vm.__get_style([_vm.popupStyle])

  _vm.$mp.data = Object.assign(
    {},
    {
      $root: {
        g0: g0,
        g1: g1,
        g2: g2,
        s0: s0,
        s1: s1
      }
    }
  )
}
var recyclableRender = false
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ 265:
/*!******************************************************************************************************!*\
  !*** E:/HBuilder Project/优惠券/uview-ui/components/u-dropdown/u-dropdown.vue?vue&type=script&lang=js& ***!
  \******************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _D_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_u_dropdown_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!./node_modules/babel-loader/lib!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--12-1!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/script.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!./u-dropdown.vue?vue&type=script&lang=js& */ 266);
/* harmony import */ var _D_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_u_dropdown_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_D_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_u_dropdown_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _D_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_u_dropdown_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _D_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_u_dropdown_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_D_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_u_dropdown_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ 266:
/*!*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--12-1!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/script.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!E:/HBuilder Project/优惠券/uview-ui/components/u-dropdown/u-dropdown.vue?vue&type=script&lang=js& ***!
  \*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
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

/**
 * dropdown 下拉菜单
 * @description 该组件一般用于向下展开菜单，同时可切换多个选项卡的场景
 * @tutorial http://uviewui.com/components/dropdown.html
 * @property {String} active-color 标题和选项卡选中的颜色（默认#2979ff）
 * @property {String} inactive-color 标题和选项卡未选中的颜色（默认#606266）
 * @property {Boolean} close-on-click-mask 点击遮罩是否关闭菜单（默认true）
 * @property {Boolean} close-on-click-self 点击当前激活项标题是否关闭菜单（默认true）
 * @property {String | Number} duration 选项卡展开和收起的过渡时间，单位ms（默认300）
 * @property {String | Number} height 标题菜单的高度，单位任意（默认80）
 * @property {String | Number} border-radius 菜单展开内容下方的圆角值，单位任意（默认0）
 * @property {Boolean} border-bottom 标题菜单是否显示下边框（默认false）
 * @property {String | Number} title-size 标题的字体大小，单位任意，数值默认为rpx单位（默认28）
 * @event {Function} open 下拉菜单被打开时触发
 * @event {Function} close 下拉菜单被关闭时触发
 * @example <u-dropdown></u-dropdown>
 */var _default =
{
  name: 'u-dropdown',
  props: {
    // 菜单标题和选项的激活态颜色
    activeColor: {
      type: String,
      default: '#2979ff' },

    // 菜单标题和选项的未激活态颜色
    inactiveColor: {
      type: String,
      default: '#606266' },

    // 点击遮罩是否关闭菜单
    closeOnClickMask: {
      type: Boolean,
      default: true },

    // 点击当前激活项标题是否关闭菜单
    closeOnClickSelf: {
      type: Boolean,
      default: true },

    // 过渡时间
    duration: {
      type: [Number, String],
      default: 300 },

    // 标题菜单的高度，单位任意，数值默认为rpx单位
    height: {
      type: [Number, String],
      default: 80 },

    // 是否显示下边框
    borderBottom: {
      type: Boolean,
      default: false },

    // 标题的字体大小
    titleSize: {
      type: [Number, String],
      default: 28 },

    // 下拉出来的内容部分的圆角值
    borderRadius: {
      type: [Number, String],
      default: 0 },

    // 菜单右侧的icon图标
    menuIcon: {
      type: String,
      default: 'arrow-down' },

    // 菜单右侧图标的大小
    menuIconSize: {
      type: [Number, String],
      default: 26 } },


  data: function data() {
    return {
      showDropdown: true, // 是否打开下来菜单,
      menuList: [], // 显示的菜单
      active: false, // 下拉菜单的状态
      // 当前是第几个菜单处于激活状态，小程序中此处不能写成false或者""，否则后续将current赋值为0，
      // 无能的TX没有使用===而是使用==判断，导致程序认为前后二者没有变化，从而不会触发视图更新
      current: 99999,
      // 外层内容的样式，初始时处于底层，且透明
      contentStyle: {
        zIndex: -1,
        opacity: 0 },

      // 让某个菜单保持高亮的状态
      highlightIndex: 99999,
      contentHeight: 0 };

  },
  computed: {
    // 下拉出来部分的样式
    popupStyle: function popupStyle() {
      var style = {};
      // 进行Y轴位移，展开状态时，恢复原位。收齐状态时，往上位移100%，进行隐藏
      style.transform = "translateY(".concat(this.active ? 0 : '-100%', ")");
      style['transition-duration'] = this.duration / 1000 + 's';
      style.borderRadius = "0 0 ".concat(this.$u.addUnit(this.borderRadius), " ").concat(this.$u.addUnit(this.borderRadius));
      return style;
    } },

  created: function created() {
    // 引用所有子组件(u-dropdown-item)的this，不能在data中声明变量，否则在微信小程序会造成循环引用而报错
    this.children = [];
  },
  mounted: function mounted() {
    this.getContentHeight();
  },
  methods: {
    init: function init() {
      // 当某个子组件内容变化时，触发父组件的init，父组件再让每一个子组件重新初始化一遍
      // 以保证数据的正确性
      this.menuList = [];
      this.children.map(function (child) {
        child.init();
      });
    },
    // 点击菜单
    menuClick: function menuClick(index) {var _this = this;
      // 判断是否被禁用
      if (this.menuList[index].disabled) return;
      // 如果点击时的索引和当前激活项索引相同，意味着点击了激活项，需要收起下拉菜单
      if (index === this.current && this.closeOnClickSelf) {
        this.close();
        // 等动画结束后，再移除下拉菜单中的内容，否则直接移除，也就没有下拉菜单收起的效果了
        setTimeout(function () {
          _this.children[index].active = false;
        }, this.duration);
        return;
      }
      this.open(index);
    },
    // 打开下拉菜单
    open: function open(index) {
      // 重置高亮索引，否则会造成多个菜单同时高亮
      // this.highlightIndex = 9999;
      // 展开时，设置下拉内容的样式
      this.contentStyle = {
        zIndex: 11 };

      // 标记展开状态以及当前展开项的索引
      this.active = true;
      this.current = index;
      // 历遍所有的子元素，将索引匹配的项标记为激活状态，因为子元素是通过v-if控制切换的
      // 之所以不是因display: none，是因为nvue没有display这个属性
      this.children.map(function (val, idx) {
        val.active = index == idx ? true : false;
      });
      this.$emit('open', this.current);
    },
    // 设置下拉菜单处于收起状态
    close: function close() {
      this.$emit('close', this.current);
      // 设置为收起状态，同时current归位，设置为空字符串
      this.active = false;
      this.current = 99999;
      // 下拉内容的样式进行调整，不透明度设置为0
      this.contentStyle = {
        zIndex: -1,
        opacity: 0 };

    },
    // 点击遮罩
    maskClick: function maskClick() {
      // 如果不允许点击遮罩，直接返回
      if (!this.closeOnClickMask) return;
      this.close();
    },
    // 外部手动设置某个菜单高亮
    highlight: function highlight() {var index = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : undefined;
      this.highlightIndex = index !== undefined ? index : 99999;
    },
    // 获取下拉菜单内容的高度
    getContentHeight: function getContentHeight() {var _this2 = this;
      // 这里的原理为，因为dropdown组件是相对定位的，它的下拉出来的内容，必须给定一个高度
      // 才能让遮罩占满菜单一下，直到屏幕底部的高度
      // this.$u.sys()为uView封装的获取设备信息的方法
      var windowHeight = this.$u.sys().windowHeight;
      this.$uGetRect('.u-dropdown__menu').then(function (res) {
        // 这里获取的是dropdown的尺寸，在H5上，uniapp获取尺寸是有bug的(以前提出修复过，后来又出现了此bug，目前hx2.8.11版本)
        // H5端bug表现为元素尺寸的top值为导航栏底部到到元素的上边沿的距离，但是元素的bottom值确是导航栏顶部到元素底部的距离
        // 二者是互相矛盾的，本质原因是H5端导航栏非原生，uni的开发者大意造成
        // 这里取菜单栏的botton值合理的，不能用res.top，否则页面会造成滚动
        _this2.contentHeight = windowHeight - res.bottom;
      });
    } } };exports.default = _default;

/***/ }),

/***/ 267:
/*!***************************************************************************************************************************************!*\
  !*** E:/HBuilder Project/优惠券/uview-ui/components/u-dropdown/u-dropdown.vue?vue&type=style&index=0&id=0340bb60&scoped=true&lang=scss& ***!
  \***************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _D_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_D_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_2_D_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_3_D_HBuilderX_plugins_uniapp_cli_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_4_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_5_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_u_dropdown_vue_vue_type_style_index_0_id_0340bb60_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!./node_modules/mini-css-extract-plugin/dist/loader.js??ref--8-oneOf-1-0!./node_modules/css-loader/dist/cjs.js??ref--8-oneOf-1-1!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--8-oneOf-1-2!./node_modules/postcss-loader/src??ref--8-oneOf-1-3!./node_modules/sass-loader/dist/cjs.js??ref--8-oneOf-1-4!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--8-oneOf-1-5!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!./u-dropdown.vue?vue&type=style&index=0&id=0340bb60&scoped=true&lang=scss& */ 268);
/* harmony import */ var _D_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_D_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_2_D_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_3_D_HBuilderX_plugins_uniapp_cli_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_4_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_5_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_u_dropdown_vue_vue_type_style_index_0_id_0340bb60_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_D_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_D_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_2_D_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_3_D_HBuilderX_plugins_uniapp_cli_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_4_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_5_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_u_dropdown_vue_vue_type_style_index_0_id_0340bb60_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _D_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_D_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_2_D_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_3_D_HBuilderX_plugins_uniapp_cli_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_4_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_5_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_u_dropdown_vue_vue_type_style_index_0_id_0340bb60_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _D_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_D_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_2_D_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_3_D_HBuilderX_plugins_uniapp_cli_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_4_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_5_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_u_dropdown_vue_vue_type_style_index_0_id_0340bb60_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_D_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_D_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_2_D_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_3_D_HBuilderX_plugins_uniapp_cli_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_4_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_5_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_u_dropdown_vue_vue_type_style_index_0_id_0340bb60_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ 268:
/*!*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/mini-css-extract-plugin/dist/loader.js??ref--8-oneOf-1-0!./node_modules/css-loader/dist/cjs.js??ref--8-oneOf-1-1!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--8-oneOf-1-2!./node_modules/postcss-loader/src??ref--8-oneOf-1-3!./node_modules/sass-loader/dist/cjs.js??ref--8-oneOf-1-4!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--8-oneOf-1-5!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!E:/HBuilder Project/优惠券/uview-ui/components/u-dropdown/u-dropdown.vue?vue&type=style&index=0&id=0340bb60&scoped=true&lang=scss& ***!
  \*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin
    if(false) { var cssReload; }
  

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vRTovSEJ1aWxkZXIgUHJvamVjdC/kvJjmg6DliLgvdXZpZXctdWkvY29tcG9uZW50cy91LWRyb3Bkb3duL3UtZHJvcGRvd24udnVlPzliN2QiLCJ3ZWJwYWNrOi8vL0U6L0hCdWlsZGVyIFByb2plY3Qv5LyY5oOg5Yi4L3V2aWV3LXVpL2NvbXBvbmVudHMvdS1kcm9wZG93bi91LWRyb3Bkb3duLnZ1ZT85MTc3Iiwid2VicGFjazovLy9FOi9IQnVpbGRlciBQcm9qZWN0L+S8mOaDoOWIuC91dmlldy11aS9jb21wb25lbnRzL3UtZHJvcGRvd24vdS1kcm9wZG93bi52dWU/NjQwOSIsIndlYnBhY2s6Ly8vRTovSEJ1aWxkZXIgUHJvamVjdC/kvJjmg6DliLgvdXZpZXctdWkvY29tcG9uZW50cy91LWRyb3Bkb3duL3UtZHJvcGRvd24udnVlPzQwMDAiLCJ1bmktYXBwOi8vL3V2aWV3LXVpL2NvbXBvbmVudHMvdS1kcm9wZG93bi91LWRyb3Bkb3duLnZ1ZSIsIndlYnBhY2s6Ly8vRTovSEJ1aWxkZXIgUHJvamVjdC/kvJjmg6DliLgvdXZpZXctdWkvY29tcG9uZW50cy91LWRyb3Bkb3duL3UtZHJvcGRvd24udnVlP2Y2YmQiLCJ3ZWJwYWNrOi8vL0U6L0hCdWlsZGVyIFByb2plY3Qv5LyY5oOg5Yi4L3V2aWV3LXVpL2NvbXBvbmVudHMvdS1kcm9wZG93bi91LWRyb3Bkb3duLnZ1ZT9jYTEwIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBbUk7QUFDbkk7QUFDOEQ7QUFDTDtBQUNzQzs7O0FBRy9GO0FBQ3FLO0FBQ3JLLGdCQUFnQiwrS0FBVTtBQUMxQixFQUFFLGdGQUFNO0FBQ1IsRUFBRSxpR0FBTTtBQUNSLEVBQUUsMEdBQWU7QUFDakI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEVBQUUscUdBQVU7QUFDWjtBQUNBOztBQUVBO0FBQ2UsZ0Y7Ozs7Ozs7Ozs7OztBQ3ZCZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTs7Ozs7Ozs7Ozs7OztBQ0FBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWEsdU1BRU47QUFDUDtBQUNBO0FBQ0EsQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7O0FDNURBO0FBQUE7QUFBQTtBQUFBO0FBQW9tQixDQUFnQiw4bkJBQUcsRUFBQyxDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNvQ3huQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEc7QUFDQTtBQUNBLG9CQURBO0FBRUE7QUFDQTtBQUNBO0FBQ0Esa0JBREE7QUFFQSx3QkFGQSxFQUZBOztBQU1BO0FBQ0E7QUFDQSxrQkFEQTtBQUVBLHdCQUZBLEVBUEE7O0FBV0E7QUFDQTtBQUNBLG1CQURBO0FBRUEsbUJBRkEsRUFaQTs7QUFnQkE7QUFDQTtBQUNBLG1CQURBO0FBRUEsbUJBRkEsRUFqQkE7O0FBcUJBO0FBQ0E7QUFDQSw0QkFEQTtBQUVBLGtCQUZBLEVBdEJBOztBQTBCQTtBQUNBO0FBQ0EsNEJBREE7QUFFQSxpQkFGQSxFQTNCQTs7QUErQkE7QUFDQTtBQUNBLG1CQURBO0FBRUEsb0JBRkEsRUFoQ0E7O0FBb0NBO0FBQ0E7QUFDQSw0QkFEQTtBQUVBLGlCQUZBLEVBckNBOztBQXlDQTtBQUNBO0FBQ0EsNEJBREE7QUFFQSxnQkFGQSxFQTFDQTs7QUE4Q0E7QUFDQTtBQUNBLGtCQURBO0FBRUEsMkJBRkEsRUEvQ0E7O0FBbURBO0FBQ0E7QUFDQSw0QkFEQTtBQUVBLGlCQUZBLEVBcERBLEVBRkE7OztBQTJEQSxNQTNEQSxrQkEyREE7QUFDQTtBQUNBLHdCQURBLEVBQ0E7QUFDQSxrQkFGQSxFQUVBO0FBQ0EsbUJBSEEsRUFHQTtBQUNBO0FBQ0E7QUFDQSxvQkFOQTtBQU9BO0FBQ0E7QUFDQSxrQkFEQTtBQUVBLGtCQUZBLEVBUkE7O0FBWUE7QUFDQSwyQkFiQTtBQWNBLHNCQWRBOztBQWdCQSxHQTVFQTtBQTZFQTtBQUNBO0FBQ0EsY0FGQSx3QkFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBVEEsRUE3RUE7O0FBd0ZBLFNBeEZBLHFCQXdGQTtBQUNBO0FBQ0E7QUFDQSxHQTNGQTtBQTRGQSxTQTVGQSxxQkE0RkE7QUFDQTtBQUNBLEdBOUZBO0FBK0ZBO0FBQ0EsUUFEQSxrQkFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUZBO0FBR0EsS0FSQTtBQVNBO0FBQ0EsYUFWQSxxQkFVQSxLQVZBLEVBVUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FGQSxFQUVBLGFBRkE7QUFHQTtBQUNBO0FBQ0E7QUFDQSxLQXZCQTtBQXdCQTtBQUNBLFFBekJBLGdCQXlCQSxLQXpCQSxFQXlCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esa0JBREE7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUZBO0FBR0E7QUFDQSxLQXpDQTtBQTBDQTtBQUNBLFNBM0NBLG1CQTJDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGtCQURBO0FBRUEsa0JBRkE7O0FBSUEsS0FyREE7QUFzREE7QUFDQSxhQXZEQSx1QkF1REE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQTNEQTtBQTREQTtBQUNBLGFBN0RBLHVCQTZEQTtBQUNBO0FBQ0EsS0EvREE7QUFnRUE7QUFDQSxvQkFqRUEsOEJBaUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQU5BO0FBT0EsS0E3RUEsRUEvRkEsRTs7Ozs7Ozs7Ozs7O0FDckRBO0FBQUE7QUFBQTtBQUFBO0FBQThuQyxDQUFnQix3bUNBQUcsRUFBQyxDOzs7Ozs7Ozs7OztBQ0FscEM7QUFDQSxPQUFPLEtBQVUsRUFBRSxrQkFLZCIsImZpbGUiOiJ1dmlldy11aS9jb21wb25lbnRzL3UtZHJvcGRvd24vdS1kcm9wZG93bi5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zLCByZWN5Y2xhYmxlUmVuZGVyLCBjb21wb25lbnRzIH0gZnJvbSBcIi4vdS1kcm9wZG93bi52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9MDM0MGJiNjAmc2NvcGVkPXRydWUmXCJcbnZhciByZW5kZXJqc1xuaW1wb3J0IHNjcmlwdCBmcm9tIFwiLi91LWRyb3Bkb3duLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIlxuZXhwb3J0ICogZnJvbSBcIi4vdS1kcm9wZG93bi52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCJcbmltcG9ydCBzdHlsZTAgZnJvbSBcIi4vdS1kcm9wZG93bi52dWU/dnVlJnR5cGU9c3R5bGUmaW5kZXg9MCZpZD0wMzQwYmI2MCZzY29wZWQ9dHJ1ZSZsYW5nPXNjc3MmXCJcblxuXG4vKiBub3JtYWxpemUgY29tcG9uZW50ICovXG5pbXBvcnQgbm9ybWFsaXplciBmcm9tIFwiIUQ6XFxcXEhCdWlsZGVyWFxcXFxwbHVnaW5zXFxcXHVuaWFwcC1jbGlcXFxcbm9kZV9tb2R1bGVzXFxcXEBkY2xvdWRpb1xcXFx2dWUtY2xpLXBsdWdpbi11bmlcXFxccGFja2FnZXNcXFxcdnVlLWxvYWRlclxcXFxsaWJcXFxccnVudGltZVxcXFxjb21wb25lbnROb3JtYWxpemVyLmpzXCJcbnZhciBjb21wb25lbnQgPSBub3JtYWxpemVyKFxuICBzY3JpcHQsXG4gIHJlbmRlcixcbiAgc3RhdGljUmVuZGVyRm5zLFxuICBmYWxzZSxcbiAgbnVsbCxcbiAgXCIwMzQwYmI2MFwiLFxuICBudWxsLFxuICBmYWxzZSxcbiAgY29tcG9uZW50cyxcbiAgcmVuZGVyanNcbilcblxuY29tcG9uZW50Lm9wdGlvbnMuX19maWxlID0gXCJ1dmlldy11aS9jb21wb25lbnRzL3UtZHJvcGRvd24vdS1kcm9wZG93bi52dWVcIlxuZXhwb3J0IGRlZmF1bHQgY29tcG9uZW50LmV4cG9ydHMiLCJleHBvcnQgKiBmcm9tIFwiLSFEOlxcXFxIQnVpbGRlclhcXFxccGx1Z2luc1xcXFx1bmlhcHAtY2xpXFxcXG5vZGVfbW9kdWxlc1xcXFxAZGNsb3VkaW9cXFxcdnVlLWNsaS1wbHVnaW4tdW5pXFxcXHBhY2thZ2VzXFxcXHZ1ZS1sb2FkZXJcXFxcbGliXFxcXGxvYWRlcnNcXFxcdGVtcGxhdGVMb2FkZXIuanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyFEOlxcXFxIQnVpbGRlclhcXFxccGx1Z2luc1xcXFx1bmlhcHAtY2xpXFxcXG5vZGVfbW9kdWxlc1xcXFxAZGNsb3VkaW9cXFxcdnVlLWNsaS1wbHVnaW4tdW5pXFxcXHBhY2thZ2VzXFxcXHdlYnBhY2stcHJlcHJvY2Vzcy1sb2FkZXJcXFxcaW5kZXguanM/P3JlZi0tMTYtMCFEOlxcXFxIQnVpbGRlclhcXFxccGx1Z2luc1xcXFx1bmlhcHAtY2xpXFxcXG5vZGVfbW9kdWxlc1xcXFxAZGNsb3VkaW9cXFxcd2VicGFjay11bmktbXAtbG9hZGVyXFxcXGxpYlxcXFx0ZW1wbGF0ZS5qcyFEOlxcXFxIQnVpbGRlclhcXFxccGx1Z2luc1xcXFx1bmlhcHAtY2xpXFxcXG5vZGVfbW9kdWxlc1xcXFxAZGNsb3VkaW9cXFxcdnVlLWNsaS1wbHVnaW4tdW5pXFxcXHBhY2thZ2VzXFxcXHdlYnBhY2stdW5pLWFwcC1sb2FkZXJcXFxccGFnZS1tZXRhLmpzIUQ6XFxcXEhCdWlsZGVyWFxcXFxwbHVnaW5zXFxcXHVuaWFwcC1jbGlcXFxcbm9kZV9tb2R1bGVzXFxcXEBkY2xvdWRpb1xcXFx2dWUtY2xpLXBsdWdpbi11bmlcXFxccGFja2FnZXNcXFxcdnVlLWxvYWRlclxcXFxsaWJcXFxcaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyFEOlxcXFxIQnVpbGRlclhcXFxccGx1Z2luc1xcXFx1bmlhcHAtY2xpXFxcXG5vZGVfbW9kdWxlc1xcXFxAZGNsb3VkaW9cXFxcd2VicGFjay11bmktbXAtbG9hZGVyXFxcXGxpYlxcXFxzdHlsZS5qcyEuL3UtZHJvcGRvd24udnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTAzNDBiYjYwJnNjb3BlZD10cnVlJlwiIiwidmFyIGNvbXBvbmVudHNcbnRyeSB7XG4gIGNvbXBvbmVudHMgPSB7XG4gICAgdUljb246IGZ1bmN0aW9uKCkge1xuICAgICAgcmV0dXJuIGltcG9ydChcbiAgICAgICAgLyogd2VicGFja0NodW5rTmFtZTogXCJ1dmlldy11aS9jb21wb25lbnRzL3UtaWNvbi91LWljb25cIiAqLyBcIkAvdXZpZXctdWkvY29tcG9uZW50cy91LWljb24vdS1pY29uLnZ1ZVwiXG4gICAgICApXG4gICAgfVxuICB9XG59IGNhdGNoIChlKSB7XG4gIGlmIChcbiAgICBlLm1lc3NhZ2UuaW5kZXhPZihcIkNhbm5vdCBmaW5kIG1vZHVsZVwiKSAhPT0gLTEgJiZcbiAgICBlLm1lc3NhZ2UuaW5kZXhPZihcIi52dWVcIikgIT09IC0xXG4gICkge1xuICAgIGNvbnNvbGUuZXJyb3IoZS5tZXNzYWdlKVxuICAgIGNvbnNvbGUuZXJyb3IoXCIxLiDmjpLmn6Xnu4Tku7blkI3np7Dmi7zlhpnmmK/lkKbmraPnoa5cIilcbiAgICBjb25zb2xlLmVycm9yKFxuICAgICAgXCIyLiDmjpLmn6Xnu4Tku7bmmK/lkKbnrKblkIggZWFzeWNvbSDop4TojIPvvIzmlofmoaPvvJpodHRwczovL3VuaWFwcC5kY2xvdWQubmV0LmNuL2NvbGxvY2F0aW9uL3BhZ2VzP2lkPWVhc3ljb21cIlxuICAgIClcbiAgICBjb25zb2xlLmVycm9yKFxuICAgICAgXCIzLiDoi6Xnu4Tku7bkuI3nrKblkIggZWFzeWNvbSDop4TojIPvvIzpnIDmiYvliqjlvJXlhaXvvIzlubblnKggY29tcG9uZW50cyDkuK3ms6jlhozor6Xnu4Tku7ZcIlxuICAgIClcbiAgfSBlbHNlIHtcbiAgICB0aHJvdyBlXG4gIH1cbn1cbnZhciByZW5kZXIgPSBmdW5jdGlvbigpIHtcbiAgdmFyIF92bSA9IHRoaXNcbiAgdmFyIF9oID0gX3ZtLiRjcmVhdGVFbGVtZW50XG4gIHZhciBfYyA9IF92bS5fc2VsZi5fYyB8fCBfaFxuICB2YXIgZzAgPSBfdm0uJHUuYWRkVW5pdChfdm0uaGVpZ2h0KVxuICB2YXIgZzEgPSBfdm0uJHUuYWRkVW5pdChfdm0udGl0bGVTaXplKVxuICB2YXIgZzIgPSBfdm0uJHUuYWRkVW5pdChfdm0ubWVudUljb25TaXplKVxuXG4gIHZhciBzMCA9IF92bS5fX2dldF9zdHlsZShbXG4gICAgX3ZtLmNvbnRlbnRTdHlsZSxcbiAgICB7XG4gICAgICB0cmFuc2l0aW9uOiBcIm9wYWNpdHkgXCIgKyBfdm0uZHVyYXRpb24gLyAxMDAwICsgXCJzIGxpbmVhclwiLFxuICAgICAgdG9wOiBfdm0uJHUuYWRkVW5pdChfdm0uaGVpZ2h0KSxcbiAgICAgIGhlaWdodDogX3ZtLmNvbnRlbnRIZWlnaHQgKyBcInB4XCJcbiAgICB9XG4gIF0pXG5cbiAgdmFyIHMxID0gX3ZtLl9fZ2V0X3N0eWxlKFtfdm0ucG9wdXBTdHlsZV0pXG5cbiAgX3ZtLiRtcC5kYXRhID0gT2JqZWN0LmFzc2lnbihcbiAgICB7fSxcbiAgICB7XG4gICAgICAkcm9vdDoge1xuICAgICAgICBnMDogZzAsXG4gICAgICAgIGcxOiBnMSxcbiAgICAgICAgZzI6IGcyLFxuICAgICAgICBzMDogczAsXG4gICAgICAgIHMxOiBzMVxuICAgICAgfVxuICAgIH1cbiAgKVxufVxudmFyIHJlY3ljbGFibGVSZW5kZXIgPSBmYWxzZVxudmFyIHN0YXRpY1JlbmRlckZucyA9IFtdXG5yZW5kZXIuX3dpdGhTdHJpcHBlZCA9IHRydWVcblxuZXhwb3J0IHsgcmVuZGVyLCBzdGF0aWNSZW5kZXJGbnMsIHJlY3ljbGFibGVSZW5kZXIsIGNvbXBvbmVudHMgfSIsImltcG9ydCBtb2QgZnJvbSBcIi0hRDpcXFxcSEJ1aWxkZXJYXFxcXHBsdWdpbnNcXFxcdW5pYXBwLWNsaVxcXFxub2RlX21vZHVsZXNcXFxcYmFiZWwtbG9hZGVyXFxcXGxpYlxcXFxpbmRleC5qcyFEOlxcXFxIQnVpbGRlclhcXFxccGx1Z2luc1xcXFx1bmlhcHAtY2xpXFxcXG5vZGVfbW9kdWxlc1xcXFxAZGNsb3VkaW9cXFxcdnVlLWNsaS1wbHVnaW4tdW5pXFxcXHBhY2thZ2VzXFxcXHdlYnBhY2stcHJlcHJvY2Vzcy1sb2FkZXJcXFxcaW5kZXguanM/P3JlZi0tMTItMSFEOlxcXFxIQnVpbGRlclhcXFxccGx1Z2luc1xcXFx1bmlhcHAtY2xpXFxcXG5vZGVfbW9kdWxlc1xcXFxAZGNsb3VkaW9cXFxcd2VicGFjay11bmktbXAtbG9hZGVyXFxcXGxpYlxcXFxzY3JpcHQuanMhRDpcXFxcSEJ1aWxkZXJYXFxcXHBsdWdpbnNcXFxcdW5pYXBwLWNsaVxcXFxub2RlX21vZHVsZXNcXFxcQGRjbG91ZGlvXFxcXHZ1ZS1jbGktcGx1Z2luLXVuaVxcXFxwYWNrYWdlc1xcXFx2dWUtbG9hZGVyXFxcXGxpYlxcXFxpbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIUQ6XFxcXEhCdWlsZGVyWFxcXFxwbHVnaW5zXFxcXHVuaWFwcC1jbGlcXFxcbm9kZV9tb2R1bGVzXFxcXEBkY2xvdWRpb1xcXFx3ZWJwYWNrLXVuaS1tcC1sb2FkZXJcXFxcbGliXFxcXHN0eWxlLmpzIS4vdS1kcm9wZG93bi52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCI7IGV4cG9ydCBkZWZhdWx0IG1vZDsgZXhwb3J0ICogZnJvbSBcIi0hRDpcXFxcSEJ1aWxkZXJYXFxcXHBsdWdpbnNcXFxcdW5pYXBwLWNsaVxcXFxub2RlX21vZHVsZXNcXFxcYmFiZWwtbG9hZGVyXFxcXGxpYlxcXFxpbmRleC5qcyFEOlxcXFxIQnVpbGRlclhcXFxccGx1Z2luc1xcXFx1bmlhcHAtY2xpXFxcXG5vZGVfbW9kdWxlc1xcXFxAZGNsb3VkaW9cXFxcdnVlLWNsaS1wbHVnaW4tdW5pXFxcXHBhY2thZ2VzXFxcXHdlYnBhY2stcHJlcHJvY2Vzcy1sb2FkZXJcXFxcaW5kZXguanM/P3JlZi0tMTItMSFEOlxcXFxIQnVpbGRlclhcXFxccGx1Z2luc1xcXFx1bmlhcHAtY2xpXFxcXG5vZGVfbW9kdWxlc1xcXFxAZGNsb3VkaW9cXFxcd2VicGFjay11bmktbXAtbG9hZGVyXFxcXGxpYlxcXFxzY3JpcHQuanMhRDpcXFxcSEJ1aWxkZXJYXFxcXHBsdWdpbnNcXFxcdW5pYXBwLWNsaVxcXFxub2RlX21vZHVsZXNcXFxcQGRjbG91ZGlvXFxcXHZ1ZS1jbGktcGx1Z2luLXVuaVxcXFxwYWNrYWdlc1xcXFx2dWUtbG9hZGVyXFxcXGxpYlxcXFxpbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIUQ6XFxcXEhCdWlsZGVyWFxcXFxwbHVnaW5zXFxcXHVuaWFwcC1jbGlcXFxcbm9kZV9tb2R1bGVzXFxcXEBkY2xvdWRpb1xcXFx3ZWJwYWNrLXVuaS1tcC1sb2FkZXJcXFxcbGliXFxcXHN0eWxlLmpzIS4vdS1kcm9wZG93bi52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCIiLCI8dGVtcGxhdGU+XHJcblx0PHZpZXcgY2xhc3M9XCJ1LWRyb3Bkb3duXCI+XHJcblx0XHQ8dmlldyBjbGFzcz1cInUtZHJvcGRvd25fX21lbnVcIiA6c3R5bGU9XCJ7XHJcblx0XHRcdGhlaWdodDogJHUuYWRkVW5pdChoZWlnaHQpXHJcblx0XHR9XCIgOmNsYXNzPVwie1xyXG5cdFx0XHQndS1ib3JkZXItYm90dG9tJzogYm9yZGVyQm90dG9tXHJcblx0XHR9XCI+XHJcblx0XHRcdDx2aWV3IGNsYXNzPVwidS1kcm9wZG93bl9fbWVudV9faXRlbVwiIHYtZm9yPVwiKGl0ZW0sIGluZGV4KSBpbiBtZW51TGlzdFwiIDprZXk9XCJpbmRleFwiIEB0YXAuc3RvcD1cIm1lbnVDbGljayhpbmRleClcIj5cclxuXHRcdFx0XHQ8dmlldyBjbGFzcz1cInUtZmxleFwiPlxyXG5cdFx0XHRcdFx0PHRleHQgY2xhc3M9XCJ1LWRyb3Bkb3duX19tZW51X19pdGVtX190ZXh0XCIgOnN0eWxlPVwie1xyXG5cdFx0XHRcdFx0XHRjb2xvcjogaXRlbS5kaXNhYmxlZCA/ICcjYzBjNGNjJyA6IChpbmRleCA9PT0gY3VycmVudCB8fCBoaWdobGlnaHRJbmRleCA9PSBpbmRleCkgPyBhY3RpdmVDb2xvciA6IGluYWN0aXZlQ29sb3IsXHJcblx0XHRcdFx0XHRcdGZvbnRTaXplOiAkdS5hZGRVbml0KHRpdGxlU2l6ZSlcclxuXHRcdFx0XHRcdH1cIj57e2l0ZW0udGl0bGV9fTwvdGV4dD5cclxuXHRcdFx0XHRcdDx2aWV3IGNsYXNzPVwidS1kcm9wZG93bl9fbWVudV9faXRlbV9fYXJyb3dcIiA6Y2xhc3M9XCJ7XHJcblx0XHRcdFx0XHRcdCd1LWRyb3Bkb3duX19tZW51X19pdGVtX19hcnJvdy0tcm90YXRlJzogaW5kZXggPT09IGN1cnJlbnRcclxuXHRcdFx0XHRcdH1cIj5cclxuXHRcdFx0XHRcdFx0PHUtaWNvbiA6Y3VzdG9tLXN0eWxlPVwie2Rpc3BsYXk6ICdmbGV4J31cIiA6bmFtZT1cIm1lbnVJY29uXCIgOnNpemU9XCIkdS5hZGRVbml0KG1lbnVJY29uU2l6ZSlcIiA6Y29sb3I9XCJpbmRleCA9PT0gY3VycmVudCB8fCBoaWdobGlnaHRJbmRleCA9PSBpbmRleCA/IGFjdGl2ZUNvbG9yIDogJyNjMGM0Y2MnXCI+PC91LWljb24+XHJcblx0XHRcdFx0XHQ8L3ZpZXc+XHJcblx0XHRcdFx0PC92aWV3PlxyXG5cdFx0XHQ8L3ZpZXc+XHJcblx0XHQ8L3ZpZXc+XHJcblx0XHQ8dmlldyBjbGFzcz1cInUtZHJvcGRvd25fX2NvbnRlbnRcIiA6c3R5bGU9XCJbY29udGVudFN0eWxlLCB7XHJcblx0XHRcdHRyYW5zaXRpb246IGBvcGFjaXR5ICR7ZHVyYXRpb24gLyAxMDAwfXMgbGluZWFyYCxcclxuXHRcdFx0dG9wOiAkdS5hZGRVbml0KGhlaWdodCksXHJcblx0XHRcdGhlaWdodDogY29udGVudEhlaWdodCArICdweCdcclxuXHRcdH1dXCJcclxuXHRcdCBAdGFwPVwibWFza0NsaWNrXCIgQHRvdWNobW92ZS5zdG9wLnByZXZlbnQ+XHJcblx0XHRcdDx2aWV3IEB0YXAuc3RvcC5wcmV2ZW50IGNsYXNzPVwidS1kcm9wZG93bl9fY29udGVudF9fcG9wdXBcIiA6c3R5bGU9XCJbcG9wdXBTdHlsZV1cIj5cclxuXHRcdFx0XHQ8c2xvdD48L3Nsb3Q+XHJcblx0XHRcdDwvdmlldz5cclxuXHRcdFx0PHZpZXcgY2xhc3M9XCJ1LWRyb3Bkb3duX19jb250ZW50X19tYXNrXCI+PC92aWV3PlxyXG5cdFx0PC92aWV3PlxyXG5cdDwvdmlldz5cclxuPC90ZW1wbGF0ZT5cclxuXHJcbjxzY3JpcHQ+XHJcblx0LyoqXHJcblx0ICogZHJvcGRvd24g5LiL5ouJ6I+c5Y2VXHJcblx0ICogQGRlc2NyaXB0aW9uIOivpee7hOS7tuS4gOiIrOeUqOS6juWQkeS4i+WxleW8gOiPnOWNle+8jOWQjOaXtuWPr+WIh+aNouWkmuS4qumAiemhueWNoeeahOWcuuaZr1xyXG5cdCAqIEB0dXRvcmlhbCBodHRwOi8vdXZpZXd1aS5jb20vY29tcG9uZW50cy9kcm9wZG93bi5odG1sXHJcblx0ICogQHByb3BlcnR5IHtTdHJpbmd9IGFjdGl2ZS1jb2xvciDmoIfpopjlkozpgInpobnljaHpgInkuK3nmoTpopzoibLvvIjpu5jorqQjMjk3OWZm77yJXHJcblx0ICogQHByb3BlcnR5IHtTdHJpbmd9IGluYWN0aXZlLWNvbG9yIOagh+mimOWSjOmAiemhueWNoeacqumAieS4reeahOminOiJsu+8iOm7mOiupCM2MDYyNjbvvIlcclxuXHQgKiBAcHJvcGVydHkge0Jvb2xlYW59IGNsb3NlLW9uLWNsaWNrLW1hc2sg54K55Ye76YGu572p5piv5ZCm5YWz6Zet6I+c5Y2V77yI6buY6K6kdHJ1Ze+8iVxyXG5cdCAqIEBwcm9wZXJ0eSB7Qm9vbGVhbn0gY2xvc2Utb24tY2xpY2stc2VsZiDngrnlh7vlvZPliY3mv4DmtLvpobnmoIfpopjmmK/lkKblhbPpl63oj5zljZXvvIjpu5jorqR0cnVl77yJXHJcblx0ICogQHByb3BlcnR5IHtTdHJpbmcgfCBOdW1iZXJ9IGR1cmF0aW9uIOmAiemhueWNoeWxleW8gOWSjOaUtui1t+eahOi/h+a4oeaXtumXtO+8jOWNleS9jW1z77yI6buY6K6kMzAw77yJXHJcblx0ICogQHByb3BlcnR5IHtTdHJpbmcgfCBOdW1iZXJ9IGhlaWdodCDmoIfpopjoj5zljZXnmoTpq5jluqbvvIzljZXkvY3ku7vmhI/vvIjpu5jorqQ4MO+8iVxyXG5cdCAqIEBwcm9wZXJ0eSB7U3RyaW5nIHwgTnVtYmVyfSBib3JkZXItcmFkaXVzIOiPnOWNleWxleW8gOWGheWuueS4i+aWueeahOWchuinkuWAvO+8jOWNleS9jeS7u+aEj++8iOm7mOiupDDvvIlcclxuXHQgKiBAcHJvcGVydHkge0Jvb2xlYW59IGJvcmRlci1ib3R0b20g5qCH6aKY6I+c5Y2V5piv5ZCm5pi+56S65LiL6L655qGG77yI6buY6K6kZmFsc2XvvIlcclxuXHQgKiBAcHJvcGVydHkge1N0cmluZyB8IE51bWJlcn0gdGl0bGUtc2l6ZSDmoIfpopjnmoTlrZfkvZPlpKflsI/vvIzljZXkvY3ku7vmhI/vvIzmlbDlgLzpu5jorqTkuLpycHjljZXkvY3vvIjpu5jorqQyOO+8iVxyXG5cdCAqIEBldmVudCB7RnVuY3Rpb259IG9wZW4g5LiL5ouJ6I+c5Y2V6KKr5omT5byA5pe26Kem5Y+RXHJcblx0ICogQGV2ZW50IHtGdW5jdGlvbn0gY2xvc2Ug5LiL5ouJ6I+c5Y2V6KKr5YWz6Zet5pe26Kem5Y+RXHJcblx0ICogQGV4YW1wbGUgPHUtZHJvcGRvd24+PC91LWRyb3Bkb3duPlxyXG5cdCAqL1xyXG5cdGV4cG9ydCBkZWZhdWx0IHtcclxuXHRcdG5hbWU6ICd1LWRyb3Bkb3duJyxcclxuXHRcdHByb3BzOiB7XHJcblx0XHRcdC8vIOiPnOWNleagh+mimOWSjOmAiemhueeahOa/gOa0u+aAgeminOiJslxyXG5cdFx0XHRhY3RpdmVDb2xvcjoge1xyXG5cdFx0XHRcdHR5cGU6IFN0cmluZyxcclxuXHRcdFx0XHRkZWZhdWx0OiAnIzI5NzlmZidcclxuXHRcdFx0fSxcclxuXHRcdFx0Ly8g6I+c5Y2V5qCH6aKY5ZKM6YCJ6aG555qE5pyq5r+A5rS75oCB6aKc6ImyXHJcblx0XHRcdGluYWN0aXZlQ29sb3I6IHtcclxuXHRcdFx0XHR0eXBlOiBTdHJpbmcsXHJcblx0XHRcdFx0ZGVmYXVsdDogJyM2MDYyNjYnXHJcblx0XHRcdH0sXHJcblx0XHRcdC8vIOeCueWHu+mBrue9qeaYr+WQpuWFs+mXreiPnOWNlVxyXG5cdFx0XHRjbG9zZU9uQ2xpY2tNYXNrOiB7XHJcblx0XHRcdFx0dHlwZTogQm9vbGVhbixcclxuXHRcdFx0XHRkZWZhdWx0OiB0cnVlXHJcblx0XHRcdH0sXHJcblx0XHRcdC8vIOeCueWHu+W9k+WJjea/gOa0u+mhueagh+mimOaYr+WQpuWFs+mXreiPnOWNlVxyXG5cdFx0XHRjbG9zZU9uQ2xpY2tTZWxmOiB7XHJcblx0XHRcdFx0dHlwZTogQm9vbGVhbixcclxuXHRcdFx0XHRkZWZhdWx0OiB0cnVlXHJcblx0XHRcdH0sXHJcblx0XHRcdC8vIOi/h+a4oeaXtumXtFxyXG5cdFx0XHRkdXJhdGlvbjoge1xyXG5cdFx0XHRcdHR5cGU6IFtOdW1iZXIsIFN0cmluZ10sXHJcblx0XHRcdFx0ZGVmYXVsdDogMzAwXHJcblx0XHRcdH0sXHJcblx0XHRcdC8vIOagh+mimOiPnOWNleeahOmrmOW6pu+8jOWNleS9jeS7u+aEj++8jOaVsOWAvOm7mOiupOS4unJweOWNleS9jVxyXG5cdFx0XHRoZWlnaHQ6IHtcclxuXHRcdFx0XHR0eXBlOiBbTnVtYmVyLCBTdHJpbmddLFxyXG5cdFx0XHRcdGRlZmF1bHQ6IDgwXHJcblx0XHRcdH0sXHJcblx0XHRcdC8vIOaYr+WQpuaYvuekuuS4i+i+ueahhlxyXG5cdFx0XHRib3JkZXJCb3R0b206IHtcclxuXHRcdFx0XHR0eXBlOiBCb29sZWFuLFxyXG5cdFx0XHRcdGRlZmF1bHQ6IGZhbHNlXHJcblx0XHRcdH0sXHJcblx0XHRcdC8vIOagh+mimOeahOWtl+S9k+Wkp+Wwj1xyXG5cdFx0XHR0aXRsZVNpemU6IHtcclxuXHRcdFx0XHR0eXBlOiBbTnVtYmVyLCBTdHJpbmddLFxyXG5cdFx0XHRcdGRlZmF1bHQ6IDI4XHJcblx0XHRcdH0sXHJcblx0XHRcdC8vIOS4i+aLieWHuuadpeeahOWGheWuuemDqOWIhueahOWchuinkuWAvFxyXG5cdFx0XHRib3JkZXJSYWRpdXM6IHtcclxuXHRcdFx0XHR0eXBlOiBbTnVtYmVyLCBTdHJpbmddLFxyXG5cdFx0XHRcdGRlZmF1bHQ6IDBcclxuXHRcdFx0fSxcclxuXHRcdFx0Ly8g6I+c5Y2V5Y+z5L6n55qEaWNvbuWbvuagh1xyXG5cdFx0XHRtZW51SWNvbjoge1xyXG5cdFx0XHRcdHR5cGU6IFN0cmluZyxcclxuXHRcdFx0XHRkZWZhdWx0OiAnYXJyb3ctZG93bidcclxuXHRcdFx0fSxcclxuXHRcdFx0Ly8g6I+c5Y2V5Y+z5L6n5Zu+5qCH55qE5aSn5bCPXHJcblx0XHRcdG1lbnVJY29uU2l6ZToge1xyXG5cdFx0XHRcdHR5cGU6IFtOdW1iZXIsIFN0cmluZ10sXHJcblx0XHRcdFx0ZGVmYXVsdDogMjZcclxuXHRcdFx0fVxyXG5cdFx0fSxcclxuXHRcdGRhdGEoKSB7XHJcblx0XHRcdHJldHVybiB7XHJcblx0XHRcdFx0c2hvd0Ryb3Bkb3duOiB0cnVlLCAvLyDmmK/lkKbmiZPlvIDkuIvmnaXoj5zljZUsXHJcblx0XHRcdFx0bWVudUxpc3Q6IFtdLCAvLyDmmL7npLrnmoToj5zljZVcclxuXHRcdFx0XHRhY3RpdmU6IGZhbHNlLCAvLyDkuIvmi4noj5zljZXnmoTnirbmgIFcclxuXHRcdFx0XHQvLyDlvZPliY3mmK/nrKzlh6DkuKroj5zljZXlpITkuo7mv4DmtLvnirbmgIHvvIzlsI/nqIvluo/kuK3mraTlpITkuI3og73lhpnmiJBmYWxzZeaIluiAhVwiXCLvvIzlkKbliJnlkI7nu63lsIZjdXJyZW506LWL5YC85Li6MO+8jFxyXG5cdFx0XHRcdC8vIOaXoOiDveeahFRY5rKh5pyJ5L2/55SoPT096ICM5piv5L2/55SoPT3liKTmlq3vvIzlr7zoh7TnqIvluo/orqTkuLrliY3lkI7kuozogIXmsqHmnInlj5jljJbvvIzku47ogIzkuI3kvJrop6blj5Hop4blm77mm7TmlrBcclxuXHRcdFx0XHRjdXJyZW50OiA5OTk5OSxcclxuXHRcdFx0XHQvLyDlpJblsYLlhoXlrrnnmoTmoLflvI/vvIzliJ3lp4vml7blpITkuo7lupXlsYLvvIzkuJTpgI/mmI5cclxuXHRcdFx0XHRjb250ZW50U3R5bGU6IHtcclxuXHRcdFx0XHRcdHpJbmRleDogLTEsXHJcblx0XHRcdFx0XHRvcGFjaXR5OiAwXHJcblx0XHRcdFx0fSxcclxuXHRcdFx0XHQvLyDorqnmn5DkuKroj5zljZXkv53mjIHpq5jkuq7nmoTnirbmgIFcclxuXHRcdFx0XHRoaWdobGlnaHRJbmRleDogOTk5OTksXHJcblx0XHRcdFx0Y29udGVudEhlaWdodDogMFxyXG5cdFx0XHR9XHJcblx0XHR9LFxyXG5cdFx0Y29tcHV0ZWQ6IHtcclxuXHRcdFx0Ly8g5LiL5ouJ5Ye65p2l6YOo5YiG55qE5qC35byPXHJcblx0XHRcdHBvcHVwU3R5bGUoKSB7XHJcblx0XHRcdFx0bGV0IHN0eWxlID0ge307XHJcblx0XHRcdFx0Ly8g6L+b6KGMWei9tOS9jeenu++8jOWxleW8gOeKtuaAgeaXtu+8jOaBouWkjeWOn+S9jeOAguaUtum9kOeKtuaAgeaXtu+8jOW+gOS4iuS9jeenuzEwMCXvvIzov5vooYzpmpDol49cclxuXHRcdFx0XHRzdHlsZS50cmFuc2Zvcm0gPSBgdHJhbnNsYXRlWSgke3RoaXMuYWN0aXZlID8gMCA6ICctMTAwJSd9KWBcclxuXHRcdFx0XHRzdHlsZVsndHJhbnNpdGlvbi1kdXJhdGlvbiddID0gdGhpcy5kdXJhdGlvbiAvIDEwMDAgKyAncyc7XHJcblx0XHRcdFx0c3R5bGUuYm9yZGVyUmFkaXVzID0gYDAgMCAke3RoaXMuJHUuYWRkVW5pdCh0aGlzLmJvcmRlclJhZGl1cyl9ICR7dGhpcy4kdS5hZGRVbml0KHRoaXMuYm9yZGVyUmFkaXVzKX1gO1xyXG5cdFx0XHRcdHJldHVybiBzdHlsZTtcclxuXHRcdFx0fVxyXG5cdFx0fSxcclxuXHRcdGNyZWF0ZWQoKSB7XHJcblx0XHRcdC8vIOW8leeUqOaJgOacieWtkOe7hOS7tih1LWRyb3Bkb3duLWl0ZW0p55qEdGhpc++8jOS4jeiDveWcqGRhdGHkuK3lo7DmmI7lj5jph4/vvIzlkKbliJnlnKjlvq7kv6HlsI/nqIvluo/kvJrpgKDmiJDlvqrnjq/lvJXnlKjogIzmiqXplJlcclxuXHRcdFx0dGhpcy5jaGlsZHJlbiA9IFtdO1xyXG5cdFx0fSxcclxuXHRcdG1vdW50ZWQoKSB7XHJcblx0XHRcdHRoaXMuZ2V0Q29udGVudEhlaWdodCgpO1xyXG5cdFx0fSxcclxuXHRcdG1ldGhvZHM6IHtcclxuXHRcdFx0aW5pdCgpIHtcclxuXHRcdFx0XHQvLyDlvZPmn5DkuKrlrZDnu4Tku7blhoXlrrnlj5jljJbml7bvvIzop6blj5HniLbnu4Tku7bnmoRpbml077yM54i257uE5Lu25YaN6K6p5q+P5LiA5Liq5a2Q57uE5Lu26YeN5paw5Yid5aeL5YyW5LiA6YGNXHJcblx0XHRcdFx0Ly8g5Lul5L+d6K+B5pWw5o2u55qE5q2j56Gu5oCnXHJcblx0XHRcdFx0dGhpcy5tZW51TGlzdCA9IFtdO1xyXG5cdFx0XHRcdHRoaXMuY2hpbGRyZW4ubWFwKGNoaWxkID0+IHtcclxuXHRcdFx0XHRcdGNoaWxkLmluaXQoKTtcclxuXHRcdFx0XHR9KVxyXG5cdFx0XHR9LFxyXG5cdFx0XHQvLyDngrnlh7voj5zljZVcclxuXHRcdFx0bWVudUNsaWNrKGluZGV4KSB7XHJcblx0XHRcdFx0Ly8g5Yik5pat5piv5ZCm6KKr56aB55SoXHJcblx0XHRcdFx0aWYgKHRoaXMubWVudUxpc3RbaW5kZXhdLmRpc2FibGVkKSByZXR1cm47XHJcblx0XHRcdFx0Ly8g5aaC5p6c54K55Ye75pe255qE57Si5byV5ZKM5b2T5YmN5r+A5rS76aG557Si5byV55u45ZCM77yM5oSP5ZGz552A54K55Ye75LqG5r+A5rS76aG577yM6ZyA6KaB5pS26LW35LiL5ouJ6I+c5Y2VXHJcblx0XHRcdFx0aWYgKGluZGV4ID09PSB0aGlzLmN1cnJlbnQgJiYgdGhpcy5jbG9zZU9uQ2xpY2tTZWxmKSB7XHJcblx0XHRcdFx0XHR0aGlzLmNsb3NlKCk7XHJcblx0XHRcdFx0XHQvLyDnrYnliqjnlLvnu5PmnZ/lkI7vvIzlho3np7vpmaTkuIvmi4noj5zljZXkuK3nmoTlhoXlrrnvvIzlkKbliJnnm7TmjqXnp7vpmaTvvIzkuZ/lsLHmsqHmnInkuIvmi4noj5zljZXmlLbotbfnmoTmlYjmnpzkuoZcclxuXHRcdFx0XHRcdHNldFRpbWVvdXQoKCkgPT4ge1xyXG5cdFx0XHRcdFx0XHR0aGlzLmNoaWxkcmVuW2luZGV4XS5hY3RpdmUgPSBmYWxzZTtcclxuXHRcdFx0XHRcdH0sIHRoaXMuZHVyYXRpb24pXHJcblx0XHRcdFx0XHRyZXR1cm47XHJcblx0XHRcdFx0fVxyXG5cdFx0XHRcdHRoaXMub3BlbihpbmRleCk7XHJcblx0XHRcdH0sXHJcblx0XHRcdC8vIOaJk+W8gOS4i+aLieiPnOWNlVxyXG5cdFx0XHRvcGVuKGluZGV4KSB7XHJcblx0XHRcdFx0Ly8g6YeN572u6auY5Lqu57Si5byV77yM5ZCm5YiZ5Lya6YCg5oiQ5aSa5Liq6I+c5Y2V5ZCM5pe26auY5LquXHJcblx0XHRcdFx0Ly8gdGhpcy5oaWdobGlnaHRJbmRleCA9IDk5OTk7XHJcblx0XHRcdFx0Ly8g5bGV5byA5pe277yM6K6+572u5LiL5ouJ5YaF5a6555qE5qC35byPXHJcblx0XHRcdFx0dGhpcy5jb250ZW50U3R5bGUgPSB7XHJcblx0XHRcdFx0XHR6SW5kZXg6IDExLFxyXG5cdFx0XHRcdH1cclxuXHRcdFx0XHQvLyDmoIforrDlsZXlvIDnirbmgIHku6Xlj4rlvZPliY3lsZXlvIDpobnnmoTntKLlvJVcclxuXHRcdFx0XHR0aGlzLmFjdGl2ZSA9IHRydWU7XHJcblx0XHRcdFx0dGhpcy5jdXJyZW50ID0gaW5kZXg7XHJcblx0XHRcdFx0Ly8g5Y6G6YGN5omA5pyJ55qE5a2Q5YWD57Sg77yM5bCG57Si5byV5Yy56YWN55qE6aG55qCH6K6w5Li65r+A5rS754q25oCB77yM5Zug5Li65a2Q5YWD57Sg5piv6YCa6L+Hdi1pZuaOp+WItuWIh+aNoueahFxyXG5cdFx0XHRcdC8vIOS5i+aJgOS7peS4jeaYr+WboGRpc3BsYXk6IG5vbmXvvIzmmK/lm6DkuLpudnVl5rKh5pyJZGlzcGxheei/meS4quWxnuaAp1xyXG5cdFx0XHRcdHRoaXMuY2hpbGRyZW4ubWFwKCh2YWwsIGlkeCkgPT4ge1xyXG5cdFx0XHRcdFx0dmFsLmFjdGl2ZSA9IGluZGV4ID09IGlkeCA/IHRydWUgOiBmYWxzZTtcclxuXHRcdFx0XHR9KVxyXG5cdFx0XHRcdHRoaXMuJGVtaXQoJ29wZW4nLCB0aGlzLmN1cnJlbnQpO1xyXG5cdFx0XHR9LFxyXG5cdFx0XHQvLyDorr7nva7kuIvmi4noj5zljZXlpITkuo7mlLbotbfnirbmgIFcclxuXHRcdFx0Y2xvc2UoKSB7XHJcblx0XHRcdFx0dGhpcy4kZW1pdCgnY2xvc2UnLCB0aGlzLmN1cnJlbnQpO1xyXG5cdFx0XHRcdC8vIOiuvue9ruS4uuaUtui1t+eKtuaAge+8jOWQjOaXtmN1cnJlbnTlvZLkvY3vvIzorr7nva7kuLrnqbrlrZfnrKbkuLJcclxuXHRcdFx0XHR0aGlzLmFjdGl2ZSA9IGZhbHNlO1xyXG5cdFx0XHRcdHRoaXMuY3VycmVudCA9IDk5OTk5O1xyXG5cdFx0XHRcdC8vIOS4i+aLieWGheWuueeahOagt+W8j+i/m+ihjOiwg+aVtO+8jOS4jemAj+aYjuW6puiuvue9ruS4ujBcclxuXHRcdFx0XHR0aGlzLmNvbnRlbnRTdHlsZSA9IHtcclxuXHRcdFx0XHRcdHpJbmRleDogLTEsXHJcblx0XHRcdFx0XHRvcGFjaXR5OiAwXHJcblx0XHRcdFx0fVxyXG5cdFx0XHR9LFxyXG5cdFx0XHQvLyDngrnlh7vpga7nvalcclxuXHRcdFx0bWFza0NsaWNrKCkge1xyXG5cdFx0XHRcdC8vIOWmguaenOS4jeWFgeiuuOeCueWHu+mBrue9qe+8jOebtOaOpei/lOWbnlxyXG5cdFx0XHRcdGlmICghdGhpcy5jbG9zZU9uQ2xpY2tNYXNrKSByZXR1cm47XHJcblx0XHRcdFx0dGhpcy5jbG9zZSgpO1xyXG5cdFx0XHR9LFxyXG5cdFx0XHQvLyDlpJbpg6jmiYvliqjorr7nva7mn5DkuKroj5zljZXpq5jkuq5cclxuXHRcdFx0aGlnaGxpZ2h0KGluZGV4ID0gdW5kZWZpbmVkKSB7XHJcblx0XHRcdFx0dGhpcy5oaWdobGlnaHRJbmRleCA9IGluZGV4ICE9PSB1bmRlZmluZWQgPyBpbmRleCA6IDk5OTk5O1xyXG5cdFx0XHR9LFxyXG5cdFx0XHQvLyDojrflj5bkuIvmi4noj5zljZXlhoXlrrnnmoTpq5jluqZcclxuXHRcdFx0Z2V0Q29udGVudEhlaWdodCgpIHtcclxuXHRcdFx0XHQvLyDov5nph4znmoTljp/nkIbkuLrvvIzlm6DkuLpkcm9wZG93bue7hOS7tuaYr+ebuOWvueWumuS9jeeahO+8jOWug+eahOS4i+aLieWHuuadpeeahOWGheWuue+8jOW/hemhu+e7meWumuS4gOS4qumrmOW6plxyXG5cdFx0XHRcdC8vIOaJjeiDveiuqemBrue9qeWNoOa7oeiPnOWNleS4gOS4i++8jOebtOWIsOWxj+W5leW6lemDqOeahOmrmOW6plxyXG5cdFx0XHRcdC8vIHRoaXMuJHUuc3lzKCnkuLp1Vmlld+WwgeijheeahOiOt+WPluiuvuWkh+S/oeaBr+eahOaWueazlVxyXG5cdFx0XHRcdGxldCB3aW5kb3dIZWlnaHQgPSB0aGlzLiR1LnN5cygpLndpbmRvd0hlaWdodDtcclxuXHRcdFx0XHR0aGlzLiR1R2V0UmVjdCgnLnUtZHJvcGRvd25fX21lbnUnKS50aGVuKHJlcyA9PiB7XHJcblx0XHRcdFx0XHQvLyDov5nph4zojrflj5bnmoTmmK9kcm9wZG93bueahOWwuuWvuO+8jOWcqEg15LiK77yMdW5pYXBw6I635Y+W5bC65a+45piv5pyJYnVn55qEKOS7peWJjeaPkOWHuuS/ruWkjei/h++8jOWQjuadpeWPiOWHuueOsOS6huatpGJ1Z++8jOebruWJjWh4Mi44LjEx54mI5pysKVxyXG5cdFx0XHRcdFx0Ly8gSDXnq69idWfooajnjrDkuLrlhYPntKDlsLrlr7jnmoR0b3DlgLzkuLrlr7zoiKrmoI/lupXpg6jliLDliLDlhYPntKDnmoTkuIrovrnmsr/nmoTot53nprvvvIzkvYbmmK/lhYPntKDnmoRib3R0b23lgLznoa7mmK/lr7zoiKrmoI/pobbpg6jliLDlhYPntKDlupXpg6jnmoTot53nprtcclxuXHRcdFx0XHRcdC8vIOS6jOiAheaYr+S6kuebuOefm+ebvueahO+8jOacrOi0qOWOn+WboOaYr0g156uv5a+86Iiq5qCP6Z2e5Y6f55Sf77yMdW5p55qE5byA5Y+R6ICF5aSn5oSP6YCg5oiQXHJcblx0XHRcdFx0XHQvLyDov5nph4zlj5boj5zljZXmoI/nmoRib3R0b27lgLzlkIjnkIbnmoTvvIzkuI3og73nlKhyZXMudG9w77yM5ZCm5YiZ6aG16Z2i5Lya6YCg5oiQ5rua5YqoXHJcblx0XHRcdFx0XHR0aGlzLmNvbnRlbnRIZWlnaHQgPSB3aW5kb3dIZWlnaHQgLSByZXMuYm90dG9tO1xyXG5cdFx0XHRcdH0pXHJcblx0XHRcdH1cclxuXHRcdH1cclxuXHR9XHJcbjwvc2NyaXB0PlxyXG5cclxuPHN0eWxlIHNjb3BlZCBsYW5nPVwic2Nzc1wiPlxyXG5cdEBpbXBvcnQgXCIuLi8uLi9saWJzL2Nzcy9zdHlsZS5jb21wb25lbnRzLnNjc3NcIjtcclxuXHJcblx0LnUtZHJvcGRvd24ge1xyXG5cdFx0ZmxleDogMTtcclxuXHRcdHdpZHRoOiAxMDAlO1xyXG5cdFx0cG9zaXRpb246IHJlbGF0aXZlO1xyXG5cclxuXHRcdCZfX21lbnUge1xyXG5cdFx0XHRAaW5jbHVkZSB2dWUtZmxleDtcclxuXHRcdFx0cG9zaXRpb246IHJlbGF0aXZlO1xyXG5cdFx0XHR6LWluZGV4OiAxMTtcclxuXHRcdFx0aGVpZ2h0OiA4MHJweDtcclxuXHJcblx0XHRcdCZfX2l0ZW0ge1xyXG5cdFx0XHRcdGZsZXg6IDE7XHJcblx0XHRcdFx0QGluY2x1ZGUgdnVlLWZsZXg7XHJcblx0XHRcdFx0anVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcblx0XHRcdFx0YWxpZ24taXRlbXM6IGNlbnRlcjtcclxuXHJcblx0XHRcdFx0Jl9fdGV4dCB7XHJcblx0XHRcdFx0XHRmb250LXNpemU6IDI4cnB4O1xyXG5cdFx0XHRcdFx0Y29sb3I6ICR1LWNvbnRlbnQtY29sb3I7XHJcblx0XHRcdFx0fVxyXG5cclxuXHRcdFx0XHQmX19hcnJvdyB7XHJcblx0XHRcdFx0XHRtYXJnaW4tbGVmdDogNnJweDtcclxuXHRcdFx0XHRcdHRyYW5zaXRpb246IHRyYW5zZm9ybSAuM3M7XHJcblx0XHRcdFx0XHRhbGlnbi1pdGVtczogY2VudGVyO1xyXG5cdFx0XHRcdFx0QGluY2x1ZGUgdnVlLWZsZXg7XHJcblxyXG5cdFx0XHRcdFx0Ji0tcm90YXRlIHtcclxuXHRcdFx0XHRcdFx0dHJhbnNmb3JtOiByb3RhdGUoMTgwZGVnKTtcclxuXHRcdFx0XHRcdH1cclxuXHRcdFx0XHR9XHJcblx0XHRcdH1cclxuXHRcdH1cclxuXHJcblx0XHQmX19jb250ZW50IHtcclxuXHRcdFx0cG9zaXRpb246IGFic29sdXRlO1xyXG5cdFx0XHR6LWluZGV4OiA4O1xyXG5cdFx0XHR3aWR0aDogMTAwJTtcclxuXHRcdFx0bGVmdDogMHB4O1xyXG5cdFx0XHRib3R0b206IDA7XHJcblx0XHRcdG92ZXJmbG93OiBoaWRkZW47XHJcblx0XHRcdFxyXG5cclxuXHRcdFx0Jl9fbWFzayB7XHJcblx0XHRcdFx0cG9zaXRpb246IGFic29sdXRlO1xyXG5cdFx0XHRcdHotaW5kZXg6IDk7XHJcblx0XHRcdFx0YmFja2dyb3VuZDogcmdiYSgwLCAwLCAwLCAuMyk7XHJcblx0XHRcdFx0d2lkdGg6IDEwMCU7XHJcblx0XHRcdFx0bGVmdDogMDtcclxuXHRcdFx0XHR0b3A6IDA7XHJcblx0XHRcdFx0Ym90dG9tOiAwO1xyXG5cdFx0XHR9XHJcblxyXG5cdFx0XHQmX19wb3B1cCB7XHJcblx0XHRcdFx0cG9zaXRpb246IHJlbGF0aXZlO1xyXG5cdFx0XHRcdHotaW5kZXg6IDEwO1xyXG5cdFx0XHRcdHRyYW5zaXRpb246IGFsbCAwLjNzO1xyXG5cdFx0XHRcdHRyYW5zZm9ybTogdHJhbnNsYXRlM0QoMCwgLTEwMCUsIDApO1xyXG5cdFx0XHRcdG92ZXJmbG93OiBoaWRkZW47XHJcblx0XHRcdH1cclxuXHRcdH1cclxuXHJcblx0fVxyXG48L3N0eWxlPlxyXG4iLCJpbXBvcnQgbW9kIGZyb20gXCItIUQ6XFxcXEhCdWlsZGVyWFxcXFxwbHVnaW5zXFxcXHVuaWFwcC1jbGlcXFxcbm9kZV9tb2R1bGVzXFxcXG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luXFxcXGRpc3RcXFxcbG9hZGVyLmpzPz9yZWYtLTgtb25lT2YtMS0wIUQ6XFxcXEhCdWlsZGVyWFxcXFxwbHVnaW5zXFxcXHVuaWFwcC1jbGlcXFxcbm9kZV9tb2R1bGVzXFxcXGNzcy1sb2FkZXJcXFxcZGlzdFxcXFxjanMuanM/P3JlZi0tOC1vbmVPZi0xLTEhRDpcXFxcSEJ1aWxkZXJYXFxcXHBsdWdpbnNcXFxcdW5pYXBwLWNsaVxcXFxub2RlX21vZHVsZXNcXFxcQGRjbG91ZGlvXFxcXHZ1ZS1jbGktcGx1Z2luLXVuaVxcXFxwYWNrYWdlc1xcXFx2dWUtbG9hZGVyXFxcXGxpYlxcXFxsb2FkZXJzXFxcXHN0eWxlUG9zdExvYWRlci5qcyFEOlxcXFxIQnVpbGRlclhcXFxccGx1Z2luc1xcXFx1bmlhcHAtY2xpXFxcXG5vZGVfbW9kdWxlc1xcXFxAZGNsb3VkaW9cXFxcdnVlLWNsaS1wbHVnaW4tdW5pXFxcXHBhY2thZ2VzXFxcXHdlYnBhY2stcHJlcHJvY2Vzcy1sb2FkZXJcXFxcaW5kZXguanM/P3JlZi0tOC1vbmVPZi0xLTIhRDpcXFxcSEJ1aWxkZXJYXFxcXHBsdWdpbnNcXFxcdW5pYXBwLWNsaVxcXFxub2RlX21vZHVsZXNcXFxccG9zdGNzcy1sb2FkZXJcXFxcc3JjXFxcXGluZGV4LmpzPz9yZWYtLTgtb25lT2YtMS0zIUQ6XFxcXEhCdWlsZGVyWFxcXFxwbHVnaW5zXFxcXHVuaWFwcC1jbGlcXFxcbm9kZV9tb2R1bGVzXFxcXHNhc3MtbG9hZGVyXFxcXGRpc3RcXFxcY2pzLmpzPz9yZWYtLTgtb25lT2YtMS00IUQ6XFxcXEhCdWlsZGVyWFxcXFxwbHVnaW5zXFxcXHVuaWFwcC1jbGlcXFxcbm9kZV9tb2R1bGVzXFxcXEBkY2xvdWRpb1xcXFx2dWUtY2xpLXBsdWdpbi11bmlcXFxccGFja2FnZXNcXFxcd2VicGFjay1wcmVwcm9jZXNzLWxvYWRlclxcXFxpbmRleC5qcz8/cmVmLS04LW9uZU9mLTEtNSFEOlxcXFxIQnVpbGRlclhcXFxccGx1Z2luc1xcXFx1bmlhcHAtY2xpXFxcXG5vZGVfbW9kdWxlc1xcXFxAZGNsb3VkaW9cXFxcdnVlLWNsaS1wbHVnaW4tdW5pXFxcXHBhY2thZ2VzXFxcXHZ1ZS1sb2FkZXJcXFxcbGliXFxcXGluZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhRDpcXFxcSEJ1aWxkZXJYXFxcXHBsdWdpbnNcXFxcdW5pYXBwLWNsaVxcXFxub2RlX21vZHVsZXNcXFxcQGRjbG91ZGlvXFxcXHdlYnBhY2stdW5pLW1wLWxvYWRlclxcXFxsaWJcXFxcc3R5bGUuanMhLi91LWRyb3Bkb3duLnZ1ZT92dWUmdHlwZT1zdHlsZSZpbmRleD0wJmlkPTAzNDBiYjYwJnNjb3BlZD10cnVlJmxhbmc9c2NzcyZcIjsgZXhwb3J0IGRlZmF1bHQgbW9kOyBleHBvcnQgKiBmcm9tIFwiLSFEOlxcXFxIQnVpbGRlclhcXFxccGx1Z2luc1xcXFx1bmlhcHAtY2xpXFxcXG5vZGVfbW9kdWxlc1xcXFxtaW5pLWNzcy1leHRyYWN0LXBsdWdpblxcXFxkaXN0XFxcXGxvYWRlci5qcz8/cmVmLS04LW9uZU9mLTEtMCFEOlxcXFxIQnVpbGRlclhcXFxccGx1Z2luc1xcXFx1bmlhcHAtY2xpXFxcXG5vZGVfbW9kdWxlc1xcXFxjc3MtbG9hZGVyXFxcXGRpc3RcXFxcY2pzLmpzPz9yZWYtLTgtb25lT2YtMS0xIUQ6XFxcXEhCdWlsZGVyWFxcXFxwbHVnaW5zXFxcXHVuaWFwcC1jbGlcXFxcbm9kZV9tb2R1bGVzXFxcXEBkY2xvdWRpb1xcXFx2dWUtY2xpLXBsdWdpbi11bmlcXFxccGFja2FnZXNcXFxcdnVlLWxvYWRlclxcXFxsaWJcXFxcbG9hZGVyc1xcXFxzdHlsZVBvc3RMb2FkZXIuanMhRDpcXFxcSEJ1aWxkZXJYXFxcXHBsdWdpbnNcXFxcdW5pYXBwLWNsaVxcXFxub2RlX21vZHVsZXNcXFxcQGRjbG91ZGlvXFxcXHZ1ZS1jbGktcGx1Z2luLXVuaVxcXFxwYWNrYWdlc1xcXFx3ZWJwYWNrLXByZXByb2Nlc3MtbG9hZGVyXFxcXGluZGV4LmpzPz9yZWYtLTgtb25lT2YtMS0yIUQ6XFxcXEhCdWlsZGVyWFxcXFxwbHVnaW5zXFxcXHVuaWFwcC1jbGlcXFxcbm9kZV9tb2R1bGVzXFxcXHBvc3Rjc3MtbG9hZGVyXFxcXHNyY1xcXFxpbmRleC5qcz8/cmVmLS04LW9uZU9mLTEtMyFEOlxcXFxIQnVpbGRlclhcXFxccGx1Z2luc1xcXFx1bmlhcHAtY2xpXFxcXG5vZGVfbW9kdWxlc1xcXFxzYXNzLWxvYWRlclxcXFxkaXN0XFxcXGNqcy5qcz8/cmVmLS04LW9uZU9mLTEtNCFEOlxcXFxIQnVpbGRlclhcXFxccGx1Z2luc1xcXFx1bmlhcHAtY2xpXFxcXG5vZGVfbW9kdWxlc1xcXFxAZGNsb3VkaW9cXFxcdnVlLWNsaS1wbHVnaW4tdW5pXFxcXHBhY2thZ2VzXFxcXHdlYnBhY2stcHJlcHJvY2Vzcy1sb2FkZXJcXFxcaW5kZXguanM/P3JlZi0tOC1vbmVPZi0xLTUhRDpcXFxcSEJ1aWxkZXJYXFxcXHBsdWdpbnNcXFxcdW5pYXBwLWNsaVxcXFxub2RlX21vZHVsZXNcXFxcQGRjbG91ZGlvXFxcXHZ1ZS1jbGktcGx1Z2luLXVuaVxcXFxwYWNrYWdlc1xcXFx2dWUtbG9hZGVyXFxcXGxpYlxcXFxpbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIUQ6XFxcXEhCdWlsZGVyWFxcXFxwbHVnaW5zXFxcXHVuaWFwcC1jbGlcXFxcbm9kZV9tb2R1bGVzXFxcXEBkY2xvdWRpb1xcXFx3ZWJwYWNrLXVuaS1tcC1sb2FkZXJcXFxcbGliXFxcXHN0eWxlLmpzIS4vdS1kcm9wZG93bi52dWU/dnVlJnR5cGU9c3R5bGUmaW5kZXg9MCZpZD0wMzQwYmI2MCZzY29wZWQ9dHJ1ZSZsYW5nPXNjc3MmXCIiLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW5cbiAgICBpZihtb2R1bGUuaG90KSB7XG4gICAgICAvLyAxNjMwOTM1MDAyMzAxXG4gICAgICB2YXIgY3NzUmVsb2FkID0gcmVxdWlyZShcIkQ6L0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL21pbmktY3NzLWV4dHJhY3QtcGx1Z2luL2Rpc3QvaG1yL2hvdE1vZHVsZVJlcGxhY2VtZW50LmpzXCIpKG1vZHVsZS5pZCwge1wiaG1yXCI6dHJ1ZSxcInB1YmxpY1BhdGhcIjpcIi4uLy4uL1wiLFwibG9jYWxzXCI6ZmFsc2V9KTtcbiAgICAgIG1vZHVsZS5ob3QuZGlzcG9zZShjc3NSZWxvYWQpO1xuICAgICAgbW9kdWxlLmhvdC5hY2NlcHQodW5kZWZpbmVkLCBjc3NSZWxvYWQpO1xuICAgIH1cbiAgIl0sInNvdXJjZVJvb3QiOiIifQ==
;(global["webpackJsonp"] = global["webpackJsonp"] || []).push([
    'uview-ui/components/u-dropdown/u-dropdown-create-component',
    {
        'uview-ui/components/u-dropdown/u-dropdown-create-component':(function(module, exports, __webpack_require__){
            __webpack_require__('1')['createComponent'](__webpack_require__(262))
        })
    },
    [['uview-ui/components/u-dropdown/u-dropdown-create-component']]
]);
