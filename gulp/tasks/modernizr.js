/**
 * modernizr.js
 * @name - "modernizr"
 * @task - Compiles a custom Modernizr-build
 */

var gulp      = require("gulp"),
    uglify    = require("gulp-uglify"),
    rename    = require("gulp-rename"),
    modernizr = require("gulp-modernizr"),
    config    = require("../config");


gulp.task("modernizr", function() {

  gulp.src(config.scripts.bundles)
    .pipe(modernizr(config.modernizr.settings))
    .pipe(gulp.dest(config.modernizr.dest))
    .pipe(uglify())
    .pipe(rename({suffix: ".min"}))
    .pipe(gulp.dest(config.modernizr.dest))
});
