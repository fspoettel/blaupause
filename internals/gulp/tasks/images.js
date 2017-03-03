const del = require('del');
const gulp = require('gulp');
const imagemin = require('gulp-imagemin');
const cfg = require('../config').images;

/**
 * @name images:build
 * @task builds the images via imagemin
 */
gulp.task('images:build', () =>
  gulp.src(cfg.sourcePath)
    .pipe(imagemin(cfg.settings))
    .pipe(gulp.dest(cfg.destinationPath))
);

/**
 * @name images:clean
 * @task cleans the image build directory
 */
gulp.task('images:clean', () =>
  del([`${cfg.destinationPath}/**`]));
