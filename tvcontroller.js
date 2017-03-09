var tvcommand = require('./tvcommand');
var express = require('express');
var app = express();

// respond with "hello world" when a GET request is made to the homepage
app.get('/', function (req, res) {
    res.send('<h1>Tv controller</h1><a href="/cmd/on">ON</a><br><a href="/cmd/off">OFF</a>');
});
app.get('/cmd/:cmd', function (req, res) {
    switch (req.params.cmd) {
        case 'on':
            tvcommand.on();
            break;
        case 'off':
            tvcommand.off();
            break;
    }
    res.status(204).send();
});

app.listen(80);