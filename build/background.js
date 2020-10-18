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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/background.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/background.js":
/*!***************************!*\
  !*** ./src/background.js ***!
  \***************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _logic_bg_init__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./logic/bg/init */ "./src/logic/bg/init.js");
/* harmony import */ var _logic_bg_init__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_logic_bg_init__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _logic_bg_messageListener__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./logic/bg/messageListener */ "./src/logic/bg/messageListener.js");
/* harmony import */ var _utils_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./utils/http */ "./src/utils/http.js");

// ----------




// With background scripts you can communicate with popup
// and contentScript files.
// For more information on background script,
// See https://developer.chrome.com/extensions/background_pages

chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
  Object(_logic_bg_messageListener__WEBPACK_IMPORTED_MODULE_1__["handler"])(request, sender, sendResponse)
})

// 请求可以跨域
console.info(_utils_http__WEBPACK_IMPORTED_MODULE_2__["default"])


/***/ }),

/***/ "./src/logic/bg/init.js":
/*!******************************!*\
  !*** ./src/logic/bg/init.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

const ness = localStorage.getItem('__bright_ness__')
if (ness === null) {
  localStorage.setItem('__bright_ness__', '0')
}

/***/ }),

/***/ "./src/logic/bg/messageListener.js":
/*!*****************************************!*\
  !*** ./src/logic/bg/messageListener.js ***!
  \*****************************************/
/*! exports provided: handler */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "handler", function() { return handler; });

const handler = (request, sender, sendResponse) => {
  console.info('&&&&')
  console.info(request, sender, sendResponse)

  switch (request.type) {
    case 'GET_BRIGHT_NESS':
      return sendResponse({
        message: localStorage.getItem('__bright_ness__'),
      })
    case 'GREETINGS': {
      const message = `Hi ${sender.tab ? 'Con' : 'Pop'
        }, my name is Bac. I am from Background. It's great to hear from you.`

      // Log message coming from the `request` parameter
      console.log(request.payload.message)
      // Send a response message
      return sendResponse({
        message,
      })
    }
    default: ;
  }
}

/***/ }),

/***/ "./src/utils/baseTime.js":
/*!*******************************!*\
  !*** ./src/utils/baseTime.js ***!
  \*******************************/
/*! exports provided: baseTime */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "baseTime", function() { return baseTime; });
const baseTime = 5 * 60 * 1000

/***/ }),

/***/ "./src/utils/coreHttp.js":
/*!*******************************!*\
  !*** ./src/utils/coreHttp.js ***!
  \*******************************/
/*! exports provided: core */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "core", function() { return core; });
/* harmony import */ var _baseTime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./baseTime */ "./src/utils/baseTime.js");


const core = ({
  url,
  method,
  data,
  type,
  responseType,
  header,
  time
}) => new Promise((resolve, reject) => {
  const xhr = new XMLHttpRequest()
  xhr.open(method, url)
  xhr.withCredentials = true
  xhr.onreadystatechange = _ => {
    if (xhr.readyState !== 4) {
      return
    }
    // console.info(typeof xhr.getAllResponseHeaders())
    xhr.status === 200
      ? resolve(xhr.response)
      : resolve(xhr.status)
  }
  header && Object.entries(header).forEach(([k, v]) => k.toLowerCase() !== 'content-type' && xhr.setRequestHeader(k, v))
  xhr.setRequestHeader('content-type', type)
  xhr.responseType = responseType || 'json'
  xhr.timeout = time || _baseTime__WEBPACK_IMPORTED_MODULE_0__["baseTime"]
  xhr.onerror = _ => reject(_)
  xhr.send(data)
})

/***/ }),

/***/ "./src/utils/http.js":
/*!***************************!*\
  !*** ./src/utils/http.js ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _isObj__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./isObj */ "./src/utils/isObj.js");
/* harmony import */ var _returnStr__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./returnStr */ "./src/utils/returnStr.js");
/* harmony import */ var _coreHttp__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./coreHttp */ "./src/utils/coreHttp.js");




const Http = (_ => {

  const Http = function () { }

  Http.prototype.json = function (config) {
    if (!Object(_isObj__WEBPACK_IMPORTED_MODULE_0__["isObj"])(config)) {
      return Promise.resolve('[-1]')
    }
    let { url } = config
    if (typeof url !== 'string') {
      return Promise.resolve('[-1]')
    }
    const { data, header, time, responseType } = config
    return Object(_coreHttp__WEBPACK_IMPORTED_MODULE_2__["core"])({
      url,
      method: 'post',
      data: Object(_isObj__WEBPACK_IMPORTED_MODULE_0__["isObj"])(data) ? JSON.stringify(data) : null,
      type: 'application/json; charset=utf-8',
      responseType: typeof responseType === 'string' ? responseType : undefined,
      header: Object(_isObj__WEBPACK_IMPORTED_MODULE_0__["isObj"])(header) ? header : undefined,
      time: typeof time === 'number' ? time : undefined
    })
  }

  Http.prototype.post = function (config) {
    if (!Object(_isObj__WEBPACK_IMPORTED_MODULE_0__["isObj"])(config)) {
      return Promise.resolve('[-1]')
    }
    let { url } = config
    if (typeof url !== 'string') {
      return Promise.resolve('[-1]')
    }
    const { data, header, time, responseType } = config
    return Object(_coreHttp__WEBPACK_IMPORTED_MODULE_2__["core"])({
      url,
      method: 'post',
      data: Object(_isObj__WEBPACK_IMPORTED_MODULE_0__["isObj"])(data) ? Object(_returnStr__WEBPACK_IMPORTED_MODULE_1__["returnStr"])(data, '') : null,
      type: 'application/x-www-form-urlencoded; charset=utf-8',
      responseType: typeof responseType === 'string' ? responseType : undefined,
      header: Object(_isObj__WEBPACK_IMPORTED_MODULE_0__["isObj"])(header) ? header : undefined,
      time: typeof time === 'number' ? time : undefined
    })
  }

  Http.prototype.get = function (config) {
    if (!Object(_isObj__WEBPACK_IMPORTED_MODULE_0__["isObj"])(config)) {
      return Promise.resolve('[-1]')
    }
    let { url } = config
    if (typeof url !== 'string') {
      return Promise.resolve('[-1]')
    }
    const { data, header, time, responseType } = config
    Object(_isObj__WEBPACK_IMPORTED_MODULE_0__["isObj"])(data) && (url = `${url}${Object(_returnStr__WEBPACK_IMPORTED_MODULE_1__["returnStr"])(data, '?')}`)
    return Object(_coreHttp__WEBPACK_IMPORTED_MODULE_2__["core"])({
      url,
      method: 'get',
      data: null,
      type: 'application/x-www-form-urlencoded; charset=utf-8',
      responseType: typeof responseType === 'string' ? responseType : undefined,
      header: Object(_isObj__WEBPACK_IMPORTED_MODULE_0__["isObj"])(header) ? header : undefined,
      time: typeof time === 'number' ? time : undefined
    })
  }

  return Http
})()

/**
 * xxx 可以是 get post json
 * new Http.xxx({
 *  url: String 请求的地址，必填
 *  data: Object 请求需要的数据，选填
 *  header: Object 除 content-type 之外的其他请求头，选填
 *  time: Number 请求超时时间，选填
 *  responseType: String 服务器响应的数据类型，选填
 * })
 */
/* harmony default export */ __webpack_exports__["default"] = (new Http());

/***/ }),

/***/ "./src/utils/isObj.js":
/*!****************************!*\
  !*** ./src/utils/isObj.js ***!
  \****************************/
/*! exports provided: isObj */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isObj", function() { return isObj; });
const isObj = _ => Object.prototype.toString.call(_).slice(8, -1) === 'Object'


/***/ }),

/***/ "./src/utils/returnStr.js":
/*!********************************!*\
  !*** ./src/utils/returnStr.js ***!
  \********************************/
/*! exports provided: returnStr */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "returnStr", function() { return returnStr; });
const returnStr = (obj, init) => Object.entries(obj).reduce((prev, [k, v], i, { length }) => (
  (prev += i === length - 1 ? `${k}=${v}` : `${k}=${v}&`), prev
), init)

/***/ })

/******/ });
//# sourceMappingURL=background.js.map