var timer=60;
var score=0;
var hitnumber;

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
    setInterval(function(){
        if(timer>0){
            timer--;
            document.querySelector("#timerr").textContent= timer;
        }
    },1000)
}

function scoreInecrease(){
    score += 10 ;
    document.querySelector("#scoree").textContent= score;
}


var lo=document.querySelector("#lower");
lo.addEventListener('click', function(details){
    var clickedval = Number(details.target.textContent);
    if(clickedval===hitnumber){

    }
})


generateBubble();
hitGenerate();
//timerStart();
