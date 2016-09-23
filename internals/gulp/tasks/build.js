const del = require('del');
const gulp = require('gulp');
const runSequence = require('run-sequence');
const destinationPath = require('../config').destinationPath;

/**
 * @name build
 * @task Build the project
 */
gulp.task('build', (done) => {
  runSequence(
    'build:clean',
    ['copy:build', 'hugo:build', 'images:build', 'modernizr:build', 'scripts:build', 'styles:build', 'svg:build'],
    done
  );
});

/**
 * @name build:clean
 * @task Clean the build directory
 */
gulp.task('build:clean', () =>
  del([destinationPath]));
