const browserSync = require('../config').browserSync.instance;
const gulp = require('gulp');
const runSequence = require('run-sequence');
const cfg = require('../config');

/**
 * @name - 'watch'
 * @task - inits browserSync and binds change listeners
 */
gulp.task('watch', ['build'], () => {
  browserSync.init(cfg.browserSync.settings);

  const watch = (path, fn) => gulp.watch(path, fn);

  cfg.copy.bundles.forEach((bundle) => {
    watch(bundle.sourcePath, () => { runSequence('copy:build', 'reload'); });
  });

  watch([cfg.hugo.watch], () => runSequence('hugo:build', 'reload'));

  watch([cfg.images.sourcePath], () => runSequence('images:clean', 'images:build', 'reload'));

  watch([cfg.scripts.watch, cfg.scripts.bundles], () => runSequence('scripts:clean', 'scripts:build'));

  watch([cfg.styles.watch, cfg.styles.sourcePath], () => runSequence('styles:clean', 'styles:build'));

  watch([cfg.svg.sourcePath], () => runSequence('svg:clean', 'svg:build', 'reload'));
});
