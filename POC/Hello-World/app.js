'use strict';

var SwaggerExpress = require('swagger-express-mw');
var app = require('express')();
var mongoose = require('mongoose');
//var theseus = require('node-theseus');
//var nomo = require('node-monkey').start({port: 50501});
//module.exports = app; // for testing

var config = {
  appRoot: __dirname // required config
};

SwaggerExpress.create(config, function(err, swaggerExpress) 
{
  if (err) { throw err; }

  // install middleware
  swaggerExpress.register(app);
  mongoose.connect('mongodb://localhost/x-crash-course-movies-db');
  mongoose.connection.on('error',console.error.bind(console, 'connection error:'));
    mongoose.connection.once('open', function(){
                             app.listen(8081, function(){
        console.log('App is listening on port 8081');
    });
  });                      
});
