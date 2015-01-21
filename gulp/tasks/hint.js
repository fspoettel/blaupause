/**
 * hint.js
 * @name - "hint"
 * @task - jshint
 */

var gulp    = require("gulp"),
    jshint  = require("gulp-jshint"),
    stylish = require("jshint-stylish"),
    config  = require("../config").scripts;

gulp.task("hint", function(){
  return gulp.src([config.entry, config.src])
    .pipe(jshint())
    .pipe(jshint.reporter(stylish))
});
