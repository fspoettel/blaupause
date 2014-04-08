
// *    Scripts Task
// * ---------------------

// * Dependencies

var gulp   = require("gulp"),
    config = require("../config"),
    concat = require("gulp-concat"),
    uglify = require("gulp-uglify"),
    rename = require("gulp-rename");

// * Paths

var jsSrc = config.jsSrc,
    jsDest = config.jsDest,
    jsName = config.fileName + ".js",
    jsMinName = config.fileName + ".min.js";

// * Function

module.exports = function(){
  gulp.src(jsSrc)
    .pipe(concat(jsName))
    .pipe(gulp.dest(jsDest))
    .pipe(uglify())
    .pipe(rename(jsMinName))
    .pipe(gulp.dest(jsDest));
};