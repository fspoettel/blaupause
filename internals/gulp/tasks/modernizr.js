
const del = require('del');
const gulp = require('gulp');
const modernizr = require('gulp-modernizr');
const uglify = require('gulp-uglify');
const config = require('../config');

/**
 * modernizr:build
 * @name - modernizr:build
 * @task - Builds a custom Modernizr
 */
gulp.task('modernizr:build', () =>
  gulp.src(config.scripts.bundles)
    .pipe(modernizr(config.modernizr.fileName, config.modernizr.settings))
    .pipe(uglify())
    .pipe(gulp.dest(config.modernizr.destinationPath))
);

/**
 * @name modernizr:clean
 * @task Clean the custom Modernizr build
 */
gulp.task('modernizr:clean', () =>
  del([`${config.modernizr.destinationPath}/${config.modernizr.fileName}`]));
