$(document).ready(function(){
    var canvas = $('#canvas').get(0);
    if(canvas.getContext){

        var ctx = canvas.getContext('2d');
        var selectpicker = $(".selectpicker");
        selectpicker.selectpicker();
        selectpicker.change(function(){
            run(ctx, $(this).val());
        });

        run(ctx, "/generateData");

    }else{
        console.log('Canvas not supported !');
    }
});

function buildCanvas(ctx, data, colorPalette){

    /* Draw data (points) */
    data[0].forEach(function(element){
        // Get the colorPalette associated with de class of the element
        ctx.fillStyle = colorPalette[element[2]];
        ctx.fillRect(element[0], element[1], 10, 10);
    });

    /* Draw center of classes (barycenters) */
    data[2].forEach(function(element){
        ctx.fillStyle = "rgb(0, 0, 0)";
        ctx.fillRect(element[0], element[1], 10, 10);
    });

    $("#inertie_inter").text("Inertie inter classes : "+data[3]);
    $("#inertie_intra").text("Inertie intra classes : "+data[4]);
}

function run(ctx, url){
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    $.get(url, function(data){
        var colorPalette = buildColorPalette(JSON.parse(data));
        buildCanvas(ctx, JSON.parse(data), colorPalette);


        $("#btn_iterate").off('click').click(function(){
            $.get('/iterate', function(response){
                ctx.clearRect(0, 0, canvas.width, canvas.height);
                buildCanvas(ctx, JSON.parse(response), colorPalette);
            });
        });
    });

}

function getRandomRGBColor(){
    var red = Math.floor(Math.random()*255);
    var green = Math.floor(Math.random()*255);
    var blue = Math.floor(Math.random()*255);
    return "rgb("+red+","+green+","+blue+")";
}

function buildColorPalette(data){
    var colorPalette = [];
    for(var i = 0; i < data[1]; i++){
        colorPalette[i] = getRandomRGBColor();
    }
    return colorPalette;
}