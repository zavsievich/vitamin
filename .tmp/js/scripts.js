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
      item.querySelector(".js-accord-btn").addEventListener('click', function (event) {
        _this3.openItem(item, event.target);
      });
      item.addEventListener('keydown', function (event) {
        _this3.initPress(event);
      });
    });
  },
  initPress: function initPress(event) {
    /*const triggers = Array.prototype.slice.call(document.querySelectorAll('.js-accord-btn'));
    const target = event.target;
    const key = event.which.toString();
    console.log(key);
    const ctrlModifier = (event.ctrlKey && key.match(/33|34/));
    if (target.classList.contains('js-accord-btn')) {
          if (key.match(/38|40/) || ctrlModifier) {
            const index = triggers.indexOf(target);
            const direction = (key.match(/34|40/)) ? 1 : -1;
            const length = triggers.length;
            const newIndex = (index + length + direction) % length;
              triggers[newIndex].focus();
            event.preventDefault();
        } else if (key.match(/36|35/)) {
            switch (key) {
                case '36':
                    triggers[0].focus();
                    break;
                case '35':
                    triggers[triggers.length - 1].focus();
                    break;
            }
            event.preventDefault();
        }
    }
    */
    var triggers = Array.prototype.slice.call(document.querySelectorAll('.js-accord-btn'));
    var target = event.target;
    var index = triggers.indexOf(target);
    var key = event.which.toString();
    var length = triggers.length;
    var lastChild = length - 1;

    if (target.classList.contains('js-accord-btn')) {
      if (key === '38') {
        if (index === 0) {
          console.log(lastChild);
          triggers[lastChild].focus();
          event.preventDefault();
        } else {
          var newIndex = index - 1;
          triggers[newIndex].focus();
          event.preventDefault();
        }
      } else if (key === '40') {
        if (index === length - 1) {
          console.log(lastChild);
          triggers[0].focus();
          event.preventDefault();
        } else {
          var _newIndex = index + 1;

          triggers[_newIndex].focus();

          event.preventDefault();
        }
      } else if (key === '36') {
        triggers[0].focus();
        event.preventDefault();
      } else if (key === '35') {
        triggers[lastChild].focus();
        event.preventDefault();
      }
    }
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