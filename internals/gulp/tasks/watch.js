
const browserSync = require('../config').browserSync;
const gulp = require('gulp');
const runSequence = require('run-sequence');
const config = require('../config');

/**
 * @name - 'watch'
 * @task - Inits browserSync and binds change listeners
 */
gulp.task('watch', ['build'], () => {
  browserSync.init(config.browserSyncConfig);

  const watch = (...args) => gulp.watch(...args);

  config.copy.bundles.forEach(bundle => {
    watch(bundle.sourcePath, () => { runSequence('copy:build', 'reload'); });
  });

  watch(
    [config.hugo.watch], () => runSequence('hugo:build', 'reload')
  );

  watch(
    [config.images.sourcePath], () => runSequence('images:clean', 'images:build', 'reload')
  );

  watch(
    [config.scripts.watch, config.scripts.bundles], () => runSequence('scripts:clean', 'scripts:build')
  );

  watch(
    [config.styles.watch, config.styles.sourcePath], () => runSequence('styles:clean', 'styles:build')
  );

  watch(
    [config.svg.sourcePath], () => runSequence('svg:clean', 'svg:build', 'reload')
  );
});
