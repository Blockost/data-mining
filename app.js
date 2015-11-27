var express = require('express');
var app = express();
var http = require('http').Server(app);
var fs = require('fs');
var lib_func = require('lib_func');


app.use(express.static('public'));

// Exécution de l'algo
lib_func.main();



http.listen(3000, function(){
    //console.log('Server running on : '+this.address().port);
});