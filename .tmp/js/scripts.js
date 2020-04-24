"use strict";

function menuWrap() {
  var menuList = document.querySelector('.js-menu');
  var btnMenu = document.querySelector('.js-toggle');
  var header = document.querySelector('.js-header');
  var objRef = document.body;
  var activeClass = 'is-active';

  function headerFix() {
    window.onscroll = function showHeader() {
      if (window.pageYOffset > 50 && !menuList.classList.contains(activeClass)) {
        header.classList.add(activeClass);
      } else {
        header.classList.remove(activeClass);
      }
    };
  }

  headerFix();

  function openMenu() {
    btnMenu.addEventListener('click', toggleMenu);

    function toggleMenu() {
      btnMenu.classList.toggle(activeClass);
      menuList.classList.toggle(activeClass);
      objRef.classList.toggle(activeClass);

      if (header.classList.contains(activeClass)) {
        header.classList.remove(activeClass);
      } else if (window.pageYOffset > 50) {
        header.classList.add(activeClass);
      }
    }
  }

  openMenu();
}

menuWrap();

function sliders() {
  function productSlider() {
    /*window.addEventListener("resize", function () {
        if (window.innerWidth <= 900) {
            $('.js-product-carousel').slick('unslick');
        } else {
            $('.js-product-carousel').slick({
                arrows: false,
                dots: true,
                appendDots: $('.js-product-dots'),
            });
        }
    });*/
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