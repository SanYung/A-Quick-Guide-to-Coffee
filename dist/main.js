/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is not neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _scripts_header__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./scripts/header */ \"./src/scripts/header.js\");\n/* harmony import */ var _scripts_header__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_scripts_header__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _scripts_navigation__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./scripts/navigation */ \"./src/scripts/navigation.js\");\n/* harmony import */ var _scripts_navigation__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_scripts_navigation__WEBPACK_IMPORTED_MODULE_1__);\n\n\n\n//# sourceURL=webpack://Javascipt-Project/./src/index.js?");

/***/ }),

/***/ "./src/scripts/header.js":
/*!*******************************!*\
  !*** ./src/scripts/header.js ***!
  \*******************************/
/***/ (() => {

eval("\nwindow.addEventListener('scroll', function () {\n    set_background_scale()\n});\n\nfunction set_background_scale() {\n    const page_bg = document.querySelector('.scrolling-bg');\n    let y = window.pageYOffset;\n    let initialScale = 1;\n    let newScale = initialScale - (y / 10000);\n\n    if (newScale < 0.9) {\n        newScale = 0.9;\n    }\n    page_bg.style.transform = `scale(${newScale})`;\n    \n}\n\nfunction scroll(scrollTo) {\n    const element = document.querySelector(scrollTo);\n    element.scrollIntoView({ behavior: \"smooth\" });\n}\n\nconst nav_links = document.querySelectorAll('.nav-link');\n\nfor (let i = 0; i < nav_links.length; i++) {\n    let nav_link = nav_links[i];\n\n    nav_link.addEventListener('click', function () {\n        scroll(nav_link.dataset.scrollto);\n        let teaPic = document.getElementsByClassName(\"scrolling-bg\")[0]\n\n\n        // if (i === 2 || i ===3 ){\n        //     teaPic.classList.add('teaPic')\n        // } else {\n        //     teaPic.classList.remove('teaPic')\n        // }\n    })\n}\n\n\n\n//# sourceURL=webpack://Javascipt-Project/./src/scripts/header.js?");

/***/ }),

/***/ "./src/scripts/navigation.js":
/*!***********************************!*\
  !*** ./src/scripts/navigation.js ***!
  \***********************************/
/***/ (() => {

// eval("\nvar button = document.getElementsByClassName('coffee-button')[0]\nbutton.addEventListener('click', () => {\n    document.getElementsByClassName('homepage')[0].style.display = \"none\"\n    document.getElementsByClassName('coffee-page')[0].style.display = \"block\"\n    window.scrollTo(0,0)\n})\n\nvar button = document.getElementsByClassName('go-back-button')[0]\nbutton.addEventListener('click', () => {\n    document.getElementsByClassName('homepage')[0].style.display = \"block\"\n    document.getElementsByClassName('coffee-page')[0].style.display = \"none\"\n    document.getElementsByClassName('homepage')[0].scrollTo(0, document.getElementById('coffee-header'))\n})\n\n\nwindow.addEventListener(\"scroll\", function () {\n    var header = document.getElementsByClassName('navbar-coffee-header')[0];\n    header.classList.toggle(\"sticky\", window.scrollY > 0);\n})\n\n\n\n\n// coffee-types\n\ndocument.getElementById('espresso-button').addEventListener('mouseover', () => {\n    document.getElementsByClassName('espresso-popup')[0].style.display = 'block'\n})\ndocument.getElementById('espresso-button').addEventListener('mouseout', () => {\n    document.getElementsByClassName('espresso-popup')[0].style.display = 'none'\n})\n\ndocument.getElementById('redeye-button').addEventListener('mouseover', () => {\n    document.getElementsByClassName('redeye-popup')[0].style.display = 'block'\n})\ndocument.getElementById('redeye-button').addEventListener('mouseout', () => {\n    document.getElementsByClassName('redeye-popup')[0].style.display = 'none'\n})\n\ndocument.getElementById('americano-button').addEventListener('mouseover', () => {\n    document.getElementsByClassName('americano-popup')[0].style.display = 'block'\n})\ndocument.getElementById('americano-button').addEventListener('mouseout', () => {\n    document.getElementsByClassName('americano-popup')[0].style.display = 'none'\n})\n\ndocument.getElementById('macchiato-button').addEventListener('mouseover', () => {\n    document.getElementsByClassName('macchiato-popup')[0].style.display = 'block'\n})\ndocument.getElementById('macchiato-button').addEventListener('mouseout', () => {\n    document.getElementsByClassName('macchiato-popup')[0].style.display = 'none'\n})\n\ndocument.getElementById('cortado-button').addEventListener('mouseover', () => {\n    document.getElementsByClassName('cortado-popup')[0].style.display = 'block'\n})\ndocument.getElementById('cortado-button').addEventListener('mouseout', () => {\n    document.getElementsByClassName('cortado-popup')[0].style.display = 'none'\n})\n\ndocument.getElementById('breve-button').addEventListener('mouseover', () => {\n    document.getElementsByClassName('breve-popup')[0].style.display = 'block'\n})\ndocument.getElementById('breve-button').addEventListener('mouseout', () => {\n    document.getElementsByClassName('breve-popup')[0].style.display = 'none'\n})\n\n\ndocument.getElementById('cappucino-button').addEventListener('mouseover', () => {\n    document.getElementsByClassName('cappucino-popup')[0].style.display = 'block'\n})\ndocument.getElementById('cappucino-button').addEventListener('mouseout', () => {\n    document.getElementsByClassName('cappucino-popup')[0].style.display = 'none'\n})\n\ndocument.getElementById('flatwhite-button').addEventListener('mouseover', () => {\n    document.getElementsByClassName('flatwhite-popup')[0].style.display = 'block'\n})\ndocument.getElementById('flatwhite-button').addEventListener('mouseout', () => {\n    document.getElementsByClassName('flatwhite-popup')[0].style.display = 'none'\n})\n\ndocument.getElementById('cafelatte-button').addEventListener('mouseover', () => {\n    document.getElementsByClassName('cafelatte-popup')[0].style.display = 'block'\n})\ndocument.getElementById('cafelatte-button').addEventListener('mouseout', () => {\n    document.getElementsByClassName('cafelatte-popup')[0].style.display = 'none'\n})\n\ndocument.getElementById('vienna-button').addEventListener('mouseover', () => {\n    document.getElementsByClassName('vienna-popup')[0].style.display = 'block'\n})\ndocument.getElementById('vienna-button').addEventListener('mouseout', () => {\n    document.getElementsByClassName('vienna-popup')[0].style.display = 'none'\n})\n\ndocument.getElementById('mocha-button').addEventListener('mouseover', () => {\n    document.getElementsByClassName('mocha-popup')[0].style.display = 'block'\n})\ndocument.getElementById('mocha-button').addEventListener('mouseout', () => {\n    document.getElementsByClassName('mocha-popup')[0].style.display = 'none'\n})\n\ndocument.getElementById('affogato-button').addEventListener('mouseover', () => {\n    document.getElementsByClassName('affogato-popup')[0].style.display = 'block'\n})\ndocument.getElementById('affogato-button').addEventListener('mouseout', () => {\n    document.getElementsByClassName('affogato-popup')[0].style.display = 'none'\n})\n\ndocument.getElementById('cafeaulait-button').addEventListener('mouseover', () => {\n    document.getElementsByClassName('cafeaulait-popup')[0].style.display = 'block'\n})\ndocument.getElementById('cafeaulait-button').addEventListener('mouseout', () => {\n    document.getElementsByClassName('cafeaulait-popup')[0].style.display = 'none'\n})\n\ndocument.getElementById('coldbrew-button').addEventListener('mouseover', () => {\n    document.getElementsByClassName('coldbrew-popup')[0].style.display = 'block'\n})\ndocument.getElementById('coldbrew-button').addEventListener('mouseout', () => {\n    document.getElementsByClassName('coldbrew-popup')[0].style.display = 'none'\n})\n\n\n//# sourceURL=webpack://Javascipt-Project/./src/scripts/navigation.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		if(__webpack_module_cache__[moduleId]) {
/******/ 			return __webpack_module_cache__[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => module['default'] :
/******/ 				() => module;
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => Object.prototype.hasOwnProperty.call(obj, prop)
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	// startup
/******/ 	// Load entry module
/******/ 	__webpack_require__("./src/index.js");
/******/ 	// This entry module used 'exports' so it can't be inlined
/******/ })()
;