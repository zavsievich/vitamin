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
    this.scrollListner();
    this.toggleMenu();
  },
  scrollListner: function scrollListner() {
    var _this = this;

    window.addEventListener('scroll', function () {
      _this.toggleMenuState();
    });
  },
  toggleMenu: function toggleMenu() {
    var _this2 = this;

    this.btnMenu.addEventListener('click', function () {
      _this2.btnMenu.classList.toggle('is-active');

      _this2.menuList.classList.toggle('is-open');

      document.body.classList.toggle('is-hidden');

      if (_this2.menuList.classList.contains('is-open')) {
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
var accordionList = {
  items: Array.prototype.slice.call(document.querySelectorAll('.js-accord')),
  active: null,
  init: function init() {
    this.active = this.items[0];
    this.initClick();
  },
  initClick: function initClick() {
    var _this3 = this;

    this.items.forEach(function (item) {
      item.querySelector("button").addEventListener('click', function (event) {
        _this3.openItem(item, event.target);
      });
    });
  },
  openItem: function openItem(root, item) {
    this.shrink();
    this.expand(item);
    this.controls(item);
    this.active = root;
  },
  expand: function expand(item) {
    var expanded = document.querySelector('[aria-expanded="true"]');
    expanded.setAttribute('aria-expanded', 'false');
    item.setAttribute('aria-expanded', 'true');
  },
  shrink: function shrink() {
    this.active.querySelector('.js-accord-body').setAttribute('hidden', true);
  },
  controls: function controls(item) {
    var btnControlsId = item.getAttribute('aria-controls');
    var openList = document.getElementById(btnControlsId);
    openList.removeAttribute('hidden');
  }
};
accordionList.init();

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