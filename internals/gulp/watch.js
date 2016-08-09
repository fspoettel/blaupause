/**
 * watch.js
 * @name - 'watch'
 * @task - Triggers recompiles & live-reloads
 */
const browserSync = require('../config').browserSync;
const gulp = require('gulp');
const runSequence = require('run-sequence');
const config = require('../config');

gulp.task('watch', ['build'], () => {
  browserSync.init(config.browserSyncConfig);

  config.copy.bundles.forEach(bundle => {
    gulp.watch(bundle.sourcePath, () => { runSequence('copy:build', 'reload'); });
  });

  gulp.watch([config.scripts.watch, config.scripts.bundles], ['scripts:build']);
  gulp.watch([config.styles.watch, config.styles.sourcePath], ['styles:build']);
  gulp.watch([config.images.sourcePath], () => { runSequence('images:build', 'reload'); });
  gulp.watch([config.svg.sourcePath], () => { runSequence('svg:build', 'reload'); });
  gulp.watch([config.hugo.watch], () => { runSequence('hugo:build', 'reload'); });
});
