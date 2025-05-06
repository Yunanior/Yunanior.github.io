const myButton=document.querySelector("#my-button");

myButton.addEventListener("click",moveDuck);

const myInput=document.querySelector("#my-input");

const myDuck=document.querySelector("#my-duck");
let clicked= false;

function moveDuck(){
    if(!clicked){
    myDuck.style.translate="10px 20px";
    clicked =true;}
    else{
        myDuck.style.translate="0px 0px";
        clicked = false;
    }
}
