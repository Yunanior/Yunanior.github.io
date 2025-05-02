const myVideo=document.querySelector("#my-video");
console.log(myVideo);

//play pause logic
// fetch the right button to play pause video
const playPauseButton=document.querySelector("#play-pause-button");
console.log(playPauseButton);

//listen to click on this button
playPauseButton.addEventListener("click",togglePlay);

//fetch the image so that we can change the icon img when click
const playPauseImg = document.querySelector("#play-pause-img");
console.log(playPauseImg);


//run this funciton when cilck happens
//the code in ()  is from the html code system
// https://www.w3schools.com/tags/ref_av_dom.asp
function togglePlay()
{
    if(myVideo.paused||myVideo.ended){ 
        myVideo.play();
        playPauseImg.src="https://img.icons8.com/ios-glyphs/30/pause--v2.png";
       
    }
    else{
        myVideo.pause();
        playPauseImg.src="https://img.icons8.com/ios-glyphs/30/play--v2.png";
    }
}


const muteUnmuteImg=document.querySelector("#mute-unmute-img");
console.log(muteUnmuteImg);

//listen to click on this button
muteUnmuteImg.addEventListener("click",toggleAudio);

function toggleAudio(){
    if (myVideo.muted){
        myVideo.muted = false;
        muteUnmuteImg.scr="https://img.icons8.com/ios-glyphs/30/high-volume--v2.png";
    }else{
        myVideo.muted = true;
    muteUnmuteImg.src = "https://img.icons8.com/ios-glyphs/30/no-audio--v1.png";
    }
}

const fastForwardButton=document.querySelector("#fast-forward-button");
console.log(fastForwardButton);

fastForwardButton.addEventListener("click", fastForward);

function fastForward() {
    if (myVideo.playbackRate === 1.0) {
      myVideo.playbackRate = 2.0;
    } else {
      myVideo.playbackRate = 1.0;
    }
  }


