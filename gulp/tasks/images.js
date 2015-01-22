/**
 * images.js
 * @name - "images"
 * @task - Optimizes images
 */

var gulp     = require("gulp"),
    imagemin = require("gulp-imagemin"),
    config   = require("../config").images;

gulp.task("images", function(){
  return gulp.src(config.src)
    .pipe(imagemin({
      progressive: true
    }))
    .pipe(gulp.dest(config.dest))
});
