class Menu {
    menuList = document.querySelector('.js-menu');
    btnMenu = document.querySelector('.js-toggle');
    header = document.querySelector('.js-header');
    windowDistance = 50;
    Transparent = null;

    constructor () {
        this.Transparent = this.isTransparent();
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
        if (window.pageYOffset < this.windowDistance && this.Transparent) {
            this.makeHeaderTransparent();
        } else {
            this.makeHeaderSolid();
        }
    }

    isTransparent() {
        return this.header.classList.contains('is-transparent');
    }

    makeHeaderSolid() {
        this.header.classList.remove('is-transparent');
    }

    makeHeaderTransparent() {
        this.header.classList.add('is-transparent');
    }
}

const menu = new Menu();

class AccordionList {
    items = Array.prototype.slice.call(document.querySelectorAll('.js-accord'));
    active = null;

    constructor () {
        this.active = this.items[0];
        this.initClick();
    }

    initClick() {
        this.items.forEach((item) => {
            item.querySelector(".js-accord-btn").addEventListener('click', (event) => {
                this.openItem(item, event.target);
            });

            item.addEventListener('keydown', (event) => {
                this.initPress(event);
            })
        });
    }

    initPress(event) {
        const triggers = Array.prototype.slice.call(document.querySelectorAll('.js-accord-btn'));
        const target = event.target;
        const index = triggers.indexOf(target);
        const key = event.which.toString();
        const length = triggers.length;
        const lastChild = length - 1;

        if (target.classList.contains('js-accord-btn')) {
            if (key === '38') {
                if (index === 0) {
                    triggers[lastChild].focus();
                    event.preventDefault();
                } else {
                    let newIndex = index - 1;
                    triggers[newIndex].focus();
                    event.preventDefault();
                }
            } else if (key === '40') {
                if (index === length - 1) {
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
    }

    openItem(root, item) {
        this.shrink();
        this.expand(item);
        this.controls(item);
        this.active = root;
    }

    expand(item) {
        const expanded = document.querySelector('[aria-expanded="true"]');
        expanded.setAttribute('aria-expanded', 'false');
        item.setAttribute('aria-expanded', 'true');
    }

    shrink() {
        this.active.querySelector('.js-accord-body').setAttribute('hidden', true);
    }

    controls(item) {
        const btnControlsId = item.getAttribute('aria-controls');
        const openList = document.getElementById(btnControlsId);
        openList.removeAttribute('hidden');
    }
}

const accordionList = new AccordionList();

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













































