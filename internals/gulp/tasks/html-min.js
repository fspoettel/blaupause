const gulp = require('gulp');
const htmlmin = require('gulp-htmlmin');
const cfg = require('../config');

gulp.task('html-min', () => {
  gulp.src([
    `${cfg.destinationPath}/**/*.html`,
  ]).pipe(htmlmin({
    minifyCSS: true,
    collapseWhitespace: true,
    removeComments: true
  }))
  .pipe(gulp.dest(cfg.destinationPath));
});
