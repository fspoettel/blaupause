/**
 * copy.js
 * @name - 'copy'
 * @task - Generic copy task
 */
const gulp = require('gulp');

const config = require('../config').copy;

gulp.task('copy', () =>
  config.bundles.forEach((source) =>
    gulp.src(source.sourcePath)
      .pipe(gulp.dest(source.destinationPath))
  )
);
