/**
 * _browserSync.js
 * @name - "browserSync"
 * @task - Set up live-reloading via browserSync
 * @private
 */


var gulp        = require("gulp"),
    browserSync = require("browser-sync"),
    config      = require("../config").browserSync;

gulp.task("browserSync", ["nodemon"], function(){
  browserSync.init(config);
});
