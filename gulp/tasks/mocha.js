/**
 * mocha.js
 * @name - "mocha"
 * @task - Run Mocha test-suite
 */

var gulp   = require("gulp");
var mocha  = require("gulp-mocha");
var config = require("../config").mocha;

gulp.task("mocha", function() {
  return gulp.src(config.specs, {read: false})
    .pipe(mocha({ reporter: "nyan" }))
    .on("error", function(err) {
      console.log(err.message);
    });
});
