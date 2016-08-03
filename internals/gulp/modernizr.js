/**
 * modernizr.js
 * @name - 'modernizr'
 * @task - Compiles a custom Modernizr-build
 */
const gulp = require('gulp');
const modernizr = require('gulp-modernizr');
const uglify = require('gulp-uglify');

const config = require('../config');

gulp.task('modernizr:build', () =>
  gulp.src(config.scripts.bundles)
    .pipe(modernizr(config.modernizr.settings))
    .pipe(uglify())
    .pipe(gulp.dest(config.modernizr.destinationPath))
);
