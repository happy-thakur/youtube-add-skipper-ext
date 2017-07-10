
$(function(){

// to check when the video loads upp..
$('video.html5-main-video').on('play', function(e) {
  doIt(e);
});

function doIt(e){
  var count = 0, count2 = 0;
  if(e){
    // console.log('Video has ended!');
    var x = setInterval(() => {
      // console.log("executing..");

      if(count >= 5) {
        // console.log("time out");
        clearTimeout(x);
      }
      count++;
      if($('button.videoAdUiFixedPaddingSkipButton').length > 0) {
   
        clearTimeout(x);
        // now triger button 10 times..
        var y = setInterval(() => {
          count2++;
          if(count2 >= 5 || $("button.videoAdUiFixedPaddingSkipButton").length == 0) {
            clearTimeout(y);
          }
          $("button.videoAdUiFixedPaddingSkipButton").trigger("click");


        }, 1500);
      }
  }, 2000); 
  }
}
});
