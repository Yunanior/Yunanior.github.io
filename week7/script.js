const airportAudio=document.querySelector("#airpot-audio");
console.log(airportAudio);

//here is my logic for playing the sound
//first I am fetching the right play button

const playButton=document.querySelector("#play-button");
console.log(playButton);
//playing sound on click
playButton.addEventListener("click",playAudio);

function playAudio(){
    airportAudio.play();
}




//here is my logic for plausing the sound
//first I am fetching the right play button

const qauseButton=document.querySelector("#airport-audio");
console.log(pauseAudio);
//pausing sound on click
playButton.addEventListener("click",pauseAudio);

function pauseAudio(){
    airportAudio.pause();
}


//here is my logic for plausing the sound
//first I am fetching the right play button

const popSound=document.querySelector("#pop-sound");
console.log(popSound);

const popButton=document.querySelector("#pop-button");
console.log(popButton);
//pausing sound on click
playButton.addEventListener("click",popAudio);

function popAudio(){
    popSound.play();
}
