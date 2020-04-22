function menuWrap() {
    const menuList = document.querySelector('.js-menu');
    const btnMenu = document.querySelector('.js-toggle');
    const header = document.querySelector('.js-header');


    function headerFix() {
        window.onscroll = function showHeader() {

            if (window.pageYOffset > 50 && !(menuList.classList.contains('is-active'))) {
                header.classList.add('is-fixed');
            } else {
                header.classList.remove('is-fixed');
            }
        };
    }

    headerFix();

    function openMenu() {

        btnMenu.addEventListener('click', toggleMenu);

        function toggleMenu() {
            btnMenu.classList.toggle('is-active');
            menuList.classList.toggle('is-active');

            if (header.classList.contains('is-fixed')) {
                header.classList.remove('is-fixed');
            }
        }
    }

    openMenu();
}

menuWrap();

// slick-slider

function sliders() {
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
}

sliders();
