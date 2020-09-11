/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./backend.js":
/*!********************!*\
  !*** ./backend.js ***!
  \********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var shadow_play_server_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! shadow-play/server.mjs */ \"./node_modules/shadow-play/server.mjs\");\n/* harmony import */ var _src_App_vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./src/App.vue */ \"./src/App.vue\");\n\n\n\nObject(shadow_play_server_mjs__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(3001, [_src_App_vue__WEBPACK_IMPORTED_MODULE_1__[\"default\"]]);\n\n//# sourceURL=webpack:///./backend.js?");

/***/ }),

/***/ "./node_modules/shadow-play/index.js":
/*!*******************************************!*\
  !*** ./node_modules/shadow-play/index.js ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return shadowPlay; });\nfunction shadowPlay(component) {\n    return component;\n}\n\n//# sourceURL=webpack:///./node_modules/shadow-play/index.js?");

/***/ }),

/***/ "./node_modules/shadow-play/server.mjs":
/*!*********************************************!*\
  !*** ./node_modules/shadow-play/server.mjs ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(__webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return startServer; });\n/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! express */ \"express\");\n\n\nfunction startServer(port, componentList) {\n    const app = express__WEBPACK_IMPORTED_MODULE_0__();\n    app.listen(port, () => console.log('server start'));\n}\n\n//# sourceURL=webpack:///./node_modules/shadow-play/server.mjs?");

/***/ }),

/***/ "./node_modules/vue-loader/dist/index.js?!./src/App.vue?vue&type=script&lang=js":
/*!**************************************************************************************!*\
  !*** ./node_modules/vue-loader/dist??ref--6-0!./src/App.vue?vue&type=script&lang=js ***!
  \**************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var shadow_play__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! shadow-play */ \"./node_modules/shadow-play/index.js\");\n/* harmony import */ var _components_Control_vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/Control.vue */ \"./src/components/Control.vue\");\n/* harmony import */ var _components_Post_vue__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/Post.vue */ \"./src/components/Post.vue\");\n\n\n\n\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Object(shadow_play__WEBPACK_IMPORTED_MODULE_0__[\"default\"])({\n  name: \"App\",\n  components: {\n    Control: _components_Control_vue__WEBPACK_IMPORTED_MODULE_1__[\"default\"],\n    Post: _components_Post_vue__WEBPACK_IMPORTED_MODULE_2__[\"default\"],\n  },\n  data() {\n    return {\n      postList: [\n        { id: 0, userName: \"cowsay\", content: \"Hello, world!\" },\n        { id: 1, userName: \"cowsay\", content: \"It's me again.\" },\n      ],\n    };\n  },\n  methods: {\n    onPublishPost({ userName, postContent }) {\n      console.log(\"user: \" + userName);\n      console.log(\"content: \" + postContent);\n    },\n    onSearchUser({ userName }) {\n      console.log(\"seraching: \" + userName);\n    },\n  },\n}));\n\n\n//# sourceURL=webpack:///./src/App.vue?./node_modules/vue-loader/dist??ref--6-0");

/***/ }),

/***/ "./node_modules/vue-loader/dist/index.js?!./src/components/Control.vue?vue&type=script&lang=js":
/*!*****************************************************************************************************!*\
  !*** ./node_modules/vue-loader/dist??ref--6-0!./src/components/Control.vue?vue&type=script&lang=js ***!
  \*****************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\n  name: \"Control\",\n  data() {\n    return {\n      action: \"search\",\n      userName: \"\",\n      postContent: \"\",\n    };\n  },\n  methods: {\n    discardPost() {\n      this.action = \"search\";\n      this.postContent = \"\";\n    },\n  },\n});\n\n\n//# sourceURL=webpack:///./src/components/Control.vue?./node_modules/vue-loader/dist??ref--6-0");

/***/ }),

/***/ "./node_modules/vue-loader/dist/index.js?!./src/components/Post.vue?vue&type=script&lang=js":
/*!**************************************************************************************************!*\
  !*** ./node_modules/vue-loader/dist??ref--6-0!./src/components/Post.vue?vue&type=script&lang=js ***!
  \**************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\n  name: \"Post\",\n  props: {\n    userName: String,\n    postContent: String,\n  },\n});\n\n\n//# sourceURL=webpack:///./src/components/Post.vue?./node_modules/vue-loader/dist??ref--6-0");

/***/ }),

/***/ "./node_modules/vue-loader/dist/templateLoader.js?!./node_modules/vue-loader/dist/index.js?!./src/App.vue?vue&type=template&id=7ba5bd90&bindings={}":
/*!*****************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/dist/templateLoader.js??ref--5!./node_modules/vue-loader/dist??ref--6-0!./src/App.vue?vue&type=template&id=7ba5bd90&bindings={} ***!
  \*****************************************************************************************************************************************************************/
/*! exports provided: render */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"render\", function() { return render; });\n/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ \"vue\");\n/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(vue__WEBPACK_IMPORTED_MODULE_0__);\n\n\nconst _hoisted_1 = { class: \"columns is-centered\" }\nconst _hoisted_2 = { class: \"column is-8\" }\nconst _hoisted_3 = { class: \"section\" }\nconst _hoisted_4 = { class: \"container\" }\nconst _hoisted_5 = { class: \"section\" }\nconst _hoisted_6 = { class: \"container\" }\n\nfunction render(_ctx, _cache, $props, $setup, $data, $options) {\n  const _component_Control = Object(vue__WEBPACK_IMPORTED_MODULE_0__[\"resolveComponent\"])(\"Control\")\n  const _component_Post = Object(vue__WEBPACK_IMPORTED_MODULE_0__[\"resolveComponent\"])(\"Post\")\n\n  return (Object(vue__WEBPACK_IMPORTED_MODULE_0__[\"openBlock\"])(), Object(vue__WEBPACK_IMPORTED_MODULE_0__[\"createBlock\"])(\"div\", _hoisted_1, [\n    Object(vue__WEBPACK_IMPORTED_MODULE_0__[\"createVNode\"])(\"div\", _hoisted_2, [\n      Object(vue__WEBPACK_IMPORTED_MODULE_0__[\"createVNode\"])(\"div\", _hoisted_3, [\n        Object(vue__WEBPACK_IMPORTED_MODULE_0__[\"createVNode\"])(\"div\", _hoisted_4, [\n          Object(vue__WEBPACK_IMPORTED_MODULE_0__[\"createVNode\"])(_component_Control, {\n            \"onPublish-post\": _ctx.onPublishPost,\n            \"onSearch-user\": _ctx.onSearchUser\n          }, null, 8 /* PROPS */, [\"onPublish-post\", \"onSearch-user\"])\n        ])\n      ]),\n      Object(vue__WEBPACK_IMPORTED_MODULE_0__[\"createVNode\"])(\"div\", _hoisted_5, [\n        Object(vue__WEBPACK_IMPORTED_MODULE_0__[\"createVNode\"])(\"div\", _hoisted_6, [\n          (Object(vue__WEBPACK_IMPORTED_MODULE_0__[\"openBlock\"])(true), Object(vue__WEBPACK_IMPORTED_MODULE_0__[\"createBlock\"])(vue__WEBPACK_IMPORTED_MODULE_0__[\"Fragment\"], null, Object(vue__WEBPACK_IMPORTED_MODULE_0__[\"renderList\"])(_ctx.postList, (post) => {\n            return (Object(vue__WEBPACK_IMPORTED_MODULE_0__[\"openBlock\"])(), Object(vue__WEBPACK_IMPORTED_MODULE_0__[\"createBlock\"])(_component_Post, {\n              key: post.id,\n              userName: post.userName,\n              postContent: post.content\n            }, null, 8 /* PROPS */, [\"userName\", \"postContent\"]))\n          }), 128 /* KEYED_FRAGMENT */))\n        ])\n      ])\n    ])\n  ]))\n}\n\n//# sourceURL=webpack:///./src/App.vue?./node_modules/vue-loader/dist/templateLoader.js??ref--5!./node_modules/vue-loader/dist??ref--6-0");

/***/ }),

/***/ "./node_modules/vue-loader/dist/templateLoader.js?!./node_modules/vue-loader/dist/index.js?!./src/components/Control.vue?vue&type=template&id=2fa0a0dd&bindings={\"action\":\"data\",\"userName\":\"data\",\"postContent\":\"data\",\"discardPost\":\"options\"}":
/*!**************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/dist/templateLoader.js??ref--5!./node_modules/vue-loader/dist??ref--6-0!./src/components/Control.vue?vue&type=template&id=2fa0a0dd&bindings={"action":"data","userName":"data","postContent":"data","discardPost":"options"} ***!
  \**************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"render\", function() { return render; });\n/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ \"vue\");\n/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(vue__WEBPACK_IMPORTED_MODULE_0__);\n\n\nconst _hoisted_1 = { class: \"field\" }\nconst _hoisted_2 = /*#__PURE__*/Object(vue__WEBPACK_IMPORTED_MODULE_0__[\"createVNode\"])(\"label\", { class: \"label\" }, \"User name\", -1 /* HOISTED */)\nconst _hoisted_3 = { class: \"control\" }\nconst _hoisted_4 = {\n  key: 0,\n  class: \"field is-grouped\"\n}\nconst _hoisted_5 = { class: \"control\" }\nconst _hoisted_6 = { class: \"control\" }\nconst _hoisted_7 = {\n  key: 1,\n  class: \"field\"\n}\nconst _hoisted_8 = /*#__PURE__*/Object(vue__WEBPACK_IMPORTED_MODULE_0__[\"createVNode\"])(\"label\", { class: \"label\" }, \"Post\", -1 /* HOISTED */)\nconst _hoisted_9 = { class: \"control\" }\nconst _hoisted_10 = {\n  key: 2,\n  class: \"field is-grouped\"\n}\nconst _hoisted_11 = { class: \"control\" }\nconst _hoisted_12 = { class: \"control\" }\n\nfunction render(_ctx, _cache, $props, $setup, $data, $options) {\n  return (Object(vue__WEBPACK_IMPORTED_MODULE_0__[\"openBlock\"])(), Object(vue__WEBPACK_IMPORTED_MODULE_0__[\"createBlock\"])(\"form\", null, [\n    Object(vue__WEBPACK_IMPORTED_MODULE_0__[\"createVNode\"])(\"div\", _hoisted_1, [\n      _hoisted_2,\n      Object(vue__WEBPACK_IMPORTED_MODULE_0__[\"createVNode\"])(\"div\", _hoisted_3, [\n        Object(vue__WEBPACK_IMPORTED_MODULE_0__[\"withDirectives\"])(Object(vue__WEBPACK_IMPORTED_MODULE_0__[\"createVNode\"])(\"input\", {\n          type: \"text\",\n          class: \"input\",\n          \"onUpdate:modelValue\": _cache[1] || (_cache[1] = $event => ($data.userName = $event))\n        }, null, 512 /* NEED_PATCH */), [\n          [vue__WEBPACK_IMPORTED_MODULE_0__[\"vModelText\"], $data.userName]\n        ])\n      ])\n    ]),\n    ($data.action != 'create')\n      ? (Object(vue__WEBPACK_IMPORTED_MODULE_0__[\"openBlock\"])(), Object(vue__WEBPACK_IMPORTED_MODULE_0__[\"createBlock\"])(\"div\", _hoisted_4, [\n          Object(vue__WEBPACK_IMPORTED_MODULE_0__[\"createVNode\"])(\"div\", _hoisted_5, [\n            Object(vue__WEBPACK_IMPORTED_MODULE_0__[\"createVNode\"])(\"button\", {\n              class: \"button is-link is-light\",\n              disabled: $data.userName == '',\n              onClick: _cache[2] || (_cache[2] = Object(vue__WEBPACK_IMPORTED_MODULE_0__[\"withModifiers\"])($event => (_ctx.$emit('search-user', {userName: $data.userName})), [\"prevent\"]))\n            }, \"Search\", 8 /* PROPS */, [\"disabled\"])\n          ]),\n          Object(vue__WEBPACK_IMPORTED_MODULE_0__[\"createVNode\"])(\"div\", _hoisted_6, [\n            Object(vue__WEBPACK_IMPORTED_MODULE_0__[\"createVNode\"])(\"button\", {\n              class: \"button is-link\",\n              onClick: _cache[3] || (_cache[3] = Object(vue__WEBPACK_IMPORTED_MODULE_0__[\"withModifiers\"])($event => ($data.action = 'create'), [\"prevent\"])),\n              disabled: $data.userName == ''\n            }, \"Write\", 8 /* PROPS */, [\"disabled\"])\n          ])\n        ]))\n      : Object(vue__WEBPACK_IMPORTED_MODULE_0__[\"createCommentVNode\"])(\"v-if\", true),\n    ($data.action == 'create')\n      ? (Object(vue__WEBPACK_IMPORTED_MODULE_0__[\"openBlock\"])(), Object(vue__WEBPACK_IMPORTED_MODULE_0__[\"createBlock\"])(\"div\", _hoisted_7, [\n          _hoisted_8,\n          Object(vue__WEBPACK_IMPORTED_MODULE_0__[\"createVNode\"])(\"div\", _hoisted_9, [\n            Object(vue__WEBPACK_IMPORTED_MODULE_0__[\"withDirectives\"])(Object(vue__WEBPACK_IMPORTED_MODULE_0__[\"createVNode\"])(\"textarea\", {\n              class: \"textarea\",\n              placeholder: \"Write your post\",\n              \"onUpdate:modelValue\": _cache[4] || (_cache[4] = $event => ($data.postContent = $event))\n            }, null, 512 /* NEED_PATCH */), [\n              [vue__WEBPACK_IMPORTED_MODULE_0__[\"vModelText\"], $data.postContent]\n            ])\n          ])\n        ]))\n      : Object(vue__WEBPACK_IMPORTED_MODULE_0__[\"createCommentVNode\"])(\"v-if\", true),\n    ($data.action == 'create')\n      ? (Object(vue__WEBPACK_IMPORTED_MODULE_0__[\"openBlock\"])(), Object(vue__WEBPACK_IMPORTED_MODULE_0__[\"createBlock\"])(\"div\", _hoisted_10, [\n          Object(vue__WEBPACK_IMPORTED_MODULE_0__[\"createVNode\"])(\"div\", _hoisted_11, [\n            Object(vue__WEBPACK_IMPORTED_MODULE_0__[\"createVNode\"])(\"button\", {\n              class: \"button is-link is-light\",\n              onClick: _cache[5] || (_cache[5] = Object(vue__WEBPACK_IMPORTED_MODULE_0__[\"withModifiers\"])((...args) => ($options.discardPost(...args)), [\"prevent\"]))\n            }, \"Discard\")\n          ]),\n          Object(vue__WEBPACK_IMPORTED_MODULE_0__[\"createVNode\"])(\"div\", _hoisted_12, [\n            Object(vue__WEBPACK_IMPORTED_MODULE_0__[\"createVNode\"])(\"button\", {\n              class: \"button is-link\",\n              onClick: _cache[6] || (_cache[6] = Object(vue__WEBPACK_IMPORTED_MODULE_0__[\"withModifiers\"])($event => (_ctx.$emit('publish-post', {userName: $data.userName, postContent: $data.postContent})), [\"prevent\"])),\n              disabled: $data.userName == '' || $data.postContent == ''\n            }, \"Publish\", 8 /* PROPS */, [\"disabled\"])\n          ])\n        ]))\n      : Object(vue__WEBPACK_IMPORTED_MODULE_0__[\"createCommentVNode\"])(\"v-if\", true)\n  ]))\n}\n\n//# sourceURL=webpack:///./src/components/Control.vue?./node_modules/vue-loader/dist/templateLoader.js??ref--5!./node_modules/vue-loader/dist??ref--6-0");

/***/ }),

/***/ "./node_modules/vue-loader/dist/templateLoader.js?!./node_modules/vue-loader/dist/index.js?!./src/components/Post.vue?vue&type=template&id=0335f4d0&bindings={\"userName\":\"props\",\"postContent\":\"props\"}":
/*!*********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/dist/templateLoader.js??ref--5!./node_modules/vue-loader/dist??ref--6-0!./src/components/Post.vue?vue&type=template&id=0335f4d0&bindings={"userName":"props","postContent":"props"} ***!
  \*********************************************************************************************************************************************************************************************************************/
/*! exports provided: render */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"render\", function() { return render; });\n/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ \"vue\");\n/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(vue__WEBPACK_IMPORTED_MODULE_0__);\n\n\nconst _hoisted_1 = { class: \"box\" }\nconst _hoisted_2 = { class: \"title is-4\" }\nconst _hoisted_3 = /*#__PURE__*/Object(vue__WEBPACK_IMPORTED_MODULE_0__[\"createVNode\"])(\"span\", { class: \"has-text-grey\" }, \"says:\", -1 /* HOISTED */)\nconst _hoisted_4 = { class: \"content\" }\n\nfunction render(_ctx, _cache, $props, $setup, $data, $options) {\n  return (Object(vue__WEBPACK_IMPORTED_MODULE_0__[\"openBlock\"])(), Object(vue__WEBPACK_IMPORTED_MODULE_0__[\"createBlock\"])(\"div\", _hoisted_1, [\n    Object(vue__WEBPACK_IMPORTED_MODULE_0__[\"createVNode\"])(\"h3\", _hoisted_2, [\n      Object(vue__WEBPACK_IMPORTED_MODULE_0__[\"createTextVNode\"])(Object(vue__WEBPACK_IMPORTED_MODULE_0__[\"toDisplayString\"])($props.userName) + \" \", 1 /* TEXT */),\n      _hoisted_3\n    ]),\n    Object(vue__WEBPACK_IMPORTED_MODULE_0__[\"createVNode\"])(\"div\", _hoisted_4, [\n      Object(vue__WEBPACK_IMPORTED_MODULE_0__[\"createVNode\"])(\"p\", null, Object(vue__WEBPACK_IMPORTED_MODULE_0__[\"toDisplayString\"])($props.postContent), 1 /* TEXT */)\n    ])\n  ]))\n}\n\n//# sourceURL=webpack:///./src/components/Post.vue?./node_modules/vue-loader/dist/templateLoader.js??ref--5!./node_modules/vue-loader/dist??ref--6-0");

/***/ }),

/***/ "./src/App.vue":
/*!*********************!*\
  !*** ./src/App.vue ***!
  \*********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _App_vue_vue_type_template_id_7ba5bd90_bindings___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./App.vue?vue&type=template&id=7ba5bd90&bindings={} */ \"./src/App.vue?vue&type=template&id=7ba5bd90&bindings={}\");\n/* harmony import */ var _App_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./App.vue?vue&type=script&lang=js */ \"./src/App.vue?vue&type=script&lang=js\");\n/* empty/unused harmony star reexport */\n\n\n_App_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"].render = _App_vue_vue_type_template_id_7ba5bd90_bindings___WEBPACK_IMPORTED_MODULE_0__[\"render\"]\n_App_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"].__file = \"src/App.vue\"\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (_App_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"]);\n\n//# sourceURL=webpack:///./src/App.vue?");

/***/ }),

/***/ "./src/App.vue?vue&type=script&lang=js":
/*!*********************************************!*\
  !*** ./src/App.vue?vue&type=script&lang=js ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_vue_loader_dist_index_js_ref_6_0_App_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../node_modules/vue-loader/dist??ref--6-0!./App.vue?vue&type=script&lang=js */ \"./node_modules/vue-loader/dist/index.js?!./src/App.vue?vue&type=script&lang=js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return _node_modules_vue_loader_dist_index_js_ref_6_0_App_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"]; });\n\n/* empty/unused harmony star reexport */ \n\n//# sourceURL=webpack:///./src/App.vue?");

/***/ }),

/***/ "./src/App.vue?vue&type=template&id=7ba5bd90&bindings={}":
/*!***************************************************************!*\
  !*** ./src/App.vue?vue&type=template&id=7ba5bd90&bindings={} ***!
  \***************************************************************/
/*! exports provided: render */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_vue_loader_dist_templateLoader_js_ref_5_node_modules_vue_loader_dist_index_js_ref_6_0_App_vue_vue_type_template_id_7ba5bd90_bindings___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../node_modules/vue-loader/dist/templateLoader.js??ref--5!../node_modules/vue-loader/dist??ref--6-0!./App.vue?vue&type=template&id=7ba5bd90&bindings={} */ \"./node_modules/vue-loader/dist/templateLoader.js?!./node_modules/vue-loader/dist/index.js?!./src/App.vue?vue&type=template&id=7ba5bd90&bindings={}\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"render\", function() { return _node_modules_vue_loader_dist_templateLoader_js_ref_5_node_modules_vue_loader_dist_index_js_ref_6_0_App_vue_vue_type_template_id_7ba5bd90_bindings___WEBPACK_IMPORTED_MODULE_0__[\"render\"]; });\n\n\n\n//# sourceURL=webpack:///./src/App.vue?");

/***/ }),

/***/ "./src/components/Control.vue":
/*!************************************!*\
  !*** ./src/components/Control.vue ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _Control_vue_vue_type_template_id_2fa0a0dd_bindings_action_data_userName_data_postContent_data_discardPost_options___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Control.vue?vue&type=template&id=2fa0a0dd&bindings={\"action\":\"data\",\"userName\":\"data\",\"postContent\":\"data\",\"discardPost\":\"options\"} */ \"./src/components/Control.vue?vue&type=template&id=2fa0a0dd&bindings={\\\"action\\\":\\\"data\\\",\\\"userName\\\":\\\"data\\\",\\\"postContent\\\":\\\"data\\\",\\\"discardPost\\\":\\\"options\\\"}\");\n/* harmony import */ var _Control_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Control.vue?vue&type=script&lang=js */ \"./src/components/Control.vue?vue&type=script&lang=js\");\n/* empty/unused harmony star reexport */\n\n\n_Control_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"].render = _Control_vue_vue_type_template_id_2fa0a0dd_bindings_action_data_userName_data_postContent_data_discardPost_options___WEBPACK_IMPORTED_MODULE_0__[\"render\"]\n_Control_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"].__file = \"src/components/Control.vue\"\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (_Control_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"]);\n\n//# sourceURL=webpack:///./src/components/Control.vue?");

/***/ }),

/***/ "./src/components/Control.vue?vue&type=script&lang=js":
/*!************************************************************!*\
  !*** ./src/components/Control.vue?vue&type=script&lang=js ***!
  \************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_vue_loader_dist_index_js_ref_6_0_Control_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/vue-loader/dist??ref--6-0!./Control.vue?vue&type=script&lang=js */ \"./node_modules/vue-loader/dist/index.js?!./src/components/Control.vue?vue&type=script&lang=js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return _node_modules_vue_loader_dist_index_js_ref_6_0_Control_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"]; });\n\n/* empty/unused harmony star reexport */ \n\n//# sourceURL=webpack:///./src/components/Control.vue?");

/***/ }),

/***/ "./src/components/Control.vue?vue&type=template&id=2fa0a0dd&bindings={\"action\":\"data\",\"userName\":\"data\",\"postContent\":\"data\",\"discardPost\":\"options\"}":
/*!************************************************************************************************************************************************************!*\
  !*** ./src/components/Control.vue?vue&type=template&id=2fa0a0dd&bindings={"action":"data","userName":"data","postContent":"data","discardPost":"options"} ***!
  \************************************************************************************************************************************************************/
/*! exports provided: render */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_vue_loader_dist_templateLoader_js_ref_5_node_modules_vue_loader_dist_index_js_ref_6_0_Control_vue_vue_type_template_id_2fa0a0dd_bindings_action_data_userName_data_postContent_data_discardPost_options___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/vue-loader/dist/templateLoader.js??ref--5!../../node_modules/vue-loader/dist??ref--6-0!./Control.vue?vue&type=template&id=2fa0a0dd&bindings={\"action\":\"data\",\"userName\":\"data\",\"postContent\":\"data\",\"discardPost\":\"options\"} */ \"./node_modules/vue-loader/dist/templateLoader.js?!./node_modules/vue-loader/dist/index.js?!./src/components/Control.vue?vue&type=template&id=2fa0a0dd&bindings={\\\"action\\\":\\\"data\\\",\\\"userName\\\":\\\"data\\\",\\\"postContent\\\":\\\"data\\\",\\\"discardPost\\\":\\\"options\\\"}\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"render\", function() { return _node_modules_vue_loader_dist_templateLoader_js_ref_5_node_modules_vue_loader_dist_index_js_ref_6_0_Control_vue_vue_type_template_id_2fa0a0dd_bindings_action_data_userName_data_postContent_data_discardPost_options___WEBPACK_IMPORTED_MODULE_0__[\"render\"]; });\n\n\n\n//# sourceURL=webpack:///./src/components/Control.vue?");

/***/ }),

/***/ "./src/components/Post.vue":
/*!*********************************!*\
  !*** ./src/components/Post.vue ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _Post_vue_vue_type_template_id_0335f4d0_bindings_userName_props_postContent_props___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Post.vue?vue&type=template&id=0335f4d0&bindings={\"userName\":\"props\",\"postContent\":\"props\"} */ \"./src/components/Post.vue?vue&type=template&id=0335f4d0&bindings={\\\"userName\\\":\\\"props\\\",\\\"postContent\\\":\\\"props\\\"}\");\n/* harmony import */ var _Post_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Post.vue?vue&type=script&lang=js */ \"./src/components/Post.vue?vue&type=script&lang=js\");\n/* empty/unused harmony star reexport */\n\n\n_Post_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"].render = _Post_vue_vue_type_template_id_0335f4d0_bindings_userName_props_postContent_props___WEBPACK_IMPORTED_MODULE_0__[\"render\"]\n_Post_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"].__file = \"src/components/Post.vue\"\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (_Post_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"]);\n\n//# sourceURL=webpack:///./src/components/Post.vue?");

/***/ }),

/***/ "./src/components/Post.vue?vue&type=script&lang=js":
/*!*********************************************************!*\
  !*** ./src/components/Post.vue?vue&type=script&lang=js ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_vue_loader_dist_index_js_ref_6_0_Post_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/vue-loader/dist??ref--6-0!./Post.vue?vue&type=script&lang=js */ \"./node_modules/vue-loader/dist/index.js?!./src/components/Post.vue?vue&type=script&lang=js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return _node_modules_vue_loader_dist_index_js_ref_6_0_Post_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"]; });\n\n/* empty/unused harmony star reexport */ \n\n//# sourceURL=webpack:///./src/components/Post.vue?");

/***/ }),

/***/ "./src/components/Post.vue?vue&type=template&id=0335f4d0&bindings={\"userName\":\"props\",\"postContent\":\"props\"}":
/*!*******************************************************************************************************************!*\
  !*** ./src/components/Post.vue?vue&type=template&id=0335f4d0&bindings={"userName":"props","postContent":"props"} ***!
  \*******************************************************************************************************************/
/*! exports provided: render */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_vue_loader_dist_templateLoader_js_ref_5_node_modules_vue_loader_dist_index_js_ref_6_0_Post_vue_vue_type_template_id_0335f4d0_bindings_userName_props_postContent_props___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/vue-loader/dist/templateLoader.js??ref--5!../../node_modules/vue-loader/dist??ref--6-0!./Post.vue?vue&type=template&id=0335f4d0&bindings={\"userName\":\"props\",\"postContent\":\"props\"} */ \"./node_modules/vue-loader/dist/templateLoader.js?!./node_modules/vue-loader/dist/index.js?!./src/components/Post.vue?vue&type=template&id=0335f4d0&bindings={\\\"userName\\\":\\\"props\\\",\\\"postContent\\\":\\\"props\\\"}\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"render\", function() { return _node_modules_vue_loader_dist_templateLoader_js_ref_5_node_modules_vue_loader_dist_index_js_ref_6_0_Post_vue_vue_type_template_id_0335f4d0_bindings_userName_props_postContent_props___WEBPACK_IMPORTED_MODULE_0__[\"render\"]; });\n\n\n\n//# sourceURL=webpack:///./src/components/Post.vue?");

/***/ }),

/***/ 0:
/*!**************************!*\
  !*** multi ./backend.js ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__(/*! ./backend.js */\"./backend.js\");\n\n\n//# sourceURL=webpack:///multi_./backend.js?");

/***/ }),

/***/ "express":
/*!**************************!*\
  !*** external "express" ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"express\");\n\n//# sourceURL=webpack:///external_%22express%22?");

/***/ }),

/***/ "vue":
/*!**********************!*\
  !*** external "vue" ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"vue\");\n\n//# sourceURL=webpack:///external_%22vue%22?");

/***/ })

/******/ });