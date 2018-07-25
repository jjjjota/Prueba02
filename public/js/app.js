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

// 01: inicializar con evento ready
$(function () {

    // prevenir evento de los logos
    $('a').click(function (event) {
        if ($(this).attr('href') == '#') {
            event.preventDefault();
        };
    });

    // 02: Añadir/eliminar la clase .tuit__heart--liked al hacer click sobre .tuit__heart
    $(".boardTuits").on('click', '.tuit__heart', function (event) {
        event.preventDefault(); // prevenir evento

        $(this).addClass('tuit__heart--liked');

        var counter = $(this).next(),
            // obtengo el elemento con el número de likes
        newCounter = parseInt(counter.text()) + 1; // su string se convierte a number y se suma 1

        counter.text(newCounter); // se actualiza el string

        // SI LOS LIKES NO FURAN INFINITOS
        // if (!$(this).hasClass('tuit__heart--liked')) {
        //   newCounter = parseInt(counter.text()) + 1;
        //
        //   $(this).addClass('tuit__heart--liked');
        // }
        // else {
        //   newCounter = parseInt(counter.text()) - 1;
        //
        //   $(this).removeClass('tuit__heart--liked');
        // }
        //
        // counter.text(newCounter);
    });

    // 03: Eliminar el div .tuit al hacer click sobre .tuit__trash
    $(".boardTuits").on('click', '.tuit__trash', function (event) {
        event.preventDefault();

        var tuit = $(this).parents('.tuit');

        tuit.fadeOut(650); // linda desaparición
        setTimeout(function () {
            tuit.remove(); // remover el elemento del DOM luego de 0.5 seg
        }, 2000);
    });

    // 04: Obtener imagen del select y cambiarla actualizar src de img
    $("select#file").change(function () {
        var value = $(this).val(),
            // obtener valor
        source = 'images/' + value;

        $(this).prev().attr('src', source); // reemplazarlo en la ruta de la imagen
    });

    // 05: Obtener data del form y crear tuit
    $('form').submit(function (event) {
        event.preventDefault(); // prevenir evento

        var data = $(this).serializeArray(),
            // obtener data
        image = data[0].value,
            quote = data[1].value;

        if (image == 'uk.png' || quote === '') {
            return; // si no ha puesto foto ni escrito algo, no agregar tuit
        }

        var template = $('article#template').clone().removeAttr('id'); // clonar el template

        template.children('.tuit__image').attr('src', 'images/' + image); // setear la imagen
        template.find('.tuit__quote').text('' + quote); // setear el texto
        $(template).prependTo('.boardTuits').hide().fadeIn(1350); // agregar tuit

        $(this).children('textarea').val(''); // limpiar sólo textarea del form

        // reset todo el form, incluso la imagen
        // $(this)[0].reset();
        // $(this).children(":first-child").attr('src', 'images/uk.png');
    });
});

/***/ }),
/* 2 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ })
/******/ ]);