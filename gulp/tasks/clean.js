/**
 * clean.js
 * @name - "clean[:scripts, :styles, :views]"
 * @task -  Cleans generated files
 */

var gulp   = require("gulp"),
    del    = require("del"),
    config = require("../config");

gulp.task("clean", function(){
  del([
    config.server.dest
  ])
});

gulp.task("clean:styles", function(){
    del([
      config.styles.dest
    ])
});

gulp.task("clean:scripts", function(){
  del([
    config.scripts.dest
  ])
});

gulp.task("clean:views", function(){
    del([
      config.views.dest + "/views",
      config.views.dest + "/*.{html,md,yaml,txt,xml,png,ico}"
    ])
});
