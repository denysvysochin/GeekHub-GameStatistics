/**
 * Created by mainadmin on 29.02.16.
 */



var express = require('express'),
    exphbs = require('express-handlebars'),
    session = require('express-session'),
    browserify = require('browserify-middleware'),
    babelify = require('babelify'),
    expressLess = require('express-less'),
    hbsfy = require('hbsfy');
var path = require('path')

var app = express(),
    server = require('http').Server(app);


var sessionMid = session({
    secret: '8W92p90pv7pw3KtlqeSohHj4gX8r9c',
    resave: false,
    saveUninitialized: true
});
app.use(sessionMid);

var hbs = exphbs.create({
    defaultLayout: 'main',
    partialsDir: __dirname + '/views/partials/',
    layoutsDir: __dirname + '/views/layouts/'
});

/*app.engine('handlebars', hbs.engine);*/
app.set('views', __dirname + '/views/html');
app.set('view engine', 'handlebars');
//app.enable('view cache');

var shared = ['babel-polyfill', 'socket.io-client'];

app.use('/js', browserify(__dirname + '/view/js'));
/*app.use('/html', browserify(__dirname + '/view/html/pages'))
app.use('/css', browserify(__dirname + '/view/css'));*/
app.use('/libs', browserify(__dirname + '/view/libs'));

app.use(express.static(path.join(__dirname, 'public')));


app.get('/', (req, res) => {
    res.sendFile(__dirname+'/index.html');
});

server.listen(3000);


/*var express = require('express');

var server = http.createServer(handleRequest);


const PORT=8080;


server.listen(PORT, function(){
    console.log("Server listening on: http://localhost:%s", PORT);
});


function handleRequest(request, response){
    try {
        console.log(request.url);
        dispatcher.dispatch(request, response);
    } catch(err) {
        console.log(err);
    }
}



dispatcher.onGet("/", function(req, res) {

    res.writeHead(200, {'Content-Type': 'text/html'});
    fs.readFile('./view/html/index.html', 'utf8', function (err,data) {
        res.end(data);
    });
});*/

/*var mongoose = require('mongoose');


import {userSchema} from './schema/user';
import {gameSchema} from './schema/game';

var Schema = mongoose.Schema;
mongoose.connect('mongodb://localhost/pro_statistic');*/

/*
var http = require('http'),
    fs = require('fs');


fs.readFile('./view/html/index.html', function (err, html) {
    if (err) {
        throw err;
    }
    http.createServer(function(request, response) {
        response.writeHeader(200, {"Content-Type": "text/html"});
        response.write(html);
        response.end();
    }).listen(8000);
});*/
