function generateBubble(){
    var a="";
    for(var i=1;i<100;i++){
        let val=Math.floor(Math.random()*10);
        var a+=`<div class="bubble">${val}</div>`;
        
    }
}