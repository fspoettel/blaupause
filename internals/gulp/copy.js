/**
 * copy.js
 * @name - 'copy'
 * @task - Generic copy task
 */
const gulp = require('gulp');
const config = require('../config').copy;

gulp.task('copy:build', () => {
  const tasks = config.bundles.map(bundle =>
    gulp.src(bundle.sourcePath).pipe(gulp.dest(bundle.destinationPath))
  );

  return Promise.all(tasks);
});
