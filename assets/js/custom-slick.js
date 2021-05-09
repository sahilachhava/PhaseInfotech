 (function ($) {
	"use strict";
    jQuery(document).on('ready', function() {
               /*================================
              ============ Slider =============
              =================================*/
                  var slider_for = $('.slider-for');
                    slider_for.slick({
                        slidesToShow: 1,
                        slidesToScroll: 1,
                        arrows: false,
                        draggable: false,
                        fade: true,
                        asNavFor: '.slider-nav'
                    });
                /*------------------------------------
                  Testimonial Slick Carousel as Nav
                --------------------------------------*/
                  var slider_nav = $('.slider-nav');
                    slider_nav.slick({
                        slidesToShow: 5,
                        slidesToScroll: 1,
                        asNavFor: '.slider-for',
                        dots: false,
                        arrows: true,
                        centerMode: true,
                        focusOnSelect: true,
                        centerPadding: '10px',
                        responsive: [
                            {
                              breakpoint: 450,
                              settings: {
                                dots: false,
                                slidesToShow: 5,  
                                centerPadding: '0px',
                                }
                            },
                            {
                              breakpoint: 420,
                              settings: {
                                autoplay: true,
                                dots: false,
                                slidesToShow: 1,
                                centerMode: false,
                                }
                            }
                        ]
                    });

    });
})(jQuery);      