const video = document.querySelector("#custom-video-player");
const progressBar = document.querySelector("#progress-bar-fill");
const playPauseBtn = document.querySelector("#play-pause-btn");
const muteUnmuteBtn=document.querySelector("#mute-unmute-btn");
const fastForwardBtn=document.querySelector("#fast-forward-btn");
const replayBtn=document.querySelector("#replay-btn");



video.removeAttribute("controls");

//progressing bar section

console.log(progressBar)
video.addEventListener("timeupdate", updateProgressBar);
function updateProgressBar() {
  const value = (video.currentTime / video.duration) * 100;
  progressBar.style.width = value + "%";
}

//play-pause button
const playPauseImg = document.querySelector("#play-pause-img");
function togglePlayPause() {
  if (video.paused || video.ended) {
    video.play();
    playPauseImg.src = "https://img.icons8.com/ios-glyphs/30/pause--v1.png";
  } else {
    video.pause();
    playPauseImg.src = "https://img.icons8.com/ios-glyphs/30/play--v1.png";
  }
}

//Audio section
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

//funtion
replayBtn.addEventListener("click", videoReplay);
function videoReplay(){
   video.currentTime=0;
   video.play();
   playPauseImg.scr="https://img.icons8.com/ios-glyphs/30/pause--v1.png";
   replayBtn.style.diplay="none";
}

// fast-forward
fastForwardBtn.addEventListener("click", fastForward)
function fastForward() {
    video.playbackRate = video.playbackRate === 1 ? 2 : 1;
}

video.addEventListener("ended", () => {
    playPauseImg.src = "https://img.icons8.com/ios-glyphs/30/play--v1.png";
});

progressBar.addEventListener("click",(e)=>{
    const rect=progressBar.getBoundingClientRect();
    const clickX=e.clickX-rect.left;
    const width=rect.width;
    const percentage=clickX/width;
    video.currentTime=percentage*video.duration;})