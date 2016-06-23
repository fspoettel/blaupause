/**
 * build.js
 * @name - 'build'
 * @task - Rebuild without watching. Gets called in 'default'
 */
const gulp = require('gulp');
const runSequence = require('run-sequence');

gulp.task('build', done => {
  runSequence(
    'clean',
    ['copy', 'images', 'modernizr', 'scripts', 'styles', 'svg'],
    done
  );
});
