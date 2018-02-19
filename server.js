require('dotenv').config()
var express = require('express');
var bodyParser = require('body-parser');
var passport = require('passport');
//var authController = require('./auth');
var app = express();
var uniqueKey = process.env.UNIQUE_KEY;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use(passport.initialize()); //get the basic strategy from auth.js

var router = express.Router();

router.post('/posts', function(req,res) {
    //Create an object containing the query, header, and environment variable
    var postObject = {query: req.query, headers: req.headers, unique_key: uniqueKey}

    if(Object.keys(req.query).length === 0) {
        res.status(400).send("The query was empty");
    }
    if(Object.keys(req.headers).length === 0) {
        res.status(400).send("There were no headers");
    }
    else {
        res.status(200).send(postObject); //send the query and headers back in a response
    }
});

router.get('/gets', function(req,res) {
    //Create an object containing the query, header, and environment variable
    var getObject = {query: req.query, headers: req.headers, unique_key: uniqueKey}

    if(Object.keys(req.query).length === 0) {
        res.status(400).send("The query was empty");
    }
    if(Object.keys(req.headers).length === 0) {
        res.status(400).send("There were no headers");
    }
    else {
        res.status(200).send(getObject); //send the query and headers back in a response
    }
});

router.put('/puts', function(req,res) {
    //Create an object containing the query, header, and environment variable
    var putObject = {query: req.query, headers: req.headers, unique_key: uniqueKey}

    if(Object.keys(req.query).length === 0) {
        res.status(400).send("The query was empty");
    }
    if(Object.keys(req.headers).length === 0) {
        res.status(400).send("There were no headers");
    }
    else {
        res.status(200).send(putObject); //send the query and headers back in a response
    }
});

// delete route uses passport basic auth strategy
router.delete('/deletes', passport.authenticate('basic', { session: false }), function(req,res) {
    //Create an object containing the query, header, and environment variable
    var deleteObject = {query: req.query, headers: req.headers, unique_key: uniqueKey}

    if (Object.keys(req.query).length === 0) {
        res.status(400).send("The query was empty");
    }
    if(Object.keys(req.headers).length === 0) {
        res.status(400).send("There were no headers");
    }
    else {
        res.status(200).send(deleteObject); //send the query and headers back in a response
    }
});

app.use('/', router);
console.log("listening for a request on port 8080");
app.listen(process.env.PORT || 8080);
