/**
 * modernizr.js
 * @name - "modernizr"
 * @task - Compiles a custom Modernizr-build
 */

var gulp      = require("gulp");
var uglify    = require("gulp-uglify");
var rename    = require("gulp-rename");
var modernizr = require("gulp-modernizr");

var config    = require("../config");

gulp.task("modernizr", function() {

  gulp.src(config.scripts.bundles)
    .pipe(modernizr(config.modernizr.settings))
    .pipe(gulp.dest(config.modernizr.dest))
    .pipe(uglify())
    .pipe(rename({suffix: ".min"}))
    .pipe(gulp.dest(config.modernizr.dest))
});
