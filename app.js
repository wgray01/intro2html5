var express = require('express');
var path = require('path');

//Creates express wen server
var app = express();

//Configure express to deliver static files
app.use(express.static(path.join(__dirname, 'public')));

app.get('/', function(req, res) {
    res.sendFile(__dirname + '/public/index.html');
});

module.exports = app;