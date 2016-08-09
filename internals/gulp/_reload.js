/**
 * _reload.js
 * @name - 'reload'
 * @task - Helper function for reloading the server with changes to html/img
 * @private
 */
const browserSync = require('../config').browserSync;
const gulp = require('gulp');
const gutil = require('gulp-util');

gulp.task('reload', () => {
  gutil.log(gutil.colors.yellow('Static files changed. Reloading BrowserSync...'));
  browserSync.reload();
});
