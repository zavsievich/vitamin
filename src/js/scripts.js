function menuWrap() {
    const menuList = document.querySelector('.js-menu');
    const btnMenu = document.querySelector('.js-toggle');
    const header = document.querySelector('.js-header');
    const objRef = document.body;
    const activeClass = 'is-active';

    function headerFix() {
        window.onscroll = function showHeader() {

            if (window.pageYOffset > 50 && !(menuList.classList.contains(activeClass))) {
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
