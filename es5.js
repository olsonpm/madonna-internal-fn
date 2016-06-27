module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/*!**********************!*\
  !*** ./lib/index.js ***!
  \**********************/
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	//---------//
	// Imports //
	//---------//

	var fp = __webpack_require__(/*! lodash/fp */ 1),
	    madonna = __webpack_require__(/*! madonna-fp */ 2);

	//------//
	// Init //
	//------//

	var madonnaFnArgsValidator = madonna.createIdentityValidator(getMadonnaFnMarg());

	//------//
	// Main //
	//------//

	function madonnaFn(argsObj) {
	  madonnaFnArgsValidator.apply(null, arguments);

	  var fnArgsValidator = madonna.createIdentityValidator(argsObj.marg),
	      res = fp.flow(fnArgsValidator, argsObj.fn);

	  return res;
	}

	//-------------//
	// Helper Fxns //
	//-------------//

	function getMadonnaFnMarg() {
	  return {
	    marg: ['require', 'isLadenPlainObject'],
	    fn: ['require', 'isFunction']
	  };
	}

	//---------//
	// Exports //
	//---------//

	module.exports = madonnaFn;

/***/ },
/* 1 */
/*!****************************!*\
  !*** external "lodash/fp" ***!
  \****************************/
/***/ function(module, exports) {

	module.exports = require("lodash/fp");

/***/ },
/* 2 */
/*!*****************************!*\
  !*** external "madonna-fp" ***!
  \*****************************/
/***/ function(module, exports) {

	module.exports = require("madonna-fp");

/***/ }
/******/ ]);