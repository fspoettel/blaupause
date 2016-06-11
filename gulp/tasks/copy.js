/**
 * copy.js
 * @name - 'copy'
 * @task - Generic copy task
 */
const gulp = require('gulp');

const config = require('../config').copy;

gulp.task('copy', () =>
  config.bundles.forEach((source) =>
    gulp.src(source.src)
      .pipe(gulp.dest(source.dest))
  )
);
