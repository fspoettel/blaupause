/**
 * images.js
 * @name - 'images'
 * @task - Optimizes images
 */
const gulp = require('gulp');
const imagemin = require('gulp-imagemin');

const config = require('../config').images;

gulp.task('images', () =>
  gulp.src(config.src)
    .pipe(imagemin(config.settings))
    .pipe(gulp.dest(config.dest))
);
