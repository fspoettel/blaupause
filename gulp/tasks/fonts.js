/**
 * fonts.js
 * @name - 'fonts'
 * @task - Copy font-files to build-dir
 */

'use strict';

const gulp = require('gulp');
const config = require('../config').fonts;

gulp.task('fonts', function copyFonts() {
  return gulp.src(config.src)
    .pipe(gulp.dest(config.dest));
});
