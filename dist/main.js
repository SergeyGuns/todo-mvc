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
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("class Model {\r\n  constructor() {\r\n    this.state = {\r\n      todoList: [\r\n        {\r\n          id: 51234,\r\n          text: 'work it',\r\n          checked: false\r\n        },\r\n        {\r\n          id: 51234,\r\n          text: 'work',\r\n          checked: false\r\n        },\r\n      ]\r\n    }\r\n  }\r\n  setState(newState, cd) {\r\n    this.state = { ...this.state, newState }\r\n    if(cd) {\r\n      cb()\r\n    }\r\n  }\r\n\r\n  getState() {\r\n    return this.state\r\n  }\r\n}\r\n\r\nclass Controller {\r\n  constructor(model) {\r\n    \r\n  }\r\n  add (listText, model) {\r\n    let newTodoList = model.todoList\r\n    newTodoList.push({\r\n      id: Date.now(),\r\n      test: listText,\r\n      checked: false\r\n    })\r\n    return {\r\n      ...model,\r\n      todoList: newTodoList\r\n    }\r\n  }\r\n}\r\n\r\n\r\nclass View {\r\n  constructor(htmlList, model) {\r\n    this.htmlList = htmlList\r\n    this.model = model\r\n  }\r\n  render () {\r\n    let { htmlList, model } = this\r\n    let newList = `\r\n      ${model.getState().todoList.map(el => {`\r\n        <input type=\"checkbox\" value=${el.checked} data-id=${el.id}> ${el.text} </input>`\r\n      }).join('<br>')}`\r\n    htmlList.innerHTML = newList\r\n  }\r\n}\r\nlet lists = document.querySelector('.list')\r\nlet form = document.querySelector('form')\r\n\r\nlet model = new Model()\r\nlet controller = new Controller(model)\r\nlet view = new View(lists, model)\r\nview.render()\r\n\r\n\r\nform.addEventListener('change', e => console.log(e))\r\n\r\n\r\n\r\n\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ })

/******/ });