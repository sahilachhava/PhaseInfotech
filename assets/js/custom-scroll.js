 (function ($) {
  "use strict";
      jQuery(document).on('ready', function() {

      	//jQuery for page scrolling feature - requires jQuery Easing plugin
        $('.navbar-nav').each(function (i, liList) {
            var $liList = $(liList);
            $liList.on('click', 'li a', function (event) {
                var $anchor = $(this);
                $('html, body').stop().animate({
                    scrollTop: $($anchor.attr('href')).offset().top
                }, 1500, 'easeInOutExpo');
                event.preventDefault();
            });
        });

});        


    // change is-checked class on buttons
    $(document).load(function() {
            $('.navbar-collapse ul').each(function (i, liList) {
                var $liList = $(liList);
                $liList.on('click', 'li ', function () {
                    $liList.find('.menu-active').removeClass('menu-active');
                    $(this).addClass('menu-active');
                });

            });
    });

})(jQuery);   