/**
 * views.js
 * @name - "views"
 * @task - Copies views to destination
 */

var gulp   = require("gulp"),
    config = require("../config").views;

gulp.task('views', function() {

  gulp.src(config.index)
    .pipe(gulp.dest(config.dest));

  /** Statamic-mode copies the files from "views" into the root of "dest" */
  if(config.statamic){
    gulp.src(config.src)
      .pipe(gulp.dest(config.dest));
  } else {
    gulp.src(config.src,{ base: './client/' })
      .pipe(gulp.dest(config.dest));
  }
});
