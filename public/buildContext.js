$(document).ready(function(){
    var canvas = $('#canvas').get(0);
    if(canvas.getContext){
        var ctx = canvas.getContext('2d');
        buildCanvas(ctx,  [[1, 2], [4, 5], [7, 8], [1, 5], [5, 9], [6, 7], [5, 5], [8, 8]]);
    }else{
        console.log('Canva don\'t supported !');
    }
});

function buildCanvas(ctx, data){
    ctx.fillStyle = "rgb(200,0,0)";
    console.log(data);
    data.forEach(function(element){
        ctx.fillRect(element[0]*600/400, element[1]*600/400, 10, 10);
    });
}

function getData(){
    return $.get('/data', function(response){
        console.log(JSON.parse(response));
        return JSON.parse(response);
    });
}