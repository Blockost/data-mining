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

var data;

app.get('/data', function(req, res){
    data = k_means.main();
    res.end(JSON.stringify(data));
});

app.get('/iterate', function(req, res){
    data = k_means.iterate(data[0], data[1], data[2]);
    res.end(JSON.stringify(data));
});

// Exécution de l'algo
//k_nearest_neighbors.main();

fs.readFile('Test-Clusters-Distincts.txt', 'utf-8', function(err, data){
    if (err)
        throw err;
    var lignes = data.split("\n");
    data = [];
    lignes.forEach(function(element){
        var tmp = element.split(" ");
        data.push(tmp.slice(0, 2));
    });

    var parsedTab = [];
    data.forEach(function(element){
        lignes = [];
        element.forEach(function(element_inside){
           lignes.push(parseFloat(element_inside));
        });
        parsedTab.push(lignes);
    });

    data = parsedTab.slice(0, parsedTab.length - 1);

    parsedTab = [];
    data.forEach(function(element){
        lignes = [];
        element.forEach(function(element_inside){
            lignes.push(element_inside);
        });
        parsedTab.push(lignes);
    });

    data = parsedTab;

    console.log(data);
});

http.listen(3000, function(){
    console.log('Server running on : '+this.address().port);
});