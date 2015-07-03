/**
 * modernizr.js
 * @name - "modernizr"
 * @task - Compiles a custom Modernizr-build
 */

var gulp      = require("gulp");
var modernizr = require("gulp-modernizr");
var uglify    = require("gulp-uglify");

var config    = require("../config");

gulp.task("modernizr", function() {

  gulp.src(config.scripts.bundles)
    .pipe(modernizr(config.modernizr.settings))
    .pipe(uglify())
    .pipe(gulp.dest(config.modernizr.dest))
});
