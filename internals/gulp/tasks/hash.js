const gulp = require('gulp');
const rev = require('gulp-rev');
const revdel = require('gulp-rev-delete-original');
const path = require('path');
const cfg = require('../config');

gulp.task('hash', () =>
  gulp.src([
    `${cfg.styles.destinationPath}/**/*.css`,
    `${cfg.scripts.destinationPath}/**`,
    `${cfg.images.destinationPath}/**`,
    `${cfg.svg.destinationPath}/**`
  ], { base: path.join(process.cwd(), cfg.assetPath) })
    .pipe(rev())
    .pipe(revdel())
    .pipe(gulp.dest(cfg.assetPath))
    .pipe(rev.manifest())
    .pipe(gulp.dest(cfg.assetPath))
);
