var path = require('path');
var express = require('express');

var bodyParser = require('body-parser');

var app = express(); // Create an express app!
module.exports = app; // Export it so it can be require('')'d

// The path of our public directory. ([ROOT]/public)
var publicPath = path.join(__dirname, '../public');
var nodeModulesPath = path.join(__dirname, '../node_modules');

// The path of our index.html file. ([ROOT]/index.html)
var indexHtmlPath = path.join(__dirname, '../index.html');

// http://nodejs.org/docs/latest/api/globals.html#globals_dirname
// for more information about __dirname

// http://nodejs.org/api/path.html#path_path_join_path1_path2
// for more information about path.join

var FlashCardModel = require('./models/flash-card-model');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
// When our server gets a request and the url matches
// something in our public folder, serve up that file
// e.g. angular.js, style.css
app.use(express.static(publicPath));
app.use(express.static(nodeModulesPath));

// If we're hitting our home page, serve up our index.html file!
app.get('/', function (req, res) {
    res.sendFile(indexHtmlPath);
});


app.get('/cards', function (req, res) {

    var modelParams = {};

    if (req.query.category) {
    	modelParams.category = req.query.category;
    }

    FlashCardModel.find(modelParams, function (err, cards) {
        setTimeout(function () {
            res.json(cards);
        }, Math.random() * 1000);
    });
});

app.post('/cards', function (req, res) {
    var flashCardData = req.body;
    FlashCardModel.create(flashCardData)
    .then(function(flashCard) {
        setTimeout(function() {
            res.send(flashCard);
        }, 2000);
    });
});

app.put('/cards', function (req, res) {
    var flashCardData = req.body;
    FlashCardModel.update({_id: flashCardData._id}, flashCardData)
    .then(function() {
        // setTimeout(function() {
            res.sendStatus(200);
        // }, 2000);
    });
});

app.delete('/cards/:cardId', function (req, res) {
    var cardId = req.params.cardId;
    FlashCardModel.remove({_id: cardId})
    .then(function(response) {
        // setTimeout(function() {
            res.sendStatus(204);
        // }, 2000);
    });
});

app.get('/cards/:cardId', function (req, res) {
    var cardId = req.params.cardId;
    FlashCardModel.findOne({_id: cardId})
    .then(function(response) {
        res.send(response);
    });
});