var $ = window.jQuery;
$( document ).ready(function() {
    (function($) {
        "use strict";

        const carousel = function () {
            $('#artist-slider').owlCarousel({
                loop: true,
                autoplay: false,
                margin: 0,
                animateOut: 'fadeOut',
                animateIn: 'fadeIn',
                nav: true,
                navText: ["", ""],
                dots: true,
                autoplayHoverPause: false,
                items: 1,
                responsive: {
                    0: {
                        items: 1
                    },
                    600: {
                        items: 1
                    },
                    1000: {
                        items: 2
                    }
                }
            });
        };
        carousel();
    })(jQuery);
});
