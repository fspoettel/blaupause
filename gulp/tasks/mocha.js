/**
 * mocha.js
 * @name - "mocha"
 * @task - Run Mocha test-suite
 */

var gulp   = require("gulp"),
    mocha  = require("gulp-mocha"),
    config = require("../config").mocha;

gulp.task("mocha", function () {
  return gulp.src(config.specs, {read: false})
    .pipe(mocha({ reporter: "nyan" }))
    .on("error", function (err) {
      console.log(err.message);
    });
});
