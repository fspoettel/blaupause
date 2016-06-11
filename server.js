/**
 * server.js
 * @task - Launches a koa-server.
 * By default, serves the directory specified in `gulp/config`. Called from 'gulp'
 */
const koa = require('koa');
const app = koa();
const serve = require('koa-static');

const config = require('./gulp/config').server;

app.use(serve(config.dest));
app.listen(process.env.PORT || config.port);
