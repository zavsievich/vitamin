"use strict";

var menuWrap = function menuWrap() {
  var menuList = document.querySelector('.js-menu');
  var btnMenu = document.querySelector('.js-toggle');
  var header = document.querySelector('.js-header');
  var objRef = document.body;
  var activeClass = 'is-active';
  var notChange = 'not-change';
  var windowDistance = 50;
  window.addEventListener('scroll', function showHeader() {
    if (header.classList.contains(notChange)) {
      header.classList.remove(activeClass);
    } else if (!menuList.classList.contains(activeClass) && window.pageYOffset < windowDistance) {
      header.classList.add(activeClass);
    } else {
      header.classList.remove(activeClass);
    }
  });
  btnMenu.addEventListener('click', function toggleMenu() {
    btnMenu.classList.toggle(activeClass);
    menuList.classList.toggle(activeClass);
    objRef.classList.toggle(activeClass);

    if (header.classList.contains(notChange)) {
      header.classList.toggle(activeClass);
    } else if (window.pageYOffset < windowDistance || !header.classList.contains(activeClass)) {
      header.classList.add(activeClass);
    } else {
      header.classList.remove(activeClass);
    }
  });
};

menuWrap();

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