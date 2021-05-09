 (function ($) {
	"use strict";
      jQuery(document).on('ready', function() {

      	/*================================
        ============= Slider Water Effect =============
        =================================*/
            var header_area = $('.header-water');
            header_area.ripples({
                resolution: 512,
                dropRadius: 20, //px
                perturbance: 0.04,
            });
            // Automatic drops
            setInterval(function() {
                var $el = header_area;
                var x = Math.random() * $el.outerWidth();
                var y = Math.random() * $el.outerHeight();
                var dropRadius = 20;
                var strength = 0.04 + Math.random() * 0.04;

                $el.ripples('drop', x, y, dropRadius, strength);
            }, 400);
  });

})(jQuery);      	