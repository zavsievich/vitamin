const menu = {
    menuList: document.querySelector('.js-menu'),
    btnMenu: document.querySelector('.js-toggle'),
    header: document.querySelector('.js-header'),
    windowDistance: 50,
    isTransparent: null,

    init: function () {
        this.isTransparent = this.isTransparent();
        this.scrollListner();
        this.toggleMenu();
    },

    scrollListner: function () {
        window.addEventListener('scroll', () => {
            this.toggleMenuState();
        })
    },

    toggleMenu: function () {
        this.btnMenu.addEventListener('click', () => {

            this.btnMenu.classList.toggle('is-active');
            this.menuList.classList.toggle('is-open');
            document.body.classList.toggle('is-hidden');

            if (this.menuList.classList.contains('is-open')) {
                this.makeHeaderTransparent();
            } else {
                this.toggleMenuState();
            }

        });
    },

    toggleMenuState: function () {
        if (window.pageYOffset < this.windowDistance && this.isTransparent) {
            this.makeHeaderTransparent();
        } else {
            this.makeHeaderSolid();
        }
    },

    isTransparent: function () {
        return this.header.classList.contains('header__wrap--transparent');
    },

    makeHeaderSolid: function () {
        this.header.classList.remove('header__wrap--transparent');
    },

    makeHeaderTransparent: function () {
        this.header.classList.add('header__wrap--transparent');
    },
};

menu.init();

const accordionWrap = function () {
    const activeClass = 'is-active';
    const accord = Array.prototype.slice.call(document.querySelectorAll('.js-accord'));

    accord.forEach(function (item) {
        item.addEventListener('click', function openContent() {
            console.log('click');
            const activeAccord = document.querySelector('.js-accord.' + activeClass);

            activeAccord.classList.remove(activeClass);
            item.classList.add(activeClass);
        })

    })
};

accordionWrap();

const sliders = function () {
    function productSlider() {

        const productCarousel = document.querySelector('.js-product-carousel');

        window.addEventListener('resize', checkWidthAndInitializeSlider);

        function checkWidthAndInitializeSlider() {
            if (window.innerWidth > 900 && !(productCarousel.classList.contains('slick-initialized'))) {
                InitializeProductSlider();
            }
        }

        function InitializeProductSlider() {
            $(productCarousel).slick({
                arrows: false,
                dots: true,
                appendDots: $('.js-product-dots'),
                responsive: [
                    {
                        breakpoint: 900,
                        settings: "unslick"
                    }
                ]
            });
        }

        InitializeProductSlider();
    }

    productSlider();

    function reviewsSlider() {
        $('.js-reviews-carousel').slick({
            arrows: false,
            dots: true,
            appendDots: $('.js-reviews-dots'),
        });
    }

    reviewsSlider();
};

sliders();
