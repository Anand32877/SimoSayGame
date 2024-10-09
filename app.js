let gameSeq=[];
let userSeq=[];
let btns=["yellow","red","purple","green"];
let started=false;
let level=0;
let h2=document.querySelector("h2");
document.addEventListener("keypress", function(){
    // console.log("Game started");
    if(started==false){
        console.log("game is started");
        started=true;
    }
    levelUp();
});

function btnFlash(btn){
    btn.classList.add("flash");
    setTimeout(function(){
        btn.classList.remove("flash");
    },250);
}

function levelUp(){
    userSeq=[]
    level++;
    h2.innerText=`Level ${level}`;
    let randIdx=Math.floor(Math.random()*3);
    let randColor = btns[randIdx];
    let randbtn=document.querySelector(`.${randColor}`);
    btnFlash(randbtn);
    gameSeq.push(randColor);
}

function checkAns(indx){
    // let indx=level-1;
    if(userSeq[indx]==gameSeq[indx]){
        // console.log("Same value");
        if(userSeq.length==gameSeq.length){
            setTimeout(levelUp(),1000);
        }
    }else{
        h2.innerHTML=`Game Over! <b>Your score was <u>${level}</u></b> Press Any Key To Start`;
        document.querySelector("body").style.backgroundColorolor="red";
        setTimeout(function(){
            document.querySelector("body").style.backgroundColorolor="white";
        },150);
        reset();
    }
}

function btnPress()  {
    // console.log(this);
    let btn=this;
    btnFlash(btn);
    let userColor=btn.getAttribute("id");
    userSeq.push(userColor);
    checkAns(userSeq.length-1);
}

let allbtns=document.querySelectorAll(".btn");
for(btn of allbtns){
    btn.addEventListener("click", btnPress);
}

function reset(){
    started=false;
    gameSeq=[];
    userSeq=[];
    level=0;
}