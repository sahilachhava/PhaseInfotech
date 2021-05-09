 (function ($) {
  "use strict";
      jQuery(document).on('ready', function() {


              /*================================
              ============ Test Circle =============
              =================================*/
              var test_color4 =$("#test-circle4");
              var test_color3 =$("#test-circle3");
              var test_color2 =$("#test-circle2");
              var test_color1 =$("#test-circle1");
              active(85,test_color4);
              active(75,test_color3);
              active(65,test_color2);
              active(45,test_color1);
              function active(per,id){
                id.circliful({
                          animation: 1,
                          animationStep: 1,
                          target: 20,
                          start: 2,
                          percent: per,
                          showPercent: 1,
                          backgroundColor: '#0c74d5',
                          foregroundColor: '#344153',
                          fontColor: '#0c74d5',
                          iconColor: '#0c74d5',
                          iconSize: '40',
                          iconPosition: 'middle'
                });
              };
    });
})(jQuery);                    