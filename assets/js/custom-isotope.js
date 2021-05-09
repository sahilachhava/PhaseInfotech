 (function ($) {
  "use strict";
      jQuery(document).on('ready', function() {
        /*================================
        ============ Gallery  =============
        =================================*/
        var galleryitems =$("#galleryitems");
          galleryitems.isotope({
            filter:"*",
            animationOptions :{
            duration:1000
          }
        });
        var isotopmenu =$("#isotopemenu li");
            isotopmenu.click(function(){
            isotopmenu.removeClass("webdesign").filter(this).addClass("webdesign");
              var filter_id = $(this).data('filter');
              galleryitems.isotope({
                itemSelector: '.single-item',
                filter:filter_id,
                animationOptions :{
                duration:1000
                }
              });
            });
            var isotopmenuul =$('#isotopemenu ul');
              // change is-checked class on buttons
              isotopmenuul.each( function( i, liList ) {
              var $liList = $( liList );
              $liList.on( 'click', 'li ', function() {
              $liList.find('.active').removeClass('active');
              $( this ).addClass('active');
              });
            });
  });

})(jQuery);                  