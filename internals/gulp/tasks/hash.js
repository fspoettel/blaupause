const argv = require('yargs').boolean('p').argv;
const gulp = require('gulp');
const rev = require('gulp-rev');
const clean = require('gulp-clean');
const path = require('path');
const cfg = require('../config');

/**
 * Production Mode
 * if set, the css output will be optimized
 * @type {Boolean}
 */
const isProduction = argv.p;

gulp.task('hash', () => {
  if (isProduction) {
    return gulp.src([
      `${cfg.styles.destinationPath}/**`,
      `${cfg.scripts.destinationPath}/**`,
      `${cfg.images.destinationPath}/**`,
      `${cfg.svg.destinationPath}/**`
    ], { base: path.join(process.cwd(), cfg.assetPath) })
      .pipe(clean())
      .pipe(rev())
      .pipe(gulp.dest(cfg.assetPath))
      .pipe(rev.manifest())
      .pipe(gulp.dest(cfg.assetPath));
  }
  return 0;
});
