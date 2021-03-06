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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/brightness.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/brightness.js":
/*!***************************!*\
  !*** ./src/brightness.js ***!
  \***************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _style_brightness_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style/brightness.css */ "./src/style/brightness.css");
/* harmony import */ var _style_brightness_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_style_brightness_css__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _brightness_main__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./brightness/main */ "./src/brightness/main.js");



// 处理夜间模式以及可视化交互逻辑



/***/ }),

/***/ "./src/brightness/build_main_btn.js":
/*!******************************************!*\
  !*** ./src/brightness/build_main_btn.js ***!
  \******************************************/
/*! exports provided: default, innerBox, moveBar, innerMoveBar, switchBar, canMove */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "innerBox", function() { return innerBox; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "moveBar", function() { return moveBar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "innerMoveBar", function() { return innerMoveBar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "switchBar", function() { return switchBar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "canMove", function() { return canMove; });
/* harmony import */ var _utils_create_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils/create_element */ "./src/utils/create_element.js");

/**
 * 构建主按钮
 */

const mainBtn = Object(_utils_create_element__WEBPACK_IMPORTED_MODULE_0__["h"])('div', { class: 'main__btn__' },
  [
    Object(_utils_create_element__WEBPACK_IMPORTED_MODULE_0__["h"])('div', { class: 'inner_box', style: 'display:none;' }, [
      Object(_utils_create_element__WEBPACK_IMPORTED_MODULE_0__["h"])('div', { class: 'switch' }, ['off']),
      Object(_utils_create_element__WEBPACK_IMPORTED_MODULE_0__["h"])('div', { class: 'can_move' }, ['m']),
      Object(_utils_create_element__WEBPACK_IMPORTED_MODULE_0__["h"])('div', { class: 'in_the_inner_box_left' }, [
        Object(_utils_create_element__WEBPACK_IMPORTED_MODULE_0__["h"])('div', { class: 'move_bar' }, [
          Object(_utils_create_element__WEBPACK_IMPORTED_MODULE_0__["h"])('div', { class: 'inner_move_bar' })
        ])
      ])
    ])
  ]
)

document.querySelector('one_box[__board__="__"]').appendChild(mainBtn)

/* harmony default export */ __webpack_exports__["default"] = (mainBtn);
const innerBox = document.querySelector('.main__btn__ .inner_box')
const moveBar = document.querySelector('.main__btn__ .inner_box .in_the_inner_box_left .move_bar')
const innerMoveBar = document.querySelector('.main__btn__ .inner_box .in_the_inner_box_left .move_bar .inner_move_bar')
const switchBar = document.querySelector('.main__btn__ .inner_box .switch')
const canMove = document.querySelector('.main__btn__ .inner_box .can_move')



/***/ }),

/***/ "./src/brightness/init_brightness_board.js":
/*!*************************************************!*\
  !*** ./src/brightness/init_brightness_board.js ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _utils_create_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils/create_element */ "./src/utils/create_element.js");
/* harmony import */ var _utils_chrome_api_chrome_runtime_send_message__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils/chrome_api/chrome_runtime_send_message */ "./src/utils/chrome_api/chrome_runtime_send_message.js");



/**
 * 遮罩层初始化逻辑
 */

let request = null
// 缓存，以供窗口尺寸变化时使用
let brightness = 0

const styleText = _ => (
  Object.entries({
    width: `${document.documentElement.clientWidth}px`,
    height: `${document.documentElement.clientHeight}px`,
    background: `rgba(0,0,0,${_ === undefined ? brightness : _})`
  }).reduce((prev, [k, v]) => (prev += `${k}:${v}!important;`, prev), '')
)

const SEND_GET_BRIGHTNESS_SET_STYLE = ({
  isSave, value
}) => {
  // isSave 为真时获取后台存储的值
  if (isSave) {
    Object(_utils_chrome_api_chrome_runtime_send_message__WEBPACK_IMPORTED_MODULE_1__["sendMessage"])({
      type: 'GET_BRIGHT_NESS'
    })
      .then(response => {
        brightness = response.brightness
        dom.setAttribute('style', styleText())
      })
  } else {
    // isSave 为假时仅设置样式值
    brightness = value
    dom.setAttribute('style', styleText(value))
  }
}

const SEND_SET_BRIGHTNESS = ({
  value
}) => {
  Object(_utils_chrome_api_chrome_runtime_send_message__WEBPACK_IMPORTED_MODULE_1__["sendMessage"])({
    type: 'SET_BRIGHT_NESS',
    value
  })
    .then(_ => {
      console.log('延后执行 SEND_SET_BRIGHTNESS')
      brightness = value
    })
}

SEND_GET_BRIGHTNESS_SET_STYLE({ isSave: true })

// 先加载到页面上
const dom = Object(_utils_create_element__WEBPACK_IMPORTED_MODULE_0__["h"])('div', {
  class: '_box__',
  style: styleText()
})

// 自定义标签，隔绝网页脚本操作，以防造成样式bug
let one_box = document.createElement('one_box')
one_box.setAttribute('__board__', '__')
document.documentElement.appendChild(one_box)
one_box.appendChild(dom)
one_box = null

window.addEventListener('resize', _ => {
  request !== null && cancelAnimationFrame(request)
  // 强制 60 Hz
  request = requestAnimationFrame(_ => {
    dom.setAttribute('style', styleText())
    request = null
  })
}, false)

/* harmony default export */ __webpack_exports__["default"] = ({
  SEND_GET_BRIGHTNESS_SET_STYLE,
  SEND_SET_BRIGHTNESS
});

/***/ }),

/***/ "./src/brightness/main.js":
/*!********************************!*\
  !*** ./src/brightness/main.js ***!
  \********************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _init_brightness_board__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./init_brightness_board */ "./src/brightness/init_brightness_board.js");
/* harmony import */ var _build_main_btn__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./build_main_btn */ "./src/brightness/build_main_btn.js");
/* harmony import */ var _utils_chrome_api_chrome_runtime_send_message__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../utils/chrome_api/chrome_runtime_send_message */ "./src/utils/chrome_api/chrome_runtime_send_message.js");




let isMainBtnClick = false // 主按钮是否点击
let requestOfMoveBar = null // 滑动条移动限频状态位
let timeOfMoveBar = null // 滑动条延时通知后台状态位
let saveYOfMoveBar = 0 // 内滑动条缓存
let requestOfCanMove = null // 主按钮移动移动限频状态位
let timeOfCanMove = null // 主按钮移动延时通知后台状态位
let isSwitchBarClick = false // 亮度调节按钮是否点击
let isCanMoveClick = false // 是否可移动状态位

const setMainBtnLeftAndTop = (left, top) => _build_main_btn__WEBPACK_IMPORTED_MODULE_1__["default"].setAttribute('style',
  Object.entries({
    left: `${left}px`,
    top: `${top}px`
  }).reduce((prev, [k, v]) => (prev += `${k}:${v};`, prev), '')
)
const SEND_SET_MAIN_BTN_LEFT_TOP = (left, top) => {
  Object(_utils_chrome_api_chrome_runtime_send_message__WEBPACK_IMPORTED_MODULE_2__["sendMessage"])({
    type: 'SET_MAIN_BTN_LEFT_TOP',
    left,
    top
  })
    .then(_ => console.log('延后执行 SEND_SET_MAIN_BTN_LEFT_TOP'))
}

console.clear()

Object(_utils_chrome_api_chrome_runtime_send_message__WEBPACK_IMPORTED_MODULE_2__["sendMessage"])({
  type: 'GET_BRIGHT_NESS'
})
  .then(response => {
    const height = +getComputedStyle(_build_main_btn__WEBPACK_IMPORTED_MODULE_1__["moveBar"], null).height.replace(/\D/g, '')
    const h = Math.floor(height * response.brightness)
    _build_main_btn__WEBPACK_IMPORTED_MODULE_1__["innerMoveBar"].style.height = `${h}px`
  })

Object(_utils_chrome_api_chrome_runtime_send_message__WEBPACK_IMPORTED_MODULE_2__["sendMessage"])({
  type: 'GET_MAIN_BTN_LEFT_TOP'
})
  .then(({ left, top }) => {
    // 当前屏幕尺寸大于后台存储的left，top值时，将回归初始值，并后台存储
    // 否则依旧使用当前 left , top
    if (
      ((+left) > document.documentElement.clientWidth - 25 - 10 - 25) ||
      ((+top) > document.documentElement.clientHeight - 10 - 25)
    ) {
      setMainBtnLeftAndTop(0, 100)
      SEND_SET_MAIN_BTN_LEFT_TOP(0, 100)
    } else {
      setMainBtnLeftAndTop(left, top)
    }
  })

// 事件监听器、事件绑定
_build_main_btn__WEBPACK_IMPORTED_MODULE_1__["moveBar"].onmousemove = e => {
  e.stopPropagation()
  if (!isSwitchBarClick) {
    return
  }
  requestOfMoveBar !== null && cancelAnimationFrame(requestOfMoveBar)
  requestOfMoveBar = requestAnimationFrame(_ => {
    if (saveYOfMoveBar !== e.offsetY) {
      // 获取当前高度
      const height = +getComputedStyle(_build_main_btn__WEBPACK_IMPORTED_MODULE_1__["moveBar"], null).height.replace(/\D/g, '')
      let value = `${e.offsetY / height}`.replace(/(\d)(\.\d)\d*$/g, '$1$2')
      // console.info(height, e.offsetY, saveYOfMoveBar, value)
      console.info('move')
      _init_brightness_board__WEBPACK_IMPORTED_MODULE_0__["default"].SEND_GET_BRIGHTNESS_SET_STYLE({ isSave: false, value })
      _build_main_btn__WEBPACK_IMPORTED_MODULE_1__["innerMoveBar"].style.height = `${e.offsetY}px`
      saveYOfMoveBar = e.offsetY
      // 延后通知后台
      timeOfMoveBar !== null && clearTimeout(timeOfMoveBar)
      timeOfMoveBar = setTimeout(_ => {
        _init_brightness_board__WEBPACK_IMPORTED_MODULE_0__["default"].SEND_SET_BRIGHTNESS({ value })
        timeOfMoveBar = null
      }, 5000)
    }
    requestOfMoveBar = null
  })
}

window.addEventListener('mousemove', e => {
  if (!isMainBtnClick || !isCanMoveClick) {
    return
  }
  requestOfCanMove !== null && cancelAnimationFrame(requestOfCanMove)
  requestOfCanMove = requestAnimationFrame(_ => {
    // left [0, document.documentElement.clientWidth - 25 - 10 - 25]
    // top [0, document.documentElement.clientHeight - 10 - 25]

    let left = Math.floor(e.clientX - 12.5 - 10 - 25)
    let top = Math.floor(e.clientY - 12.5)
    if (left > document.documentElement.clientWidth - 25 - 10 - 25 || left < 0) {
      return
    }
    if (top > document.documentElement.clientHeight - 10 - 25 || top < 0) {
      return
    }
    setMainBtnLeftAndTop(left, top)
    // 延后通知后台
    timeOfCanMove !== null && clearTimeout(timeOfCanMove)
    timeOfCanMove = setTimeout(_ => {
      SEND_SET_MAIN_BTN_LEFT_TOP(left, top)
      timeOfCanMove = null
    }, 5000)
    console.info('move main btn')
    requestOfCanMove = null
  })
}, false)

_build_main_btn__WEBPACK_IMPORTED_MODULE_1__["switchBar"].onclick = e => {
  e.stopPropagation()
  isSwitchBarClick = !isSwitchBarClick
  isSwitchBarClick
    ? (_build_main_btn__WEBPACK_IMPORTED_MODULE_1__["switchBar"].style.background = '#90EE90',
      _build_main_btn__WEBPACK_IMPORTED_MODULE_1__["switchBar"].innerHTML = 'on')
    : (_build_main_btn__WEBPACK_IMPORTED_MODULE_1__["switchBar"].style.background = '#fff',
      _build_main_btn__WEBPACK_IMPORTED_MODULE_1__["switchBar"].innerHTML = 'off')
}

_build_main_btn__WEBPACK_IMPORTED_MODULE_1__["canMove"].onclick = e => {
  e.stopPropagation()
  isCanMoveClick = !isCanMoveClick
  isCanMoveClick
    ? _build_main_btn__WEBPACK_IMPORTED_MODULE_1__["canMove"].style.background = '#90EE90'
    : _build_main_btn__WEBPACK_IMPORTED_MODULE_1__["canMove"].style.background = '#fff'
}

_build_main_btn__WEBPACK_IMPORTED_MODULE_1__["moveBar"].onclick = e => e.stopPropagation()

_build_main_btn__WEBPACK_IMPORTED_MODULE_1__["default"].onclick = e => {
  e.stopPropagation()
  isMainBtnClick = !isMainBtnClick
  isMainBtnClick
    ? _build_main_btn__WEBPACK_IMPORTED_MODULE_1__["innerBox"].style.display = 'flex'
    : _build_main_btn__WEBPACK_IMPORTED_MODULE_1__["innerBox"].style.display = 'none'
}

/***/ }),

/***/ "./src/style/brightness.css":
/*!**********************************!*\
  !*** ./src/style/brightness.css ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./src/utils/chrome_api/chrome_runtime_send_message.js":
/*!*************************************************************!*\
  !*** ./src/utils/chrome_api/chrome_runtime_send_message.js ***!
  \*************************************************************/
/*! exports provided: sendMessage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "sendMessage", function() { return sendMessage; });
const sendMessage = sendData => new Promise(
  resolve => chrome.runtime.sendMessage(sendData, response => resolve(response))
)

/***/ }),

/***/ "./src/utils/create_element.js":
/*!*************************************!*\
  !*** ./src/utils/create_element.js ***!
  \*************************************/
/*! exports provided: h */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "h", function() { return h; });
/* harmony import */ var _is_object__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./is_object */ "./src/utils/is_object.js");
/* harmony import */ var _is_array__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./is_array */ "./src/utils/is_array.js");
/**
 * h(
 *  'div',
 *  {
 *   class: String,
 *   id: String,
 *   style: String
 *   ...
 *  },
 *  [
 *   h(...),
 *   'text'
 *  ]
 * )
 */



const h = (key, attr, children) => {
  if (
    typeof key !== 'string' ||
    !Object(_is_object__WEBPACK_IMPORTED_MODULE_0__["isObj"])(attr) ||
    (!Object(_is_array__WEBPACK_IMPORTED_MODULE_1__["isArr"])(children) && children !== undefined)
  ) {
    throw new Error('arguments error')
  }
  return new Proxy({}, {
    get () {
      const el = document.createElement(key)
      Object.entries(attr).forEach(([k, v]) => typeof v === 'string' && el.setAttribute(k, v))
      children && children.forEach(_ => el.appendChild(
        typeof _ === 'string'
          ? document.createTextNode(_)
          : _
      ))
      return el
    }
  })[key]
}


/***/ }),

/***/ "./src/utils/is_array.js":
/*!*******************************!*\
  !*** ./src/utils/is_array.js ***!
  \*******************************/
/*! exports provided: isArr */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isArr", function() { return isArr; });
const isArr = _ => Object.prototype.toString.call(_).slice(8, -1) === 'Array'


/***/ }),

/***/ "./src/utils/is_object.js":
/*!********************************!*\
  !*** ./src/utils/is_object.js ***!
  \********************************/
/*! exports provided: isObj */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isObj", function() { return isObj; });
const isObj = _ => Object.prototype.toString.call(_).slice(8, -1) === 'Object'


/***/ })

/******/ });
//# sourceMappingURL=brightness.js.map