const video = document.querySelector("#custom-video-player");

video.removeAttribute("controls");

//progressing bar section
const progressBar = document.querySelector("#progress-bar-fill");
video.addEventListener("timeupdate", updateProgressBar);
function updateProgressBar() {
  const value = (video.currentTime / video.duration) * 100;
  progressBar.style.width = value + "%";
}

//play-pause button
const playPauseBtn = document.querySelector("#play-pause-btn");
const playPauseImg = document.querySelector("#play-pause-img");

// Track if video ended
let isEnded = false;

function togglePlayPause() {
  if (isEnded) {
    // Replay from start
    video.currentTime = 0;
    video.play();
    playPauseImg.src = "https://img.icons8.com/ios-glyphs/30/pause--v1.png";
    isEnded = false;
    return;
  }

  if (video.paused || video.ended) {
    video.play();
    playPauseImg.src = "https://img.icons8.com/ios-glyphs/30/pause--v1.png";
  } else {
    video.pause();
    playPauseImg.src = "https://img.icons8.com/ios-glyphs/30/play--v1.png";
  }
}

// When video ends, change play icon to replay
video.addEventListener("ended", () => {
  playPauseImg.src = "https://img.icons8.com/ios-glyphs/30/replay.png";
  isEnded = true;
});

// Track if video ended
let isEnded = false;

function togglePlayPause() {
  if (isEnded) {
    // Replay from start
    video.currentTime = 0;
    video.play();
    playPauseImg.src = "https://img.icons8.com/ios-glyphs/30/pause--v1.png";
    isEnded = false;
    return;
  }

  if (video.paused || video.ended) {
    video.play();
    playPauseImg.src = "https://img.icons8.com/ios-glyphs/30/pause--v1.png";
  } else {
    video.pause();
    playPauseImg.src = "https://img.icons8.com/ios-glyphs/30/play--v1.png";
  }
}

// When video ends, change play icon to replay
video.addEventListener("ended", () => {
  playPauseImg.src = "https://img.icons8.com/ios-glyphs/30/replay.png";
  isEnded = true;
});

//Audio section
const muteUnmuteBtn=document.querySelector("#mute-unmute-btn");
const muteUnmuteImg=document.querySelector("#mute-unmute-img");
function toggleAudio(){
    if(video.muted){
        video.muted = false;
        muteUnmuteImg.src ="https://img.icons8.com/ios-glyphs/30/high-volume--v2.png";
    }else {
        video.muted = true;
         muteUnmuteImg.src = "https://img.icons8.com/ios-glyphs/30/no-audio--v1.png";
      }
}

//Replay tem button
const replayTenBtn=document.querySelector("#replayTenBtn");
  function toggleReplayTen() {
    const video = document.getElementById("custom-video-player");
    if (video) {
      video.currentTime -= 10;
    }
  }

// forward ten
const forwardTenBtn=document.querySelector("#forwardTenBtn");
  function toggleFowardTen() {
    const video = document.getElementById("custom-video-player");
    if (video) {
      video.currentTime += 10;
    }
  }

//full screen
const fullscreenButton = document.querySelector("#full-screen-btn");

fullscreenButton.addEventListener("click", toggleFullscreen);

function toggleFullscreen() {
  if (!document.fullscreenElement) {
    if (video.requestFullscreen) {
      video.requestFullscreen();
    } else if (video.webkitRequestFullscreen) {
      video.webkitRequestFullscreen();
    } else if (video.msRequestFullscreen) {
      video.msRequestFullscreen();
    }
  } else {
    if (document.exitFullscreen) {
      document.exitFullscreen();
    } else if (document.webkitExitFullscreen) {
      document.webkitExitFullscreen();
    } else if (document.msExitFullscreen) {
      document.msExitFullscreen();
    }
  }
}
