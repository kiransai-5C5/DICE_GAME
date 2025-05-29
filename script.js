let ranoone=Math.floor(Math.random()*6)+1;
let ranotwo=Math.floor(Math.random()*6)+1;
let img1=document.querySelectorAll("img")[0];
let img2=document.querySelectorAll("img")[1];

let button=document.querySelector(".btn");

button.addEventListener("click",function(){
    img1.setAttribute("src",`images/dice${ranoone}.png`);
    img2.setAttribute("src",`images/dice${ranotwo}.png`);

    if(ranoone>ranotwo){
        document.querySelector("h1").innerHTML="Player 1 Wins!";
    }else if(ranoone<ranotwo){
        document.querySelector("h1").innerHTML="Player 2 Wins!";
    }else{
        document.querySelector("h1").innerHTML="Draw!";
    }
});