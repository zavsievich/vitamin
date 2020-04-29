"use strict";

function menuWrap() {
  var menuList = document.querySelector('.js-menu');
  var btnMenu = document.querySelector('.js-toggle');
  var header = document.querySelector('.js-header');
  var objRef = document.body;
  var activeClass = 'is-active';
  var notChange = 'not-change';

  function headerChange() {
    window.onscroll = function showHeader() {
      if (header.classList.contains(notChange)) {
        header.classList.remove(activeClass);
      } else if (!menuList.classList.contains(activeClass) && window.pageYOffset < 50) {
        header.classList.add(activeClass);
      } else {
        header.classList.remove(activeClass);
      }
    };
  }

  headerChange();

  function openMenu() {
    btnMenu.addEventListener('click', toggleMenu);

    function toggleMenu() {
      btnMenu.classList.toggle(activeClass);
      menuList.classList.toggle(activeClass);
      objRef.classList.toggle(activeClass);

      if (header.classList.contains(notChange)) {
        header.classList.toggle(activeClass);
      } else if (window.pageYOffset < 50 || !header.classList.contains(activeClass)) {
        header.classList.add(activeClass);
      } else {
        header.classList.remove(activeClass);
      }
    }
  }

  openMenu();
}

menuWrap();

function sliders() {
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
}

sliders();