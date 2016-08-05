// Getting all the required packages
var express = require('express');
var app = express()
var employerRouter = express.Router()
var employeeRouter = express.Router()
var path = require('path');
var bodyParser = require('body-parser')
var mongoose = require('mongoose');

// Setting the port the server is run on to be 8080
var port = 8080;

// Connecting to our locally hosted database
mongoose.connect('mongodb://localhost/employers')

// Using body parser to extract properties/parameters from the body passed during the post request
app.use(bodyParser.urlencoded({extended: 'True'}))
app.use(bodyParser.json());
app.use(express.static(__dirname + '/public')); // To be able to return static objects - such as images, html, js files kept locally

// Getting access to the employer object so that you have the definition of an employer with us in this file
// Using this definition we can create/read/remove/update new instances of employers and work along with them
var User = require('./app/models/userData')
// Similarly getting access to the employee model to be able to create documents of employee type
// var Employee = require('./models/employeeData')

// Getting all my routes into one place
require('./app/Routes/user_Routes')(app);

// // Utilizing all these routers in the application
// app.use('/employer', employerRouter)
// app.use('/employee', employeeRouter)

// Defining the main route on the app to basically test if everything is working
app.get('/', function(req, res){
	res.send({message: ' I got your request'});
});

// Listening on the designated port
app.listen(port);
console.log('The app just started running, please head over to postman to make requests');


