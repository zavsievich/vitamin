"use strict";

var _menu;

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var menu = (_menu = {
  menuList: document.querySelector('.js-menu'),
  btnMenu: document.querySelector('.js-toggle'),
  header: document.querySelector('.js-header'),
  windowDistance: 50,
  isTransparent: null,
  init: function init() {
    this.isTransparent = this.isTransparent();
    this.showHeader();
    this.toggleMenu();
  },
  showHeader: function showHeader() {
    var _this = this;

    window.addEventListener('scroll', function () {
      _this.toggleMenuState();
    });
  },
  toggleMenu: function toggleMenu() {
    var _this2 = this;

    this.btnMenu.addEventListener('click', function () {
      _this2.btnMenu.classList.toggle('is-active');

      _this2.menuList.classList.toggle('is-active');

      document.body.classList.toggle('is-active');

      if (document.body.classList.contains('is-active')) {
        _this2.makeHeaderTransparent();
      } else {
        _this2.toggleMenuState();
      }
    });
  },
  toggleMenuState: function toggleMenuState() {
    if (window.pageYOffset < this.windowDistance && this.isTransparent) {
      this.makeHeaderTransparent();
    } else {
      this.makeHeaderSolid();
    }
  }
}, _defineProperty(_menu, "isTransparent", function isTransparent() {
  return this.header.classList.contains('header__wrap--transparent');
}), _defineProperty(_menu, "makeHeaderSolid", function makeHeaderSolid() {
  this.header.classList.remove('header__wrap--transparent');
}), _defineProperty(_menu, "makeHeaderTransparent", function makeHeaderTransparent() {
  this.header.classList.add('header__wrap--transparent');
}), _menu);
menu.init();

var accordionWrap = function accordionWrap() {
  var activeClass = 'is-active';
  var accord = Array.prototype.slice.call(document.querySelectorAll('.js-accord'));
  accord.forEach(function (item) {
    item.addEventListener('click', function openContent() {
      console.log('click');
      var activeAccord = document.querySelector('.js-accord.' + activeClass);
      activeAccord.classList.remove(activeClass);
      item.classList.add(activeClass);
    });
  });
};

accordionWrap();

var sliders = function sliders() {
  function productSlider() {
    var productCarousel = document.querySelector('.js-product-carousel');
    window.addEventListener('resize', checkWidthAndInitializeSlider);

    function checkWidthAndInitializeSlider() {
      if (window.innerWidth > 900 && !productCarousel.classList.contains('slick-initialized')) {
        InitializeProductSlider();
      }
    }

    function InitializeProductSlider() {
      $(productCarousel).slick({
        arrows: false,
        dots: true,
        appendDots: $('.js-product-dots'),
        responsive: [{
          breakpoint: 900,
          settings: "unslick"
        }]
      });
    }

    InitializeProductSlider();
  }

  productSlider();

  function reviewsSlider() {
    $('.js-reviews-carousel').slick({
      arrows: false,
      dots: true,
      appendDots: $('.js-reviews-dots')
    });
  }

  reviewsSlider();
};

sliders();