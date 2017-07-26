const gulp = require('gulp');
const htmlhint = require('gulp-htmlhint');
const cfg = require('../config');

gulp.task('html-hint', () =>
  gulp.src([
    `${cfg.destinationPath}/**/*.html`,
  ]).pipe(htmlhint('.htmlhintrc'))
    .pipe(htmlhint.reporter())
);
