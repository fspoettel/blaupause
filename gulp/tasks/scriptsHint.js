
// *    jsHint Task
// * ---------------------

// * Dependencies

var gulp   = require("gulp"),
    config = require("../config");
    jshint = require("gulp-jshint");

// * Paths

var jsSrc = config.jsSrc;

// * Paths

module.exports = function(){
  gulp.src(jsSrc)
    .pipe(jshint())
    .pipe(jshint.reporter('default'));
};