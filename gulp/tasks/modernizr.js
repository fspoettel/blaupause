/**
 * modernizr.js
 * @name - 'modernizr'
 * @task - Compiles a custom Modernizr-build
 */

'use strict';

const gulp = require('gulp');
const modernizr = require('gulp-modernizr');
const uglify = require('gulp-uglify');
const config = require('../config');

gulp.task('modernizr', () => gulp.src(config.scripts.bundles)
  .pipe(modernizr(config.modernizr.settings))
  .pipe(uglify())
  .pipe(gulp.dest(config.modernizr.dest))
);
