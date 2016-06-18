/**
 * watch.js
 * @name - 'watch'
 * @task - Triggers recompiles & live-reloads
 */
const browserSync = require('browser-sync');
const gulp = require('gulp');

const config = require('../config');

/** Execute build process / start Node-Server before initiating watch-tasks */
gulp.task('watch', ['build', 'nodemon'], () => {
  /** Init BrowserSync Process */
  browserSync.init(config.browserSync);

  /** Watch file changes & trigger rebuilds / reloads */

  config.copy.bundles.forEach(bundle =>
    gulp.watch(bundle.sourcePath, ['copy', 'reload'])
  );

  gulp.watch([config.images.sourcePath], ['images', 'reload']);
  gulp.watch([config.scripts.watch, config.scripts.bundles], ['scripts']);
  gulp.watch([config.styles.watch, config.styles.sourcePath], ['styles']);
  gulp.watch([config.svg.sourcePath], ['svg', 'reload']);
});
