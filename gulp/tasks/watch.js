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

  gulp.watch([config.fonts.src], ['fonts', 'reloadStatic']);

  gulp.watch([config.images.src], ['images', 'reloadStatic']);

  gulp.watch([config.scripts.watch, config.scripts.bundles], ['scripts']);

  gulp.watch([config.styles.watch, config.styles.src], ['styles']);

  gulp.watch([config.svg.src], ['svg', 'reloadStatic']);

  gulp.watch([config.views.index], ['views', 'reloadStatic']);
});
