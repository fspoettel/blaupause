
const del = require('del');
const gulp = require('gulp');
const imagemin = require('gulp-imagemin');
const config = require('../config').images;

/**
 * @name images:build
 * @task Builds the images via imagemin
 */
gulp.task('images:build', () =>
  gulp.src(config.sourcePath)
    .pipe(imagemin(config.settings))
    .pipe(gulp.dest(config.destinationPath))
);

/**
 * @name images:clean
 * @task Cleans the image build directory
 */
gulp.task('images:clean', () =>
  del([`${config.destinationPath}/**`]));
