const myVideo=document.querySelector("#my-video");
console.log(myVideo);


const playButton=document.querySelector("#my-video");
console.log(playButton);

playButton.addEventListener("click",playVideo);

function playVideo(){
    myVideo.play();
}

const pauseButton=document.querySelector("#my-video");
console.log(pauseButton);

playButton.addEventListener("click",pauseVideo);

function pauseVideo(){
    myVideo.pause();
}
