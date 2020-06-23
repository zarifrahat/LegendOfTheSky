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
  ctx.fillRect(0, 0, 1000, 600);
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
      image.src = _images_blueshot_png__WEBPACK_IMPORTED_MODULE_0__["default"];

      image.onload = function () {
        return ctx.drawImage(image, _this.x, _this.y, 35, 6);
      };
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
      // console.log(image);
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
      ctx.drawImage(image, x, y, 40, 56);
      ctx.restore();
    }
  }, {
    key: "move",
    value: function move() {
      this.x += this.speed;
    }
  }, {
    key: "turnLeft",
    value: function turnLeft() {
      this.turnRate += -1;
    }
  }, {
    key: "turnRight",
    value: function turnRight() {
      this.turnRate += 1;
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
      ctx.fillRect(0, 0, 1000, 600);
      this.drawHero();
      this.move();

      if (this.x > canvas.height) {
        this.x = 0;
      }

      if (this.y > canvas.width) {
        this.y = 0;
      }

      if (this.x < 0) {
        this.x = canvas.height;
      }

      if (this.y < 0) {
        this.y = canvas.width;
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2ltYWdlcy9ibHVlc2hvdC5wbmciLCJ3ZWJwYWNrOi8vLy4vc3JjL2luZGV4LmpzIiwid2VicGFjazovLy8uL3NyYy9zY3JpcHRzL2J1bGxldC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvc2NyaXB0cy9oZXJvLmpzIiwid2VicGFjazovLy8uL3NyYy9zdHlsZXMvaW5kZXguc2Nzcz9jODA3Il0sIm5hbWVzIjpbImNhbnZhc0N0eCIsImRvY3VtZW50IiwiYWRkRXZlbnRMaXN0ZW5lciIsImNhbnZhcyIsImdldEVsZW1lbnRCeUlkIiwiY3R4IiwiZ2V0Q29udGV4dCIsImZpbGxTdHlsZSIsImZpbGxSZWN0IiwicGxheWVyIiwiSGVybyIsImRyYXdIZXJvIiwiYnVsbGV0IiwiQnVsbGV0IiwiZHJhd0J1bGxldCIsIngiLCJ5Iiwic2hvb3RlciIsInNwZWVkIiwid2hvU2hvdCIsImJpbmQiLCJpbWFnZSIsIkltYWdlIiwic3JjIiwiYmx1ZWJ1bGxldCIsIm9ubG9hZCIsImRyYXdJbWFnZSIsInR1cm5SYXRlIiwiYW5pbWF0ZSIsIm1vdmUiLCJrZXlzUHJlc3NlZCIsImtleXNVcCIsInR1cm5MZWZ0IiwidHVyblJpZ2h0IiwiY29uc29sZSIsImxvZyIsImFuaW1hdGVUdXJuIiwic2F2ZSIsInRyYW5zbGF0ZSIsInJvdGF0ZSIsIk1hdGgiLCJQSSIsInJlc3RvcmUiLCJlIiwia2V5IiwiY2xlYXJSZWN0Iiwid2lkdGgiLCJoZWlnaHQiLCJyZXF1ZXN0QW5pbWF0aW9uRnJhbWUiXSwibWFwcGluZ3MiOiI7UUFBQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTs7O1FBR0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDBD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Q0UsU0FBSixHQUFnQixPQUFoQjtBQUNBRixTQUFHLENBQUNHLFFBQUosQ0FBYSxDQUFiLEVBQWdCLENBQWhCLEVBQW1CLElBQW5CLEVBQXlCLEdBQXpCO0FBQ0EsV0FBS0csUUFBTDtBQUNBLFdBQUtrQixJQUFMOztBQUVBLFVBQUksS0FBS2QsQ0FBTCxHQUFTWixNQUFNLENBQUM0QyxNQUFwQixFQUE0QjtBQUN4QixhQUFLaEMsQ0FBTCxHQUFTLENBQVQ7QUFDSDs7QUFDRCxVQUFJLEtBQUtDLENBQUwsR0FBU2IsTUFBTSxDQUFDMkMsS0FBcEIsRUFBMkI7QUFDdkIsYUFBSzlCLENBQUwsR0FBUyxDQUFUO0FBQ0g7O0FBQ0QsVUFBSSxLQUFLRCxDQUFMLEdBQVMsQ0FBYixFQUFnQjtBQUNaLGFBQUtBLENBQUwsR0FBU1osTUFBTSxDQUFDNEMsTUFBaEI7QUFDSDs7QUFDRCxVQUFJLEtBQUsvQixDQUFMLEdBQVMsQ0FBYixFQUFnQjtBQUNaLGFBQUtBLENBQUwsR0FBU2IsTUFBTSxDQUFDMkMsS0FBaEI7QUFDSDs7QUFDRDdDLGNBQVEsQ0FBQ0MsZ0JBQVQsQ0FBMEIsU0FBMUIsRUFBcUMsS0FBSzRCLFdBQTFDO0FBQ0E3QixjQUFRLENBQUNDLGdCQUFULENBQTBCLE9BQTFCLEVBQW1DLEtBQUs2QixNQUF4QztBQUVBaUIsMkJBQXFCLENBQUMsS0FBS3BCLE9BQU4sQ0FBckI7QUFDSDs7Ozs7O0FBS1VsQixtRUFBZixFOzs7Ozs7Ozs7OztBQy9GQSx1QyIsImZpbGUiOiJtYWluLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCIvZGlzdC9cIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi9zcmMvaW5kZXguanNcIik7XG4iLCJleHBvcnQgZGVmYXVsdCBcImltYWdlcy9ibHVlc2hvdC5wbmdcIjsiLCJpbXBvcnQgXCIuL3N0eWxlcy9pbmRleC5zY3NzXCI7XG5pbXBvcnQgSGVybyBmcm9tICcuL3NjcmlwdHMvaGVybyc7XG5pbXBvcnQgQnVsbGV0IGZyb20gJy4vc2NyaXB0cy9idWxsZXQnO1xuXG5jb25zdCBjYW52YXNDdHggPSBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdET01Db250ZW50TG9hZGVkJywgKCkgPT4ge1xuICAgIGNvbnN0IGNhbnZhcyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjYW52YXMnKTtcbiAgICBjb25zdCBjdHggPSBjYW52YXMuZ2V0Q29udGV4dCgnMmQnKTtcblxuICAgIC8vIGNvbnN0IHNreSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdza3knKTtcbiAgICAvLyBjdHguZHJhd0ltYWdlKHNreSwgMCwgMCwgMTAwMCwgNjAwLCAwLCAwLCAxMDAwLCA2MDApO1xuXG5cbiAgICBcbiAgICBjdHguZmlsbFN0eWxlID0gJ2dyZWVuJztcbiAgICBjdHguZmlsbFJlY3QoMCwgMCwgMTAwMCwgNjAwKTtcblxuICAgIGxldCBwbGF5ZXIgPSBuZXcgSGVybygpO1xuICAgIHBsYXllci5kcmF3SGVybygpO1xuICAgIC8vIHBsYXllci5hbmltYXRlKCk7XG5cbiAgICBsZXQgYnVsbGV0ID0gbmV3IEJ1bGxldCgwLCAwLCBcImhlcm9cIik7XG4gICAgYnVsbGV0LmRyYXdCdWxsZXQoKTtcblxuICAgIFxufSk7XG5cblxuIiwiaW1wb3J0IGJsdWVidWxsZXQgZnJvbSAnLi4vaW1hZ2VzL2JsdWVzaG90LnBuZydcblxuY2xhc3MgQnVsbGV0e1xuICAgIGNvbnN0cnVjdG9yKHgseSwgc2hvb3Rlcil7XG4gICAgICAgIHRoaXMueCA9IHg7XG4gICAgICAgIHRoaXMueSA9IHk7XG4gICAgICAgIHRoaXMuc3BlZWQgPSAyLjU7XG4gICAgICAgIHRoaXMud2hvU2hvdCA9IHNob290ZXI7XG4gICAgICAgIHRoaXMuZHJhd0J1bGxldCA9IHRoaXMuZHJhd0J1bGxldC5iaW5kKHRoaXMpO1xuICAgIH1cblxuICAgIGRyYXdCdWxsZXQoKXtcbiAgICAgICAgY29uc3QgY2FudmFzID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2NhbnZhcycpO1xuICAgICAgICBjb25zdCBjdHggPSBjYW52YXMuZ2V0Q29udGV4dCgnMmQnKTtcbiAgICAgICAgY29uc3QgaW1hZ2UgPSBuZXcgSW1hZ2UoKTtcbiAgICAgICAgaW1hZ2Uuc3JjID0gYmx1ZWJ1bGxldDtcbiAgICAgICAgaW1hZ2Uub25sb2FkID0gKCkgPT4gY3R4LmRyYXdJbWFnZShpbWFnZSwgdGhpcy54LCB0aGlzLnksIDM1LCA2KVxuICAgIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgQnVsbGV0OyIsImNsYXNzIEhlcm8ge1xuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICB0aGlzLnggPSAwO1xuICAgICAgICB0aGlzLnkgPSAxMDA7XG4gICAgICAgIHRoaXMuc3BlZWQgPSAyO1xuICAgICAgICB0aGlzLnR1cm5SYXRlID0gMDtcbiAgICAgICAgdGhpcy5kcmF3SGVybyA9IHRoaXMuZHJhd0hlcm8uYmluZCh0aGlzKTtcbiAgICAgICAgdGhpcy5hbmltYXRlID0gdGhpcy5hbmltYXRlLmJpbmQodGhpcyk7XG4gICAgICAgIHRoaXMubW92ZSA9IHRoaXMubW92ZS5iaW5kKHRoaXMpO1xuICAgICAgICB0aGlzLmtleXNQcmVzc2VkID0gdGhpcy5rZXlzUHJlc3NlZC5iaW5kKHRoaXMpO1xuICAgICAgICB0aGlzLmtleXNVcCA9IHRoaXMua2V5c1VwLmJpbmQodGhpcyk7XG4gICAgICAgIHRoaXMudHVybkxlZnQgPSB0aGlzLnR1cm5MZWZ0LmJpbmQodGhpcyk7XG4gICAgICAgIHRoaXMudHVyblJpZ2h0ID0gdGhpcy50dXJuUmlnaHQuYmluZCh0aGlzKTtcbiAgICB9XG5cbiAgICBkcmF3SGVybygpe1xuICAgICAgICBjb25zdCBjYW52YXMgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY2FudmFzJyk7XG4gICAgICAgIGNvbnN0IGN0eCA9IGNhbnZhcy5nZXRDb250ZXh0KCcyZCcpO1xuICAgICAgICBjb25zdCBpbWFnZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdzb3VyY2UnKTtcbiAgICAgICAgY29uc29sZS5sb2coaW1hZ2UpO1xuICAgICAgICB0aGlzLmFuaW1hdGVUdXJuKGN0eCwgdGhpcy54LCB0aGlzLnksIGltYWdlKVxuXG5cbiAgICB9XG5cbiAgICBhbmltYXRlVHVybihjdHgsIHgsIHksIGltYWdlKXtcbiAgICAgICAgY3R4LnNhdmUoKTtcbiAgICAgICAgY3R4LnRyYW5zbGF0ZSh4LCB5KTtcbiAgICAgICAgY3R4LnRyYW5zbGF0ZSgyMCwgMjgpO1xuICAgICAgICBjdHgucm90YXRlKHRoaXMudHVyblJhdGUgKiBNYXRoLlBJIC8gMTgwKTtcbiAgICAgICAgY3R4LnRyYW5zbGF0ZSgtMjAsIC0yOCk7XG4gICAgICAgIGN0eC5kcmF3SW1hZ2UoaW1hZ2UsIHgsIHksIDQwLCA1Nik7XG4gICAgICAgIGN0eC5yZXN0b3JlKCk7XG4gICAgfVxuXG4gICAgbW92ZSgpe1xuICAgICAgICB0aGlzLnggKz0gdGhpcy5zcGVlZDtcbiAgICB9XG5cbiAgICB0dXJuTGVmdCgpe1xuICAgICAgICB0aGlzLnR1cm5SYXRlICs9IC0xO1xuICAgIH1cblxuICAgIHR1cm5SaWdodCgpe1xuICAgICAgICB0aGlzLnR1cm5SYXRlICs9IDE7XG5cbiAgICB9XG5cbiAgICBrZXlzUHJlc3NlZChlKXtcbiAgICAgICAgaWYgKGUua2V5ID09IFwiUmlnaHRcIiB8fCBlLmtleSA9PSBcIkFycm93UmlnaHRcIikge1xuICAgICAgICAgICAgdGhpcy50dXJuUmlnaHQoKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmIChlLmtleSA9PSBcIkxlZnRcIiB8fCBlLmtleSA9PSBcIkFycm93TGVmdFwiKSB7XG4gICAgICAgICAgICB0aGlzLnR1cm5MZWZ0KCk7XG4gICAgICAgIH1cbiAgICB9IFxuXG4gICAga2V5c1VwKGUpIHtcbiAgICAgICAgaWYgKGUua2V5ID09IFwiUmlnaHRcIiB8fCBlLmtleSA9PSBcIkFycm93UmlnaHRcIiB8fCBlLmtleSA9PSBcIkxlZnRcIiB8fCBlLmtleSA9PSBcIkFycm93TGVmdFwiKXtcbiAgICAgICAgICAgIHRoaXMudHVyblJhdGUgPSB0aGlzLnR1cm5SYXRlO1xuICAgICAgICB9XG4gICAgfSBcblxuXG4gICAgYW5pbWF0ZSgpe1xuICAgICAgICBjb25zdCBjYW52YXMgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY2FudmFzJyk7XG4gICAgICAgIGNvbnN0IGN0eCA9IGNhbnZhcy5nZXRDb250ZXh0KCcyZCcpO1xuICAgICAgICBjdHguY2xlYXJSZWN0KDAsIDAsIGNhbnZhcy53aWR0aCwgY2FudmFzLmhlaWdodClcblxuICAgICAgICBjdHguZmlsbFN0eWxlID0gJ2dyZWVuJztcbiAgICAgICAgY3R4LmZpbGxSZWN0KDAsIDAsIDEwMDAsIDYwMCk7XG4gICAgICAgIHRoaXMuZHJhd0hlcm8oKTtcbiAgICAgICAgdGhpcy5tb3ZlKCk7XG5cbiAgICAgICAgaWYgKHRoaXMueCA+IGNhbnZhcy5oZWlnaHQpIHtcbiAgICAgICAgICAgIHRoaXMueCA9IDA7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHRoaXMueSA+IGNhbnZhcy53aWR0aCkge1xuICAgICAgICAgICAgdGhpcy55ID0gMDtcbiAgICAgICAgfVxuICAgICAgICBpZiAodGhpcy54IDwgMCkge1xuICAgICAgICAgICAgdGhpcy54ID0gY2FudmFzLmhlaWdodDtcbiAgICAgICAgfVxuICAgICAgICBpZiAodGhpcy55IDwgMCkge1xuICAgICAgICAgICAgdGhpcy55ID0gY2FudmFzLndpZHRoO1xuICAgICAgICB9XG4gICAgICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJrZXlkb3duXCIsIHRoaXMua2V5c1ByZXNzZWQpO1xuICAgICAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwia2V5dXBcIiwgdGhpcy5rZXlzVXApO1xuXG4gICAgICAgIHJlcXVlc3RBbmltYXRpb25GcmFtZSh0aGlzLmFuaW1hdGUpO1xuICAgIH1cblxufVxuXG5cbmV4cG9ydCBkZWZhdWx0IEhlcm87IiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luIl0sInNvdXJjZVJvb3QiOiIifQ==