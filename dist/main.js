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
/******/ 	__webpack_require__.p = "/dist/";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/images/blueshot.png":
/*!*********************************!*\
  !*** ./src/images/blueshot.png ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("images/blueshot.png");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _styles_index_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./styles/index.scss */ "./src/styles/index.scss");
/* harmony import */ var _styles_index_scss__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_styles_index_scss__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _scripts_hero__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./scripts/hero */ "./src/scripts/hero.js");
/* harmony import */ var _scripts_bullet__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./scripts/bullet */ "./src/scripts/bullet.js");



var canvasCtx = document.addEventListener('DOMContentLoaded', function () {
  var canvas = document.getElementById('canvas');
  var ctx = canvas.getContext('2d'); // const sky = document.getElementById('sky');
  // ctx.drawImage(sky, 0, 0, 1000, 600, 0, 0, 1000, 600);

  ctx.fillStyle = 'green';
  ctx.fillRect(0, 0, 1200, 600);
  var player = new _scripts_hero__WEBPACK_IMPORTED_MODULE_1__["default"]();
  player.drawHero(); // player.animate();

  var bullet = new _scripts_bullet__WEBPACK_IMPORTED_MODULE_2__["default"](0, 0, "hero");
  bullet.drawBullet();
});

/***/ }),

/***/ "./src/scripts/bullet.js":
/*!*******************************!*\
  !*** ./src/scripts/bullet.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _images_blueshot_png__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../images/blueshot.png */ "./src/images/blueshot.png");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }



var Bullet = /*#__PURE__*/function () {
  function Bullet(x, y, shooter) {
    _classCallCheck(this, Bullet);

    this.x = x;
    this.y = y;
    this.speed = 2.5;
    this.whoShot = shooter;
    this.drawBullet = this.drawBullet.bind(this);
  }

  _createClass(Bullet, [{
    key: "drawBullet",
    value: function drawBullet() {
      var _this = this;

      var canvas = document.getElementById('canvas');
      var ctx = canvas.getContext('2d');
      var image = new Image();
      console.log(image);

      image.onload = function () {
        return ctx.drawImage(image, _this.x, _this.y, 35, 6);
      };

      image.src = _images_blueshot_png__WEBPACK_IMPORTED_MODULE_0__["default"];
      console.log(image);
      console.log(image.src);
    }
  }]);

  return Bullet;
}();

/* harmony default export */ __webpack_exports__["default"] = (Bullet);

/***/ }),

/***/ "./src/scripts/hero.js":
/*!*****************************!*\
  !*** ./src/scripts/hero.js ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var Hero = /*#__PURE__*/function () {
  function Hero() {
    _classCallCheck(this, Hero);

    this.x = 0;
    this.y = 100;
    this.speed = 2;
    this.turnRate = 0;
    this.drawHero = this.drawHero.bind(this);
    this.animate = this.animate.bind(this);
    this.move = this.move.bind(this);
    this.keysPressed = this.keysPressed.bind(this);
    this.keysUp = this.keysUp.bind(this);
    this.turnLeft = this.turnLeft.bind(this);
    this.turnRight = this.turnRight.bind(this);
  }

  _createClass(Hero, [{
    key: "drawHero",
    value: function drawHero() {
      var canvas = document.getElementById('canvas');
      var ctx = canvas.getContext('2d');
      var image = document.getElementById('source');
      this.animateTurn(ctx, this.x, this.y, image);
    }
  }, {
    key: "animateTurn",
    value: function animateTurn(ctx, x, y, image) {
      ctx.save();
      ctx.translate(x, y);
      ctx.translate(20, 28);
      ctx.rotate(this.turnRate * Math.PI / 180);
      ctx.translate(-20, -28);
      ctx.drawImage(image, 0, 0, 40, 56);
      ctx.restore();
    }
  }, {
    key: "move",
    value: function move() {
      this.x += this.speed * Math.cos(this.turnRate * Math.PI / 180);
      this.y += this.speed * Math.sin(this.turnRate * Math.PI / 180);
    }
  }, {
    key: "turnLeft",
    value: function turnLeft() {
      this.turnRate += -8;
    }
  }, {
    key: "turnRight",
    value: function turnRight() {
      this.turnRate += 8;
    }
  }, {
    key: "keysPressed",
    value: function keysPressed(e) {
      if (e.key == "Right" || e.key == "ArrowRight") {
        this.turnRight();
      } else if (e.key == "Left" || e.key == "ArrowLeft") {
        this.turnLeft();
      }
    }
  }, {
    key: "keysUp",
    value: function keysUp(e) {
      if (e.key == "Right" || e.key == "ArrowRight" || e.key == "Left" || e.key == "ArrowLeft") {
        this.turnRate = this.turnRate;
      }
    }
  }, {
    key: "animate",
    value: function animate() {
      var canvas = document.getElementById('canvas');
      var ctx = canvas.getContext('2d');
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      ctx.fillStyle = 'green';
      ctx.fillRect(0, 0, 1200, 600);
      this.drawHero();
      this.move();

      if (this.x > canvas.width) {
        this.x = 0;
      }

      if (this.y > canvas.height) {
        this.y = 0;
      }

      if (this.x < 0) {
        this.x = canvas.width;
      }

      if (this.y < 0) {
        this.y = canvas.height;
      }

      document.addEventListener("keydown", this.keysPressed);
      document.addEventListener("keyup", this.keysUp);
      requestAnimationFrame(this.animate);
    }
  }]);

  return Hero;
}();

/* harmony default export */ __webpack_exports__["default"] = (Hero);

/***/ }),

/***/ "./src/styles/index.scss":
/*!*******************************!*\
  !*** ./src/styles/index.scss ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2ltYWdlcy9ibHVlc2hvdC5wbmciLCJ3ZWJwYWNrOi8vLy4vc3JjL2luZGV4LmpzIiwid2VicGFjazovLy8uL3NyYy9zY3JpcHRzL2J1bGxldC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvc2NyaXB0cy9oZXJvLmpzIiwid2VicGFjazovLy8uL3NyYy9zdHlsZXMvaW5kZXguc2Nzcz9jODA3Il0sIm5hbWVzIjpbImNhbnZhc0N0eCIsImRvY3VtZW50IiwiYWRkRXZlbnRMaXN0ZW5lciIsImNhbnZhcyIsImdldEVsZW1lbnRCeUlkIiwiY3R4IiwiZ2V0Q29udGV4dCIsImZpbGxTdHlsZSIsImZpbGxSZWN0IiwicGxheWVyIiwiSGVybyIsImRyYXdIZXJvIiwiYnVsbGV0IiwiQnVsbGV0IiwiZHJhd0J1bGxldCIsIngiLCJ5Iiwic2hvb3RlciIsInNwZWVkIiwid2hvU2hvdCIsImJpbmQiLCJpbWFnZSIsIkltYWdlIiwiY29uc29sZSIsImxvZyIsIm9ubG9hZCIsImRyYXdJbWFnZSIsInNyYyIsImJsdWVidWxsZXQiLCJ0dXJuUmF0ZSIsImFuaW1hdGUiLCJtb3ZlIiwia2V5c1ByZXNzZWQiLCJrZXlzVXAiLCJ0dXJuTGVmdCIsInR1cm5SaWdodCIsImFuaW1hdGVUdXJuIiwic2F2ZSIsInRyYW5zbGF0ZSIsInJvdGF0ZSIsIk1hdGgiLCJQSSIsInJlc3RvcmUiLCJjb3MiLCJzaW4iLCJlIiwia2V5IiwiY2xlYXJSZWN0Iiwid2lkdGgiLCJoZWlnaHQiLCJyZXF1ZXN0QW5pbWF0aW9uRnJhbWUiXSwibWFwcGluZ3MiOiI7UUFBQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTs7O1FBR0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7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OztBQUtVcEIsbUVBQWYsRTs7Ozs7Ozs7Ozs7QUMvRkEsdUMiLCJmaWxlIjoibWFpbi5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiL2Rpc3QvXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vc3JjL2luZGV4LmpzXCIpO1xuIiwiZXhwb3J0IGRlZmF1bHQgXCJpbWFnZXMvYmx1ZXNob3QucG5nXCI7IiwiaW1wb3J0IFwiLi9zdHlsZXMvaW5kZXguc2Nzc1wiO1xuaW1wb3J0IEhlcm8gZnJvbSAnLi9zY3JpcHRzL2hlcm8nO1xuaW1wb3J0IEJ1bGxldCBmcm9tICcuL3NjcmlwdHMvYnVsbGV0JztcblxuY29uc3QgY2FudmFzQ3R4ID0gZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignRE9NQ29udGVudExvYWRlZCcsICgpID0+IHtcbiAgICBjb25zdCBjYW52YXMgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY2FudmFzJyk7XG4gICAgY29uc3QgY3R4ID0gY2FudmFzLmdldENvbnRleHQoJzJkJyk7XG5cbiAgICAvLyBjb25zdCBza3kgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnc2t5Jyk7XG4gICAgLy8gY3R4LmRyYXdJbWFnZShza3ksIDAsIDAsIDEwMDAsIDYwMCwgMCwgMCwgMTAwMCwgNjAwKTtcblxuXG4gICAgXG4gICAgY3R4LmZpbGxTdHlsZSA9ICdncmVlbic7XG4gICAgY3R4LmZpbGxSZWN0KDAsIDAsIDEyMDAsIDYwMCk7XG5cbiAgICBsZXQgcGxheWVyID0gbmV3IEhlcm8oKTtcbiAgICBwbGF5ZXIuZHJhd0hlcm8oKTtcbiAgICAvLyBwbGF5ZXIuYW5pbWF0ZSgpO1xuXG4gICAgbGV0IGJ1bGxldCA9IG5ldyBCdWxsZXQoMCwgMCwgXCJoZXJvXCIpO1xuICAgIGJ1bGxldC5kcmF3QnVsbGV0KCk7XG5cbiAgICBcbn0pO1xuXG5cbiIsImltcG9ydCBibHVlYnVsbGV0IGZyb20gJy4uL2ltYWdlcy9ibHVlc2hvdC5wbmcnXG5cbmNsYXNzIEJ1bGxldHtcbiAgICBjb25zdHJ1Y3Rvcih4LHksIHNob290ZXIpe1xuICAgICAgICB0aGlzLnggPSB4O1xuICAgICAgICB0aGlzLnkgPSB5O1xuICAgICAgICB0aGlzLnNwZWVkID0gMi41O1xuICAgICAgICB0aGlzLndob1Nob3QgPSBzaG9vdGVyO1xuICAgICAgICB0aGlzLmRyYXdCdWxsZXQgPSB0aGlzLmRyYXdCdWxsZXQuYmluZCh0aGlzKTtcbiAgICB9XG5cbiAgICBkcmF3QnVsbGV0KCl7XG4gICAgICAgIGNvbnN0IGNhbnZhcyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjYW52YXMnKTtcbiAgICAgICAgY29uc3QgY3R4ID0gY2FudmFzLmdldENvbnRleHQoJzJkJyk7XG4gICAgICAgIGNvbnN0IGltYWdlID0gbmV3IEltYWdlKCk7XG4gICAgICAgIGNvbnNvbGUubG9nKGltYWdlKTtcbiAgICAgICAgaW1hZ2Uub25sb2FkID0gKCkgPT4gY3R4LmRyYXdJbWFnZShpbWFnZSwgdGhpcy54LCB0aGlzLnksIDM1LCA2KTtcbiAgICBcbiAgICAgICAgaW1hZ2Uuc3JjID0gYmx1ZWJ1bGxldDtcbiAgICAgICAgY29uc29sZS5sb2coaW1hZ2UpO1xuICAgICAgICBjb25zb2xlLmxvZyhpbWFnZS5zcmMpO1xuICAgICAgICBcbiAgICB9XG5cbn1cblxuZXhwb3J0IGRlZmF1bHQgQnVsbGV0OyIsImNsYXNzIEhlcm8ge1xuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICB0aGlzLnggPSAwO1xuICAgICAgICB0aGlzLnkgPSAxMDA7XG4gICAgICAgIHRoaXMuc3BlZWQgPSAyO1xuICAgICAgICB0aGlzLnR1cm5SYXRlID0gMDtcbiAgICAgICAgdGhpcy5kcmF3SGVybyA9IHRoaXMuZHJhd0hlcm8uYmluZCh0aGlzKTtcbiAgICAgICAgdGhpcy5hbmltYXRlID0gdGhpcy5hbmltYXRlLmJpbmQodGhpcyk7XG4gICAgICAgIHRoaXMubW92ZSA9IHRoaXMubW92ZS5iaW5kKHRoaXMpO1xuICAgICAgICB0aGlzLmtleXNQcmVzc2VkID0gdGhpcy5rZXlzUHJlc3NlZC5iaW5kKHRoaXMpO1xuICAgICAgICB0aGlzLmtleXNVcCA9IHRoaXMua2V5c1VwLmJpbmQodGhpcyk7XG4gICAgICAgIHRoaXMudHVybkxlZnQgPSB0aGlzLnR1cm5MZWZ0LmJpbmQodGhpcyk7XG4gICAgICAgIHRoaXMudHVyblJpZ2h0ID0gdGhpcy50dXJuUmlnaHQuYmluZCh0aGlzKTtcbiAgICB9XG5cbiAgICBkcmF3SGVybygpe1xuICAgICAgICBjb25zdCBjYW52YXMgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY2FudmFzJyk7XG4gICAgICAgIGNvbnN0IGN0eCA9IGNhbnZhcy5nZXRDb250ZXh0KCcyZCcpO1xuICAgICAgICBjb25zdCBpbWFnZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdzb3VyY2UnKTtcbiAgICAgICAgdGhpcy5hbmltYXRlVHVybihjdHgsIHRoaXMueCwgdGhpcy55LCBpbWFnZSlcblxuXG4gICAgfVxuXG4gICAgYW5pbWF0ZVR1cm4oY3R4LCB4LCB5LCBpbWFnZSl7XG4gICAgICAgIGN0eC5zYXZlKCk7XG4gICAgICAgIGN0eC50cmFuc2xhdGUoeCwgeSk7XG4gICAgICAgIGN0eC50cmFuc2xhdGUoMjAsIDI4KTtcbiAgICAgICAgY3R4LnJvdGF0ZSh0aGlzLnR1cm5SYXRlICogTWF0aC5QSSAvIDE4MCk7XG4gICAgICAgIGN0eC50cmFuc2xhdGUoLTIwLCAtMjgpO1xuICAgICAgICBjdHguZHJhd0ltYWdlKGltYWdlLCAwLCAwLCA0MCwgNTYpO1xuICAgICAgICBjdHgucmVzdG9yZSgpO1xuICAgIH1cblxuICAgIG1vdmUoKXtcbiAgICAgICAgdGhpcy54ICs9IHRoaXMuc3BlZWQgKiBNYXRoLmNvcyh0aGlzLnR1cm5SYXRlICogTWF0aC5QSSAvIDE4MCk7XG4gICAgICAgIHRoaXMueSArPSB0aGlzLnNwZWVkICogTWF0aC5zaW4odGhpcy50dXJuUmF0ZSAqIE1hdGguUEkgLyAxODApO1xuICAgIH1cblxuICAgIHR1cm5MZWZ0KCl7XG4gICAgICAgIHRoaXMudHVyblJhdGUgKz0gLTg7XG4gICAgfVxuXG4gICAgdHVyblJpZ2h0KCl7XG4gICAgICAgIHRoaXMudHVyblJhdGUgKz0gODtcblxuICAgIH1cblxuICAgIGtleXNQcmVzc2VkKGUpe1xuICAgICAgICBpZiAoZS5rZXkgPT0gXCJSaWdodFwiIHx8IGUua2V5ID09IFwiQXJyb3dSaWdodFwiKSB7XG4gICAgICAgICAgICB0aGlzLnR1cm5SaWdodCgpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYgKGUua2V5ID09IFwiTGVmdFwiIHx8IGUua2V5ID09IFwiQXJyb3dMZWZ0XCIpIHtcbiAgICAgICAgICAgIHRoaXMudHVybkxlZnQoKTtcbiAgICAgICAgfVxuICAgIH0gXG5cbiAgICBrZXlzVXAoZSkge1xuICAgICAgICBpZiAoZS5rZXkgPT0gXCJSaWdodFwiIHx8IGUua2V5ID09IFwiQXJyb3dSaWdodFwiIHx8IGUua2V5ID09IFwiTGVmdFwiIHx8IGUua2V5ID09IFwiQXJyb3dMZWZ0XCIpe1xuICAgICAgICAgICAgdGhpcy50dXJuUmF0ZSA9IHRoaXMudHVyblJhdGU7XG4gICAgICAgIH1cbiAgICB9IFxuXG5cbiAgICBhbmltYXRlKCl7XG4gICAgICAgIGNvbnN0IGNhbnZhcyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjYW52YXMnKTtcbiAgICAgICAgY29uc3QgY3R4ID0gY2FudmFzLmdldENvbnRleHQoJzJkJyk7XG4gICAgICAgIGN0eC5jbGVhclJlY3QoMCwgMCwgY2FudmFzLndpZHRoLCBjYW52YXMuaGVpZ2h0KVxuXG4gICAgICAgIGN0eC5maWxsU3R5bGUgPSAnZ3JlZW4nO1xuICAgICAgICBjdHguZmlsbFJlY3QoMCwgMCwgMTIwMCwgNjAwKTtcbiAgICAgICAgdGhpcy5kcmF3SGVybygpO1xuICAgICAgICB0aGlzLm1vdmUoKTtcblxuICAgICAgICBpZiAodGhpcy54ID4gY2FudmFzLndpZHRoKSB7XG4gICAgICAgICAgICB0aGlzLnggPSAwO1xuICAgICAgICB9XG4gICAgICAgIGlmICh0aGlzLnkgPiBjYW52YXMuaGVpZ2h0KSB7XG4gICAgICAgICAgICB0aGlzLnkgPSAwO1xuICAgICAgICB9XG4gICAgICAgIGlmICh0aGlzLnggPCAwKSB7XG4gICAgICAgICAgICB0aGlzLnggPSBjYW52YXMud2lkdGg7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHRoaXMueSA8IDApIHtcbiAgICAgICAgICAgIHRoaXMueSA9IGNhbnZhcy5oZWlnaHQ7XG4gICAgICAgIH1cbiAgICAgICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcImtleWRvd25cIiwgdGhpcy5rZXlzUHJlc3NlZCk7XG4gICAgICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJrZXl1cFwiLCB0aGlzLmtleXNVcCk7XG5cbiAgICAgICAgcmVxdWVzdEFuaW1hdGlvbkZyYW1lKHRoaXMuYW5pbWF0ZSk7XG4gICAgfVxuXG59XG5cblxuZXhwb3J0IGRlZmF1bHQgSGVybzsiLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW4iXSwic291cmNlUm9vdCI6IiJ9