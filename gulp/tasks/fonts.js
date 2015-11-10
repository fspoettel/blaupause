/**
 * fonts.js
 * @name - 'fonts'
 * @task - Copy font-files to build-dir
 */

'use strict';

const gulp = require('gulp');
const size = require('gulp-size');

const config = require('../config').fonts;

gulp.task('fonts', function() {
  return gulp.src(config.src)
    .pipe(gulp.dest(config.dest));
});
