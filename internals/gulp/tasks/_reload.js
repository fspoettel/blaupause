const browserSync = require('../config').browserSync.instance;
const gulp = require('gulp');
const gutil = require('gulp-util');

/**
 * @private
 * @name reload
 * @task Reloads the BrowserSync instance
 */
gulp.task('reload', () => {
  gutil.log(gutil.colors.green('Static files changed. Reloading BrowserSync...'));
  browserSync.reload();
});
