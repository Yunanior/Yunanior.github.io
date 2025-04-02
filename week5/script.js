// this is a comment
// this is another comment

// number variable 0-infinity dont use quotes
let a=100;
let b=parseInt("20");
let c=a+b;
console.log(c);
let d=10
console.log(c,d)
// if conditional
let grade=72;
if(grade>70)
{console.log("you got HD");}
else
{console.log("you didn't get HD");}

// string variables
const myName="Yuna";
console.log(myName);
const myCity="Melbourne";
const msg=`<h1>I live in ${myCity}</h1>
<p>xxx</p>`;
console.log(msg);

//boolen varible TRUE FALSE
let isThisSunday=false;
let isItAfternoon=true;

//object {name:value,name:value}
const myStudentRecord={
    name:"Sam",
    id:1234,
    course:"OART1243",
    isLocal:false,
}
console.log(myStudentRecord);
console.log(myStudentRecord.course);

//arrays

//let sName1="A";
//let sName1="A";
//let sName3="C";
//let sName4="D";
let sNames=["A","B","C","D"];
// console.log(sNames[0])---- A
// console.log(sNames[1])---- B
// console.log(sNames[2])---- C

//for loop
for(let i=0;i<sNames.length;i++)
{
    console.log("Hello",sNames[i]);
}
//console.log("Hello",sNames[0]);
//console.log("Hello",sNames[1]);
//console.log("Hello",sNames[2]);
//console.log("Hello",sNames[3]);
