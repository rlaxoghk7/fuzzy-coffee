
var tag = document.createElement('script');

tag.src = "https://www.youtube.com/iframe_api";
var firstScriptTag = document.getElementsByTagName('script')[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

function onYouTubeIframeAPIReady() {
  
  //   HTML의<div id ="player"></div> 부분
  new YT.Player('player', {
    videoId: '1Ap40DqSIGU', //최초 재생할 유튜브 영상 ID
    playerVars: {
      autoplay: true, //자동재생
      loop: true, //반복재생
      playlist: '1Ap40DqSIGU'
    },
    events: {
      onReady: function(event){
        event.target.mute() // 영상이 재생될 때 음소거
      }
    }
  });
}

function onPlayerReady(event) {
  event.target.playVideo();
}

var done = false;
function onPlayerStateChange(event) {
  if (event.data == YT.PlayerState.PLAYING && !done) {
    setTimeout(stopVideo, 6000);
    done = true;
  }
}
function stopVideo() {
  player.stopVideo();
}

