const gulp = require('gulp');
const gutil = require('gulp-util');
const BrowserSync = require('../config').browserSync.instance;

/**
 * @private
 * @task reloads the BrowserSync instance
 */
gulp.task('reload', () => {
  gutil.log(gutil.colors.green('Static files changed. Reloading BrowserSync...'));
  BrowserSync.reload();
});
