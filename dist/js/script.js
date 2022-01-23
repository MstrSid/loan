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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/js/main.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/js/main.js":
/*!************************!*\
  !*** ./src/js/main.js ***!
  \************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _modules_slider_slider_main__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/slider/slider-main */ "./src/js/modules/slider/slider-main.js");
/* harmony import */ var _modules_slider_slider_mini__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/slider/slider-mini */ "./src/js/modules/slider/slider-mini.js");
/* harmony import */ var _modules_playVideo__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/playVideo */ "./src/js/modules/playVideo.js");
/* harmony import */ var _modules_difference__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modules/difference */ "./src/js/modules/difference.js");
/* harmony import */ var _modules_form__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./modules/form */ "./src/js/modules/form.js");





window.addEventListener('DOMContentLoaded', () => {
  new _modules_slider_slider_main__WEBPACK_IMPORTED_MODULE_0__["default"]({
    container: '.page',
    buttons: '.next'
  }).render();
  new _modules_slider_slider_main__WEBPACK_IMPORTED_MODULE_0__["default"]({
    container: '.moduleapp',
    buttons: '.next',
    additionalPrev: '.prevmodule',
    additionalNext: '.nextmodule'
  }).render();
  new _modules_slider_slider_mini__WEBPACK_IMPORTED_MODULE_1__["default"]({
    container: '.showup__content-slider',
    prev: '.showup__prev',
    next: '.showup__next',
    activeClass: 'card-active',
    animate: true
  }).init();
  new _modules_slider_slider_mini__WEBPACK_IMPORTED_MODULE_1__["default"]({
    container: '.modules__content-slider',
    prev: '.modules__info-btns .slick-prev',
    next: '.modules__info-btns .slick-next',
    activeClass: 'card-active',
    animate: true,
    autoplay: true
  }).init();
  new _modules_slider_slider_mini__WEBPACK_IMPORTED_MODULE_1__["default"]({
    container: '.feed__slider',
    prev: '.feed__slider .slick-prev',
    next: '.feed__slider .slick-next',
    activeClass: 'feed__item-active'
  }).init();
  new _modules_playVideo__WEBPACK_IMPORTED_MODULE_2__["default"]('.showup .play', '.overlay').init();
  new _modules_playVideo__WEBPACK_IMPORTED_MODULE_2__["default"]('.module__video-item .play', '.overlay').init();
  new _modules_difference__WEBPACK_IMPORTED_MODULE_3__["default"]('.officerold', '.plus', '.officer__card-item').init();
  new _modules_difference__WEBPACK_IMPORTED_MODULE_3__["default"]('.officernew', '.plus', '.officer__card-item').init();
  new _modules_form__WEBPACK_IMPORTED_MODULE_4__["default"]('#b__form', 'assets/question.php').init();
  new _modules_form__WEBPACK_IMPORTED_MODULE_4__["default"]('#s__form', 'assets/question.php').init();
});

/***/ }),

/***/ "./src/js/modules/difference.js":
/*!**************************************!*\
  !*** ./src/js/modules/difference.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Difference; });
class Difference {
  constructor(featSelector, showSelector, items) {
    try {
      this.featureBlock = document.querySelector(featSelector);
      this.showButton = this.featureBlock.querySelector(showSelector);
      this.featureBlockItems = this.featureBlock.querySelectorAll(items);
      this.counter = 0;
    } catch (e) {}
  }

  hideItems(blockItems) {
    blockItems.forEach((item, i, arr) => {
      if (i !== arr.length - 1) {
        item.style.display = 'none';
      }
    });
  }

  showVisibleItem(item) {
    item.classList.add('animated', 'fadeIn');
    item.style.display = 'flex';
  }

  bindTriggers(showButton, counter, blockItems) {
    showButton.addEventListener('click', () => {
      this.showVisibleItem(blockItems[counter]);

      if (counter !== blockItems.length - 2) {
        counter++;
      } else {
        blockItems[blockItems.length - 1].classList.add('animated', 'fadeOut');
        blockItems[blockItems.length - 1].remove();
      }
    });
  }

  init() {
    try {
      this.hideItems(this.featureBlockItems);
      this.bindTriggers(this.showButton, this.counter, this.featureBlockItems);
    } catch (e) {}
  }

}

/***/ }),

/***/ "./src/js/modules/form.js":
/*!********************************!*\
  !*** ./src/js/modules/form.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Form; });
class Form {
  constructor(form, url) {
    try {
      this.form = document.querySelector(form);
      this.inputs = this.form.querySelectorAll('input');
      this.message = {
        loading: "Loading...",
        success: "Thank you! We are connect with you soon!",
        failure: "Oops, something went wrong..."
      };
      this.path = url;
    } catch (e) {}
  }

  clearInputs(inputs) {
    inputs.forEach(item => {
      item.value = '';
    });
  }

  checkMailInputs() {
    const inputs = document.querySelectorAll('[type="email"]');
    inputs.forEach(item => {
      item.addEventListener('keypress', function (e) {
        if (e.key.match(/[^a-z @ \. 0-9]/ig)) {
          e.preventDefault();
        }
      });
    });
  }

  initMask() {
    let setCursorPosition = (pos, elem) => {
      elem.addEventListener('click', () => {
        if (elem.setSelectionRange.length > 0) {
          elem.setSelectionRange(pos, pos);
        } else {
          if (elem.createTextRange.length > 0) {
            let range = elem.createTextRange();
            range.collapse(true);
            range.moveStart('character', pos);
            range.moveEnd('character', pos);
            range.select();
          }
        }
      });
    };

    function doMask(event) {
      let matrix = '+1 (___) ___-____',
          iterator = 0,
          def = matrix.replace(/\D/g, ''),
          val = this.value.replace(/\D/g, '');

      if (def.length >= val.length) {
        val = def;
      }

      this.value = matrix.replace(/./g, item => {
        return /[_\d]/.test(item) && iterator < val.length ? val.charAt(iterator++) : iterator >= val.length ? '' : item;
      });

      if (event.type == 'blur') {
        if (this.value.length === 4) {
          this.value = '';
        }
      }

      setCursorPosition(this.value.length, this);
    }

    let inputs = document.querySelectorAll('[name="phone"]');
    inputs.forEach(input => {
      input.addEventListener('input', doMask);
      input.addEventListener('focus', doMask);
      input.addEventListener('blur', doMask);
    });
  }

  async postData(url, data) {
    let res = await fetch(url, {
      method: "POST",
      body: data
    });
    return await res.text();
  }

  init() {
    try {
      this.checkMailInputs();
      this.initMask();
      this.form.addEventListener('submit', e => {
        e.preventDefault();
        let statusMsg = document.createElement('div');
        statusMsg.style.cssText = `
					margin-top: 15px;
					font-size: 18px;
					color: grey;
				`;
        this.form.parentNode.appendChild(statusMsg);
        statusMsg.textContent = this.message.loading;
        const formData = new FormData(this.form);
        this.postData(this.path, formData).then(res => {
          console.log(res);
          statusMsg.textContent = this.message.success;
        }).catch(() => {
          statusMsg.textContent = this.message.failure;
        }).finally(() => {
          this.clearInputs(this.inputs);
          setTimeout(() => {
            statusMsg.remove();
          }, 6000);
        });
      });
    } catch (e) {}
  }

}

/***/ }),

/***/ "./src/js/modules/playVideo.js":
/*!*************************************!*\
  !*** ./src/js/modules/playVideo.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return VideoPlayer; });
class VideoPlayer {
  constructor(triggers, popup) {
    this.buttons = document.querySelectorAll(triggers);
    this.popup = document.querySelector(popup);
    this.close = this.popup.querySelector('.close');
  }

  createPlayer(url) {
    this.player = new YT.Player('frame', {
      height: '100%',
      width: '100%',
      videoId: url
    });
    this.popup.style.display = 'flex';
  }

  bindTriggers() {
    this.buttons.forEach(btn => {
      btn.addEventListener('click', () => {
        if (document.querySelector('iframe#frame')) {
          if (this.videoId !== btn.getAttribute('data-url')) {
            this.videoId = btn.getAttribute('data-url');
            this.player.loadVideoById({
              videoId: this.videoId
            });
          }
        } else {
          this.videoId = btn.getAttribute('data-url');
          this.createPlayer(this.videoId);
        }
      });
    });
  }

  bindClose() {
    this.close.addEventListener('click', () => {
      try {
        this.popup.style.display = 'none';
        this.player.stopVideo();
        this.player.destroy();
      } catch (e) {
        console.error(e);
      }
    });
  }

  init() {
    if (this.buttons.length > 0) {
      const tag = document.createElement('script');
      tag.src = "http://www.youtube.com/iframe_api";
      const firstScriptTag = document.getElementsByTagName('script')[0];
      firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);
      this.bindTriggers();
      this.bindClose();
    }
  }

}

/***/ }),

/***/ "./src/js/modules/slider/slider-main.js":
/*!**********************************************!*\
  !*** ./src/js/modules/slider/slider-main.js ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return MainSlider; });
/* harmony import */ var _slider__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./slider */ "./src/js/modules/slider/slider.js");

class MainSlider extends _slider__WEBPACK_IMPORTED_MODULE_0__["default"] {
  constructor(prefs) {
    super(prefs);
  }

  showSlides(n) {
    try {
      if (n > this.slides.length - 1) {
        this.slideIndex = 0;
      }

      if (n < 0) {
        this.slideIndex = this.slides.length - 1;
      }

      try {
        this.hanson.style.opacity = '0';

        if (n === 2) {
          this.hanson.classList.add('animated');
          setTimeout(() => {
            this.hanson.style.opacity = '1';
            this.hanson.classList.add('slideInUp');
          }, 3000);
        } else {
          this.hanson.style.opacity = '0';
          this.hanson.classList.remove('animated');
          this.hanson.classList.remove('slideInUp');
        }
      } catch (e) {}

      [...this.slides].forEach(slide => {
        slide.style.display = 'none';

        if (slide.classList.contains('animated')) {
          slide.classList.remove('animated');
        }

        if (slide.classList.contains('fadeIn')) {
          slide.classList.remove('fadeIn');
        }
      });
      this.slides[this.slideIndex].style.display = 'block';
      this.slides[this.slideIndex].classList.add('animated', 'fadeIn');
    } catch (e) {}
  }

  plusSlides(n) {
    this.showSlides(this.slideIndex += n);
  }

  bindTriggers() {
    this.buttons.forEach(button => {
      button.addEventListener('click', () => {
        this.plusSlides(1);
      });
      button.parentNode.previousElementSibling.addEventListener('click', e => {
        e.preventDefault();
        this.slideIndex = 0;
        this.showSlides(this.slideIndex);
      });
    });
    this.additionalPrev.forEach(item => {
      item.addEventListener('click', e => {
        e.stopPropagation();
        e.preventDefault();
        this.plusSlides(-1);
      });
    });
    this.additionalNext.forEach(item => {
      item.addEventListener('click', e => {
        e.stopPropagation();
        e.preventDefault();
        this.plusSlides(1);
      });
    });
  }

  render() {
    if (this.container) {
      try {
        this.hanson = document.querySelector('.hanson');
      } catch (e) {
        console.error(e);
      }

      this.bindTriggers();
      this.showSlides(this.slideIndex);
    }
  }

}

/***/ }),

/***/ "./src/js/modules/slider/slider-mini.js":
/*!**********************************************!*\
  !*** ./src/js/modules/slider/slider-mini.js ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return MiniSlider; });
/* harmony import */ var _slider__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./slider */ "./src/js/modules/slider/slider.js");

class MiniSlider extends _slider__WEBPACK_IMPORTED_MODULE_0__["default"] {
  constructor(prefs) {
    super(prefs);
    this.hasButtonsInside = false;
  }

  bindTriggers() {
    this.next.addEventListener('click', () => {
      this.nextSlide();
    });
    this.prev.addEventListener('click', () => {
      this.prevSlide();
    });
  }

  excludeButtons() {
    [...this.slides].forEach(item => {
      if (item.tagName.toLowerCase() === 'button') {
        this.container.appendChild(item);
        this.hasButtonsInside = true;
      }
    });
  }

  nextSlide() {
    this.container.appendChild(this.slides[0]);
    this.excludeButtons();
    this.decorSlides();
  }

  prevSlide() {
    this.excludeButtons();
    let active;

    if (this.hasButtonsInside) {
      active = this.slides[this.slides.length - 3];
    } else {
      active = this.slides[this.slides.length - 1];
    }

    this.container.insertBefore(active, this.slides[0]);
    this.decorSlides();
  }

  decorSlides() {
    [...this.slides].forEach(slide => {
      try {
        slide.classList.remove(this.activeClass);

        if (this.animate) {
          slide.querySelector('.card__title').style.opacity = '0.4';
          slide.querySelector('.card__controls-arrow').style.opacity = '0';
        }
      } catch (e) {
        console.error(e);
      }
    });
    this.slides[0].classList.add(this.activeClass);

    if (this.animate) {
      this.slides[0].querySelector('.card__title').style.opacity = '1';
      this.slides[0].querySelector('.card__controls-arrow').style.opacity = '1';
    }
  }

  goAutoplay() {
    let startAutoplay = setInterval(() => this.nextSlide(), 5000);
    this.container.addEventListener('mouseenter', () => {
      try {
        clearInterval(startAutoplay);
      } catch (e) {
        console.error(e);
      }
    });
    this.prev.addEventListener('mouseenter', () => {
      try {
        clearInterval(startAutoplay);
      } catch (e) {
        console.error(e);
      }
    });
    this.next.addEventListener('mouseenter', () => {
      try {
        clearInterval(startAutoplay);
      } catch (e) {
        console.error(e);
      }
    });
    this.container.addEventListener('mouseleave', () => {
      try {
        startAutoplay = setInterval(() => this.nextSlide(), 5000);
      } catch (e) {
        console.error(e);
      }
    });
    this.prev.addEventListener('mouseleave', () => {
      try {
        startAutoplay = setInterval(() => this.nextSlide(), 5000);
      } catch (e) {
        console.error(e);
      }
    });
    this.next.addEventListener('mouseleave', () => {
      try {
        startAutoplay = setInterval(() => this.nextSlide(), 5000);
      } catch (e) {
        console.error(e);
      }
    });
  }

  init() {
    try {
      this.container.style.cssText = `
			display: flex;
			flex-wrap: wrap;
			overflow: hidden;
			align-items: flex-start;
		`;
      this.bindTriggers();
      this.decorSlides();

      if (this.autoplay) {
        this.goAutoplay();
      }
    } catch (e) {}
  }

}

/***/ }),

/***/ "./src/js/modules/slider/slider.js":
/*!*****************************************!*\
  !*** ./src/js/modules/slider/slider.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Slider; });
class Slider {
  constructor() {
    let {
      container = null,
      buttons = null,
      next = null,
      prev = null,
      additionalPrev = null,
      additionalNext = null,
      activeClass = '',
      animate = false,
      autoplay = false
    } = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    this.container = document.querySelector(container);

    try {
      this.slides = this.container.children;
    } catch (e) {}

    this.buttons = document.querySelectorAll(buttons);
    this.next = document.querySelector(next);
    this.prev = document.querySelector(prev);
    this.additionalPrev = document.querySelectorAll(additionalPrev);
    this.additionalNext = document.querySelectorAll(additionalNext);
    this.activeClass = activeClass;
    this.animate = animate;
    this.autoplay = autoplay;
    this.slideIndex = 0;
  }

}

/***/ })

/******/ });
//# sourceMappingURL=script.js.map