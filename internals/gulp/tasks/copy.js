const gulp = require('gulp');
const cfg = require('../config').copy;

/**
 * @name copy:build
 * @task copies multiple static assets to the build directory
 */
gulp.task('copy:build', () => {
  const tasks = cfg.bundles.map(bundle =>
    gulp.src(bundle.sourcePath).pipe(gulp.dest(bundle.destinationPath))
  );

  return Promise.all(tasks);
});
