// open menu
function menuWrap() {
    const menuList = document.querySelector('.js-menu');

    function openMenu() {
        const btnMenu = document.querySelector('.js-toggle');

        btnMenu.addEventListener('click', toggleMenu);

        function toggleMenu() {
            btnMenu.classList.toggle('is-active');
            menuList.classList.toggle('is-active');
        }
    }

    openMenu();

// header fix
    function fixHeader() {

        window.onscroll = function showHeader() {

            const header = document.querySelector('.js-header');

            if  (window.pageYOffset > 50 && !(menuList.classList.contains('is-active'))) {
                header.classList.add('is-fixed');
            } else {
                header.classList.remove('is-fixed');
            }
        }
    }

    fixHeader();

}

menuWrap();

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
