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

  var toHint = [];

  toHint.push(config.entry)

  for(var i = 0; i < config.watch.length; i++){
    toHint.push(config.watch[i])
  }

  return gulp.src(toHint)
    .pipe(jshint())
    .pipe(jshint.reporter(stylish))
});
