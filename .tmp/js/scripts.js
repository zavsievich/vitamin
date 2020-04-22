"use strict";

// open menu
function openMenu() {
  var btnMenu = document.querySelector('.js-toggle');
  var menuList = document.querySelector('.js-menu');
  btnMenu.addEventListener('click', toggleMenu);

  function toggleMenu() {
    btnMenu.classList.toggle('is-active');
    menuList.classList.toggle('is-active');
  }
}

openMenu(); // header fix

function fixHeader() {
  window.onscroll = function showHeader() {
    var header = document.querySelector('.js-header');

    if (window.pageYOffset > 400) {
      header.classList.add('is-fixed');
    } else {
      header.classList.remove('is-fixed');
    }
  };
}

fixHeader(); // slick-slider

$('.js-product-carousel').slick({
  arrows: false,
  dots: true,
  appendDots: $('.js-product-dots')
});
$('.js-reviews-carousel').slick({
  arrows: false,
  dots: true,
  appendDots: $('.js-reviews-dots')
});