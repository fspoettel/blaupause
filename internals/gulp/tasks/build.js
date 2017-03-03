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
    done
  );
});

/**
 * @name build:clean
 * @task cleans the build directory
 */
gulp.task('build:clean', () =>
  del([destinationPath]));
