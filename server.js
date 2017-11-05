var express = require('express'),
    app = express(),

    port = process.env.PORT || 3000,

    mongoose = require('mongoose'),
    bodyParser = require('body-parser');
    expressValidator = require('express-validator');
    Student = require('./api/models/todoListModel'),//create model loading here

    //mongoose instance connection url connection
    mongoose.Promise = global.Promise;
    mongoose.connect('mongodb://localhost:27017/Tododb');


    app.use(bodyParser.urlencoded({ extended: true}));
    app.use(bodyParser.json());
    // app.use(require('connect').bodyParser());
    app.use(expressValidator());

    // app.use(express.static(__dirname + '/index.html'));

    app.use(express.static(__dirname + '/public'));
    // set the view engine to ejs
    app.set('view engine', 'ejs');


    var routes = require('./api/routes/todoListRoutes'); //importing route
    routes(app); //register the route

app.listen(port);

console.log('todo list RESTful API server started on: ' + port);

app.use(function(req,res){
        res.status(404).send({url: req.originalUrl + 'not found'})
    });
