
var score=0;
var hitnumber;
var lo=document.querySelector("#lower");

function generateBubble(){
    var a ="";
for(var i=1;i<169;i++){
        var val=Math.floor(Math.random()*10);
        a += `<div class="bubble">${val}</div>`;
        
}
document.querySelector("#lower").innerHTML = a;
}

function hitGenerate(){
    hitnumber = Math.floor(Math.random()*10);
    document.querySelector("#hitt").textContent= hitnumber ;
}

function timerStart(){
    var timeInt=setInterval(function(){
        var timer=60;
        if(timer>0){
            timer--;
            document.querySelector("#timerr").textContent= timer;
        }
        else{
            clearInterval(timeInt);
            document.querySelector("#lower").innerHTML=`<div class="afterscore"><p>Score is : </p>${score}</div>`;
            document.querySelector("#hitt").textContent= 0;
            document.querySelector("#scoree").textContent= 0;
        }
    },1000)
}

function scoreInecrease(){
    score += 10 ;
    document.querySelector("#scoree").textContent= score;
}



lo.addEventListener('click', function(details){
    var clickedval = Number(details.target.textContent);
    if(clickedval===hitnumber){
        generateBubble();
        hitGenerate();
        scoreInecrease();
    }
})

document.querySelector("#button").addEventListener('click',function(){
    timerStart();

    generateBubble();
    hitGenerate();
})




