/**
 * clean.js
 * @name - "clean"
 * @task -  Cleans generated files
 */

var del    = require("del"),
    gulp   = require("gulp"),
    config = require("../config");

gulp.task("clean", function(){

  del([
    config.server.dest
  ])

});
