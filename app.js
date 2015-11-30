var express = require('express');
var app = express();
var http = require('http').Server(app);
var fs = require('fs');
var k_nearest_neighbors = require('k-nearest_neighbors');
var k_means = require('k-means');


app.use(express.static('public'));

app.get('/', function (req, res){
    res.sendFile(__dirname+'/index.html');
});

// Exécution de l'algo
//k_nearest_neighbors.main();

k_means.main();



http.listen(3000, function(){
    console.log('Server running on : '+this.address().port);
});