/**
 * server.js
 * @task - Launches an express-server. By default, serves the directory specified in `gulp/config`. Called from 'gulp'
 */

'use strict';

const express = require('express');
const app     = express();
const config  = require('./gulp/config').server;

app.use(express.static(config.dest));

const server = app.listen(process.env.PORT || config.port);
