var timer=60;

function generateBubble(){
    var a ="";
for(var i=1;i<169;i++){
        var val=Math.floor(Math.random()*10);
        a += `<div class="bubble">${val}</div>`;
        
}
document.querySelector("#lower").innerHTML = a;
}

function hitGenerate(){
    var rn = Math.floor(Math.random()*10);
    document.querySelector("#hitt").textContent= rn ;
}

function timerStart(){
    setInterval(function(){
        if(timer>0){
            timer--;
            document.querySelector("#timerr").textContent= timer;
        }
    },1000)
}

generateBubble();
hitGenerate();
timerStart();