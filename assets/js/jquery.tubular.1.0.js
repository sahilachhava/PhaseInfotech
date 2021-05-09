/* jQuery tubular plugin
|* by Sean McCambridge
|* http://www.seanmccambridge.com/tubular
|* version: 1.0
|* updated: October 1, 2012
|* since 2010
|* licensed under the MIT License
|* Enjoy.
|* 
|* Thanks,
|* Sean */

!function(e,t){var a={ratio:16/9,videoId:"ZCAnLxRvNNc",mute:!0,repeat:!0,width:e(t).width(),wrapperZIndex:10,playButtonClass:"tubular-play",pauseButtonClass:"tubular-pause",muteButtonClass:"tubular-mute",volumeUpClass:"tubular-volume-up",volumeDownClass:"tubular-volume-down",increaseVolumeBy:10,start:0},n=document.createElement("script");n.src="//www.youtube.com/iframe_api";var i=document.getElementsByTagName("script")[0];i.parentNode.insertBefore(n,i),e.fn.tubular=function(n){return this.each(function(){e.data(this,"tubular_instantiated")||e.data(this,"tubular_instantiated",function(n,i){i=e.extend({},a,i);var o=e("#wrapper");$node=e(n);e("#wrapper").css({width:"100%",height:"100%"}),o.prepend('<div id="tubular-container" style="overflow: hidden; position: absolute; z-index: -2;top:0px;left:0px; width: 100%; height: 100%"><div id="tubular-player" style="position: absolute"></div></div><div id="tubular-shield" style="width: 100%; height: 100%; z-index: 2; position: absolute; left: 0; top: 0;"></div>'),$node.css({position:"relative","z-index":i.wrapperZIndex}),t.player,t.onYouTubeIframeAPIReady=function(){player=new YT.Player("tubular-player",{width:i.width,height:Math.ceil(i.width/i.ratio),videoId:i.videoId,playerVars:{controls:0,showinfo:0,modestbranding:1,wmode:"transparent"},events:{onReady:onPlayerReady,onStateChange:onPlayerStateChange}})},t.onPlayerReady=function(e){r(),i.mute&&e.target.mute(),e.target.seekTo(i.start),e.target.playVideo()},t.onPlayerStateChange=function(e){0===e.data&&i.repeat&&player.seekTo(i.start)};var r=function(){var a,n,o=e(t).width(),r=e(t).height(),u=e("#tubular-player");o/i.ratio<r?(a=Math.ceil(r*i.ratio),u.width(a).height(r).css({left:(o-a)/2,top:0})):(n=Math.ceil(o/i.ratio),u.width(o).height(n).css({left:0,top:(r-n)/2}))};e(t).on("resize.tubular",function(){r()}),e("body").on("click","."+i.playButtonClass,function(e){e.preventDefault(),player.playVideo()}).on("click","."+i.pauseButtonClass,function(e){e.preventDefault(),player.pauseVideo()}).on("click","."+i.muteButtonClass,function(e){e.preventDefault(),player.isMuted()?player.unMute():player.mute()}).on("click","."+i.volumeDownClass,function(e){e.preventDefault();var t=player.getVolume();t<i.increaseVolumeBy&&(t=i.increaseVolumeBy),player.setVolume(t-i.increaseVolumeBy)}).on("click","."+i.volumeUpClass,function(e){e.preventDefault(),player.isMuted()&&player.unMute();var t=player.getVolume();t>100-i.increaseVolumeBy&&(t=100-i.increaseVolumeBy),player.setVolume(t+i.increaseVolumeBy)})}(this,n))})}}(jQuery,window);


 (function ($) {
    "use strict";
    jQuery(document).on('ready', function() {

        /*================================
        ============= Video Effect =============
        =================================*/
        var wrapper = $('#wrapper');
            $('document').ready(function() {
                var options = { videoId: 'izqu8eHCIuc', start: 3,repeat:true };
                wrapper.tubular(options);
            });        
  });
})(jQuery);        