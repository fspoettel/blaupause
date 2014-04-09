
// *    Sass Test Task
// * ---------------------

// * Dependencies

var gulp    = require("gulp"),
    sass    = require("gulp-ruby-sass"),
    plumber = require("gulp-plumber"),
    prefix  = require("gulp-autoprefixer"),
    rename  = require("gulp-rename"),
    config  = require("../config");

// * Paths

var sassSrc = config.sassSrc,
    sassDest = config.sassTestDest,
    sassName = config.fileName + ".css",
    sassMinName = config.fileName + ".min.css";
// * Function

module.exports = function(){
  gulp.src(sassSrc)
    .pipe(plumber({errorHandler: function(){console.log("Exiting")}}))
    .pipe(sass({noCache:true}))
    .pipe(prefix("last 1 version", "Explorer >=10"))
    .pipe(rename(sassName))
    .pipe(gulp.dest(sassDest));
};