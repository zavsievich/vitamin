function menuWrap() {
    const menuList = document.querySelector('.js-menu');
    const btnMenu = document.querySelector('.js-toggle');
    const header = document.querySelector('.js-header');
    const active = 'is-active';
    const fixed = 'is-fixed';


    function headerFix() {
        window.onscroll = function showHeader() {

            if (window.pageYOffset > 50 && !(menuList.classList.contains(active))) {
                header.classList.add(fixed);
            } else {
                header.classList.remove(fixed);
            }
        };
    }

    headerFix();

    function openMenu() {

        btnMenu.addEventListener('click', toggleMenu);

        function toggleMenu() {
            btnMenu.classList.toggle(active);
            menuList.classList.toggle(active);

            if (header.classList.contains(fixed)) {
                header.classList.remove(fixed);
            } else if (window.pageYOffset > 50) {
                header.classList.add(fixed);
            }
        }
    }

    openMenu();
}

menuWrap();

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
