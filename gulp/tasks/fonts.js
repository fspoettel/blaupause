/**
 * fonts.js
 * @name - 'fonts'
 * @task - Copy font-files to build-dir
 */

const gulp = require('gulp');
const config = require('../config').fonts;

gulp.task('fonts', () => gulp.src(config.src)
  .pipe(gulp.dest(config.dest))
);
