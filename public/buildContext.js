$(document).ready(function(){
    var canvas = $('#canvas').get(0);
    if(canvas.getContext){
        var ctx = canvas.getContext('2d');
        getDataAndBuildCanvas(ctx);
    }else{
        console.log('Canvas not supported !');
    }
});

function buildCanvas(ctx, data){

    console.log(data);
    data.forEach(function(element){
        ctx.fillStyle = getRandomRGBColor();
        ctx.fillRect(element[0], element[1], 10, 10);
    });
}

function getDataAndBuildCanvas(ctx){
    $.get('/data', function(response){
        buildCanvas(ctx,  JSON.parse(response));
    });
}

function getRandomRGBColor(){
    var red = Math.floor(Math.random()*255);
    var green = Math.floor(Math.random()*255);
    var blue = Math.floor(Math.random()*255);
    return "rgb("+red+","+green+","+blue+")";
}