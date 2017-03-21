const argv = require('yargs').boolean('p').argv;
const browserSync = require('../config').browserSync.instance;
const compress = require('compression');
const gulp = require('gulp');
const runSequence = require('run-sequence');
const cfg = require('../config');

/**
 * Production Mode
 * if set, the js output will be optimized
 * @type {Boolean}
 */
const isProduction = argv.p;

/**
 * @name - 'watch'
 * @task - inits browserSync and binds change listeners
 */
gulp.task('watch', ['build'], () => {
  const settings = cfg.browserSync.settings;

  const settingsWithMiddleware = settings;

  settings.server = Object.assign({}, settings.server, {
    middleware: isProduction ? [compress()] : [],
  });

  browserSync.init(settingsWithMiddleware);

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
