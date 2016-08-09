
const gulp = require('gulp');
const config = require('../config').copy;

/**
 * @name copy:build
 * @task Copy multiple static assets to the build directory
 */
gulp.task('copy:build', () => {
  const tasks = config.bundles.map(bundle =>
    gulp.src(bundle.sourcePath).pipe(gulp.dest(bundle.destinationPath))
  );

  return Promise.all(tasks);
});
