/**
 * app.js
 * @task - Launches an express-server. By default, serves the directory specified in `gulp/config`. Called from 'gulp'
 */

var express = require("express"),
    app     = express(),
    config  = require("./gulp/config").server;

app.use(express.static(config.dest));

var server = app.listen(process.env.PORT || config.port);
