function generateBubble(){
    var a ="";
for(var i=1;i<100;i++){
        var val=Math.floor(Math.random()*10);
        a += `<div class="bubble">${val}</div>`;
        
}
document.querySelector("#lower").innerHTML = a;
}
generateBubble();