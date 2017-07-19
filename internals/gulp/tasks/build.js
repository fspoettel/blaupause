const del = require('del');
const gulp = require('gulp');
const runSequence = require('run-sequence');
const destinationPath = require('../config').destinationPath;

/**
 * @name build
 * @task builds the project
 */
gulp.task('build', (done) => {
  runSequence(
    'build:clean',
    ['copy:build', 'hugo:build', 'images:build', 'modernizr:build', 'scripts:build', 'styles:build', 'svg:build'],
    'hash',
    'hash-replace',
    'html-min',
    done
  );
});

/**
 * @name build:clean
 * @task cleans the build directory
 */
gulp.task('build:clean', () =>
  del([destinationPath]));
