const del = require('del');
const gulp = require('gulp');
const modernizr = require('gulp-modernizr');
const uglify = require('gulp-uglify');
const cfg = require('../config');

/**
 * modernizr:build
 * @name - modernizr:build
 * @task - Builds a custom Modernizr
 */
gulp.task('modernizr:build', () =>
  gulp.src(cfg.scripts.bundles)
    .pipe(modernizr(cfg.modernizr.fileName, cfg.modernizr.settings))
    .pipe(uglify())
    .pipe(gulp.dest(cfg.modernizr.destinationPath))
);

/**
 * @name modernizr:clean
 * @task Clean the custom Modernizr build
 */
gulp.task('modernizr:clean', () =>
  del([`${cfg.modernizr.destinationPath}/${cfg.modernizr.fileName}`]));
