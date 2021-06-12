"use strict";
var express = require('express');
var app = express();
var expressWs = require('express-ws')(app);
app.use(function (req, res, next) {
    console.log('middleware');
    req.testing = 'testing';
    return next();
});
app.get('/', function (req, res, next) {
    console.log('get route', req.testing);
    res.end();
});
app.get('/temp', function (req, res, next) {
    console.log('get temp', req.testing);
    res.end();
});
app.ws('/', function (ws, req) {
    ws.on('message', function (msg) {
        console.log('from client', msg);
    });
    ws.on('connection', function connection(ws) {
        // ws.on('message', function incoming(message:any) {
        //   console.log('received: %s', message);
        // });
    });
    var sendMessage = function () {
        var time = new Date().getMinutes();
        console.log('time', time);
        ws.send(time);
    };
    // repeat with the interval of 2 seconds
    var timerId = setInterval(sendMessage, 5000);
});
app.listen(3000, function () {
    console.log('started');
});
