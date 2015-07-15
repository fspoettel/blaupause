/**
 * _reloadStatic.js
 * @name - 'reloadStatic'
 * @task - Helper function for reloading the server with changes to html/img
 * @private
 */

'use strict';

const browserSync = require('browser-sync');
const gulp        = require('gulp');

gulp.task('reloadStatic', function() {
  browserSync.reload();
});
