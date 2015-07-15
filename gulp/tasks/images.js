/**
 * images.js
 * @name - 'images'
 * @task - Optimizes images
 */

'use strict';

const gulp     = require('gulp');
const imagemin = require('gulp-imagemin');

const config   = require('../config').images;

gulp.task('images', function() {
  return gulp.src(config.src)
    .pipe(imagemin({
      progressive: true
    }))
    .pipe(gulp.dest(config.dest))
});
