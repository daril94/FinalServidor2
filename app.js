//strict mode
'use strict';

// dependencies
//https://codigofacilito.com/videos/curso_nodejs_sesiones
var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
// ruta para autenticacion e index
var authUser = require('./app_server/routes/authUser');
// ruta para los usuarios
var users = require('./app_server/routes/users');
// ruta para los admin
var admin = require('./app_server/routes/admin');
// ruta para blogs
var blogs = require('./app_server/routes/blogs');




const session = require('express-session');



const optSession = { secret:'amakakeruRyunoHirameki', saveUninitialized: true, resave: true }

//db
const mongoose = require('mongoose');
const config = require('./app_server/config/database');
//db
const db = mongoose.connect(config.database);

//On connection
mongoose.connection.on('connected',()=>{
    console.log('Connected to the database '+ config.database);
})

//On error
mongoose.connection.on('error',(err)=>{
    console.log('Error '+ err);
})



// app express
var app = express();

// view engine setup
app.set('views',path.join(__dirname,"app_server","views"));
app.set("view engine","pug");

app.use (session(optSession));

// sesioes
/*
app.use(session ({
   secret: "amakakeruRyunoHirameki"
}));
*/


// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));

// Logger middleware
app.use(logger('dev'));

// bodyParser middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:false}));

//cookie parser
app.use(cookieParser());

// Public folder
app.use(express.static(path.join(__dirname,'public')));

// Routes
app.use(authUser);
app.use(blogs);
app.use(admin);
app.use(users);

// catch 404 and forward to error handler
app.use(function(req, res, next) {

  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});


// error handler

//Init server
app.listen(3000,()=>{
  "Server on port 3000"
})

module.exports = app;
