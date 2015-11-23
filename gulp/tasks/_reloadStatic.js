/**
 * _reloadStatic.js
 * @name - 'reloadStatic'
 * @task - Helper function for reloading the server with changes to html/img
 * @private
 */

'use strict';

const browserSync = require('browser-sync');
const gulp = require('gulp');
const gutil = require('gulp-util');

gulp.task('reloadStatic', function reloadStatic() {
  gutil.log(gutil.colors.yellow('Static files changed. Reloading BrowserSync...'));
  browserSync.reload();
});
