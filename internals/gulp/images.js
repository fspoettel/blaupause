/**
 * images.js
 * @name - 'images'
 * @task - Optimizes images
 */
const gulp = require('gulp');
const imagemin = require('gulp-imagemin');

const config = require('../config').images;

gulp.task('images:build', () =>
  gulp.src(config.sourcePath)
    .pipe(imagemin(config.settings))
    .pipe(gulp.dest(config.destinationPath))
);