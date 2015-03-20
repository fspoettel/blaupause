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
});
