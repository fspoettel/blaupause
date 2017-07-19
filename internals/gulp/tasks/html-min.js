const argv = require('yargs').boolean('p').argv;
const gulp = require('gulp');
const htmlmin = require('gulp-htmlmin');
const cfg = require('../config');

/**
 * Production Mode
 * if set, the css output will be optimized
 * @type {Boolean}
 */
const isProduction = argv.p;

gulp.task('html-min', () => {
  if (isProduction) {
    return gulp.src([
      `${cfg.destinationPath}/**/*.html`,
    ]).pipe(htmlmin({
      minifyCSS: true,
      collapseWhitespace: true,
      removeComments: true
    }))
    .pipe(gulp.dest(cfg.destinationPath));
  }
  return 0;
});
