
// *    Image Task
// * ---------------------

// * Dependencies

var gulp     = require("gulp"),
    config   = require("../config"),
    imagemin = require("gulp-imagemin");

// * Paths

var imgSrc = config.imgSrc,
    imgDest = config.imgDest;

// * Function

module.exports = function(){
    gulp.src(imgSrc)
      .pipe(imagemin())
      .pipe(gulp.dest(imgDest));
};