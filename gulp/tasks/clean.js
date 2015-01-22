/**
 * clean.js
 * @name - "clean[:scripts, :styles, :views]"
 * @task -  Cleans generated files
 */

var gulp   = require("gulp"),
    del    = require("del"),
    config = require("../config");

gulp.task("clean", function(){
  if(!config.views.root){
    del([
      config.server.dest
    ])
  } else {
    console.log("Root-mode. Please clean manually.")
  }
});
