var express = require('express');
var app = express();
var http = require('http').Server(app);
var fs = require('fs');
var k_nearest_neighbors = require('k-nearest_neighbors');
var k_means = require('k-means');
var utilities = require('utilities');


app.use(express.static('public'));

app.get('/', function (req, res){
    res.sendFile(__dirname+'/index.html');
});



// Exécution de l'algo
k_nearest_neighbors.main();

var _data;


app.get('/readData', function(req, res){
    var filename = req.query.filename;
    var data_read = {
        data: utilities.processFile(fs.readFileSync(filename, 'utf-8')),
        filename: filename
    };
   _data = k_means.main(data_read);
    res.end(JSON.stringify(_data));
});


app.get('/generateData', function(req, res){
    _data = k_means.main();
    res.end(JSON.stringify(_data));
});

app.get('/iterate', function(req, res){
    _data = k_means.iterate(_data[0], _data[1], _data[2]);
    res.end(JSON.stringify(_data));
    //console.log(data);
});

http.listen(3000);