class NewMenu {
    menuList = document.querySelector('.js-menu');
    btnMenu = document.querySelector('.js-toggle');
    header = document.querySelector('.js-header');
    windowDistance = 50;
    isTransparent = null;

    init() {
        this.isTransparent = this.isTransparente();
        this.scrollListner();
        this.toggleMenu();
    }

    scrollListner() {
        window.addEventListener('scroll', () => {
            this.toggleMenuState();
        })
    }

    toggleMenu() {
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
    }

    toggleMenuState() {
        if (window.pageYOffset < this.windowDistance && this.isTransparent) {
            this.makeHeaderTransparent();
        } else {
            this.makeHeaderSolid();
        }
    }

    isTransparente() {
        return this.header.classList.contains('header__wrap--transparent');
    }

    makeHeaderSolid() {
        this.header.classList.remove('header__wrap--transparent');
    }

    makeHeaderTransparent() {
        this.header.classList.add('header__wrap--transparent');
    }
}

const newMenu = new NewMenu();
newMenu.init();

const accordionList = {
    items: Array.prototype.slice.call(document.querySelectorAll('.js-accord')),
    active: null,

    init: function () {
        this.active = this.items[0];
        this.initClick();
    },

    initClick: function () {
        this.items.forEach((item) => {
            item.querySelector(".js-accord-btn").addEventListener('click', (event) => {
                this.openItem(item, event.target);
            });

            item.addEventListener('keydown', (event) => {
                this.initPress(event);
            })
        });
    },

    initPress: function (event) {
        const triggers = Array.prototype.slice.call(document.querySelectorAll('.js-accord-btn'));
        const target = event.target;
        const index = triggers.indexOf(target);
        const key = event.which.toString();
        const length = triggers.length;
        const lastChild = length - 1;

        if (target.classList.contains('js-accord-btn')) {
            if (key === '38') {
                if (index === 0) {
                    console.log(lastChild);
                    triggers[lastChild].focus();
                    event.preventDefault();
                } else {
                    let newIndex = index - 1;
                    triggers[newIndex].focus();
                    event.preventDefault();
                }
            } else if (key === '40') {
                if (index === length - 1) {
                    console.log(lastChild);
                    triggers[0].focus();
                    event.preventDefault();
                } else {
                    let newIndex = index + 1;
                    triggers[newIndex].focus();
                    event.preventDefault();
                }
            } else if (key === '36') {
                triggers[0].focus();
                event.preventDefault();

            } else if (key === '35') {
                triggers[lastChild].focus();
                event.preventDefault();
            }
        }
    },

    openItem: function (root, item) {
        this.shrink();
        this.expand(item);
        this.controls(item);
        this.active = root;
    },

    expand: function (item) {
        const expanded = document.querySelector('[aria-expanded="true"]');
        expanded.setAttribute('aria-expanded', 'false');
        item.setAttribute('aria-expanded', 'true');
    },

    shrink: function () {
        this.active.querySelector('.js-accord-body').setAttribute('hidden', true);
    },

    controls: function (item) {
        const btnControlsId = item.getAttribute('aria-controls');
        const openList = document.getElementById(btnControlsId);
        openList.removeAttribute('hidden');
    },
};

accordionList.init();

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













































