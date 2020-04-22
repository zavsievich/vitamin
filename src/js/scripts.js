// open menu
function openMenu() {
    const btnMenu = document.querySelector('.js-toggle');
    const menuList = document.querySelector('.js-menu');

    btnMenu.addEventListener('click', toggleMenu);

    function toggleMenu() {
        btnMenu.classList.toggle('is-active');
        menuList.classList.toggle('is-active');
    }
}

openMenu();

// slick-slider

$('.js-product-carousel').slick({
    arrows: false,
    dots: true,
    appendDots: $('.js-product-dots'),
});

$('.js-reviews-carousel').slick({
    arrows: false,
    dots: true,
    appendDots: $('.js-reviews-dots'),
});
