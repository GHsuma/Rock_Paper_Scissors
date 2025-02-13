let userscore=0;
let compscore=0;
let choices=document.querySelectorAll(".box");

choices.forEach((choice)=>{
choice.addEventListener("click",function(){
let userchoice=choice.getAttribute("id");

let options=["rock","paper","scissor"];

let num=Math.floor(Math.random()*3);
let compchoice=options[num];
game(userchoice,compchoice);
})})

let h2=document.querySelector("h2");

function drawgame(){
    h2.innerText="Game was draw";
}

function userwin(userscore){
    h2.innerText="You Win"
    let usernum=document.querySelector("#userscore");
    usernum.innerText=userscore;
}
function compwin(compscore){
    h2.innerText="Computer win"
    let compnum=document.querySelector("#compscore");
    compnum.innerText=compscore;
}
function game(userchoice,compchoice){
console.log(`user choice is ${userchoice}`);
console.log(`computer choice is ${compchoice}`);
if(userchoice===compchoice){
    console.log("game draw");
    if(userscore==compscore){
        drawgame();

    }
}
else if(userchoice==="rock" && compchoice==="scissor"|| userchoice==="scissor" && compchoice==="paper" || userchoice==="paper" && compchoice==="rock"){
    userscore++;
    console.log("userwin")
    console.log(`user score is ${userscore}`);

userwin(userscore);
h2.innerText=`You win! Your ${userchoice} beats ${compchoice}`
}
else{
    compscore++;

    console.log(`computer score is ${compscore}`);
    compwin(compscore);
    h2.innerText=`Oops! You lost, ${compchoice} beats Your ${userchoice}`
}
};

