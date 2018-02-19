
var express = require('express');
var bodyParser = require('body-parser');
var passport = require('passport');
var authController = require('./auth');
//var http = require('http');
var app = express();
var uniqueKey = process.env.UNIQUE_KEY;
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

//app.use(passport.initialize()); //get the basic strategy from auth.js

var router = express.Router();

router.post('/posts', function(req,res) {
    //Create an object containing the query, header, and environment variable
    var postObject = {query: req.query, headers: req.headers, unique_key: uniqueKey}

    if(Object.keys(req.query).length === 0) {
        res.status(400).send("The query was empty");
    }
    else {
        res.status(200).send(postObject); //send the query and headers in a response
    }

});

router.get('/gets', function(req,res) {
    //Create an object containing the query, header, and environment variable
    var getObject = {query: req.query, headers: req.headers, unique_key: uniqueKey}
});

router.put('/puts', function(req,res) {
    //Create an object containing the query, header, and environment variable
    var putObject = {query: req.query, headers: req.headers, unique_key: uniqueKey}
});

router.delete('/deletes', function(req,res) {

    //need to add Basic Auth

    //Create an object containing the query, header, and environment variable
    var deleteObject = {query: req.query, headers: req.headers, unique_key: uniqueKey}
});
/*
router.route('/postjwt')
    .post(authJwtController.isAuthenticated, function (req, res) {
            console.log(req.body);
            res = res.status(200);
            if (req.get('Content-Type')) {
                console.log("Content-Type: " + req.get('Content-Type'));
                res = res.type(req.get('Content-Type'));
            }
            res.send(req.body);
        }
    );
*/

/*
router.post('/signup', function(req, res) {
    if (!req.body.username || !req.body.password) {
        res.json({success: false, msg: 'Please pass username and password.'});
    } else {
        var newUser = {
            username: req.body.username,
            password: req.body.password
        };
        // save the user
        db.save(newUser); //no duplicate checking
        res.json({success: true, msg: 'Successful created new user.'});
    }
});
*/
/*
router.post('/signin', function(req, res) {

        var user = db.findOne(req.body.username);

        if (!user) {
            res.status(401).send({success: false, msg: 'Authentication failed. User not found.'});
        }
        else {
            // check if password matches
            if (req.body.password == user.password)  {
                var userToken = { id : user.id, username: user.username };
                //var token = jwt.sign(userToken, process.env.SECRET_KEY);
                res.json({success: true, token: 'JWT ' + token});
            }
            else {
                res.status(401).send({success: false, msg: 'Authentication failed. Wrong password.'});
            }
        };
});
*/
app.use('/', router);
console.log("listening for a request on port 8080");
app.listen(process.env.PORT || 8080);
