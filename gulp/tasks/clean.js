/**
 * clean.js
 * @name - "clean[:scripts, :styles, :views]"
 * @task -  Cleans generated files
 */

var gulp   = require("gulp"),
    del    = require("del"),
    config = require("../config");

gulp.task("clean", function(){
  if(!config.views.root && config.server.dest !== "./"){
    del([
      config.server.dest
    ])
  } else {

      del([
        config.styles.dest,
        config.scripts.dest,
        config.images.dest
      ])
      if(config.views.root) {
        console.log("Root Mode: Please clean view-files manually.")
      } else {
        console.log("Operating in root-directory: Please clean view-files manually.")
      }
  }
});
