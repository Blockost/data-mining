var express = require('express');
var app = express();
var http = require('http').Server(app);
var fs = require('fs');
var lib_func = require('lib_func');


app.use(express.static('public'));

app.get('/', function (req, res){
    lib_func.main();
    /*fs.writeFile("/tmp/test", "Hello", function(err) {
        if(err) {
            return console.log(err);
        }
        console.log("The file was saved!");
    });*/
    res.end('done');
});


http.listen(3000, function(){
    //console.log('Server running on : '+this.address().port);
});