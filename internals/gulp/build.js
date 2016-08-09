/**
 * build.js
 * @name - 'build'
 * @task - Rebuild without watching. Gets called in 'default'
 */
const del = require('del');
const gulp = require('gulp');
const runSequence = require('run-sequence');
const destinationPath = require('../config').destinationPath;

gulp.task('build', done => {
  runSequence(
    'build:clean',
    ['copy:build', 'hugo:build', 'images:build', 'modernizr:build', 'scripts:build', 'styles:build', 'svg:build'],
    done
  );
});

gulp.task('build:clean', () =>
  del([destinationPath]));
