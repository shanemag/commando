#!/bin/env node
//  Main application entry point
var express = require('express');
var fs      = require('fs');
var mongoose = require('mongoose');
var passport = require('passport');
var path = require('path');

var env = process.env.NODE_ENV || 'development';
var config = require('./config/config')[env];
var openshift = require("./config/openshift");

// openshift preliminary functions
openshift();

// db connection
mongoose.connect(config.db);

var models_path = __dirname + '/models';
fs.readdirSync(models_path).forEach(function (file) {
  require(models_path+'/'+file);
});

// bootstrap passport config
require('./config/passport')(passport, config);

// Express server
var app = express();

// express settings
require('./config/express')(app, config, passport);

// Bootstrap routes
require('./config/routes')(app, passport);

var ipaddress = process.env.OPENSHIFT_INTERNAL_IP;
var port      = process.env.OPENSHIFT_INTERNAL_PORT || 3000;

// Took this from Openshift sample app, seems like a handy function
if (typeof ipaddress === "undefined") {
    //  Log errors on OpenShift but continue w/ 127.0.0.1 - this
    //  allows us to run/test the app locally.
    console.warn('No OPENSHIFT_INTERNAL_IP var, using 127.0.0.1');
    ipaddress = "127.0.0.1";
}

// Start server
app.listen(port);
console.log('Express app started on port '+port);
    

