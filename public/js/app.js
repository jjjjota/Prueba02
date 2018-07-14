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
/******/ 	__webpack_require__.p = "/";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(1);
module.exports = __webpack_require__(2);


/***/ }),
/* 1 */
/***/ (function(module, exports) {

// TODO: delimitar 140 caracteres

// 01: inicializar con evento ready
$(function () {

  // 02: Añadir/eliminar la clase .boardTuits__heart--liked al hacer click sobre .boardTuits__heart
  $(".boardTuits__tuit").on('click', '.boardTuits__heart', function (event) {
    event.preventDefault();

    var counter = $(this).next(),
        newCounter;

    if (!$(this).hasClass('boardTuits__heart--liked')) {
      newCounter = parseInt(counter.text()) + 1;

      $(this).addClass('boardTuits__heart--liked');
    } else {
      newCounter = parseInt(counter.text()) - 1;

      $(this).removeClass('boardTuits__heart--liked');
    }

    counter.text(newCounter);
  });

  // 03: Eliminar el div .boardTuits__tuit al hacer click sobre .boardTuits__trash
  $(".boardTuits__tuit").on('click', '.boardTuits__trash', function (event) {
    event.preventDefault();

    var tuit = $(this).parents('.boardTuits__tuit');

    tuit.fadeOut(500);
    setTimeout(function () {
      tuit.remove();
    }, 500);
  });

  // 04: Agegar imagen seleccionada en el select #image
  // $("select#image").change(function(event) {
  //   var value = $(event.target).val(),
  //       source = `../src/images/${value}`;
  //
  //   p = $(this).siblings().children().attr('src', source);

  // .children('.createTuit__image').attr('src', source);
  // });
});

/***/ }),
/* 2 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ })
/******/ ]);