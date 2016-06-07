/**
 * build.js
 * @name - 'build'
 * @task - Rebuild without watching. Gets called in 'default'
 */

const gulp = require('gulp');
const runSequence = require('run-sequence');

gulp.task('build', (cb) => {
  runSequence(
    'clean', // Needs to complete first
    ['fonts', 'images', 'modernizr', 'scripts', 'styles', 'svg', 'views'], // Build step
    cb
  );
});
