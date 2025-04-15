const myButton=document.querySelector("#my-button");
console.log(myButton);
myButton.addEventListener("click",handleClick);
const topHeading=document.querySelector("h1");

const myCat=document.querySelector("myCat");
console.log(myCat);

function handleClick(){
    console.log("Hey did you just click me?");
    myCat.classList.toggle("round");
}

//console.log(topHeading);
//console.log(topHeading.textContent);
topHeading.textContent="this is my new top heading";
topHeading.style.color="red";

const header=document.querySelector("header");
console.log(header);
console.log(header.textContent);
console.log(header.innerHTML);
header.innerHTML="<h1>Top heading</h1>";

const allParas=document.querySelectorAll("p");
//console.log(allParas);
// console.log(allParas.textContent);
for(let i=0;i<allParas.length;i++){
    //console.log(allParas[i].textContent);
    allParas[i].style.border="1px solid blue";
    allParas[i].style.backgroundColor="beige";
};

const mySubheading=document.querySelector("#first-subheading");
console.log(mySubheading);
console.log(mySubheading.textContent);

const allSubheadings=document.querySelectorAll("h2");
console.log(allSubheadings);


