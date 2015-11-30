$(document).ready(function(){
    var canvas = $('#canvas');
    if(canvas.getContext){
        var ctx = canvas.getContext('2d');
        buildCanvas(ctx);
    }else{
        console.log('Canva don\'t supported !');
    }


});

function buildCanvas(ctx){
    ctx.fillStyle = "rgb(200,0,0)";
    ctx.fillRect (10, 10, 55, 50);
}