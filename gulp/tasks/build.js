/**
 * build.js
 * @name - 'build'
 * @task - Rebuild without watching. Gets called in 'default'
 */

'use strict';

const gulp = require('gulp');
const runSequence = require('run-sequence');

gulp.task('build', function build(cb) {
  runSequence(
    'clean', // Needs to complete first
    ['fonts', 'images', 'modernizr', 'scripts', 'styles', 'views'], // Build step
    cb
  );
});
