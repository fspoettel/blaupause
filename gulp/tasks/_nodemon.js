/**
 * _nodemon.js
 * @name - 'nodemon'
 * @task - Set up live-reloading via browserSync
 * @private
 * Nodemon task inspired by https://github.com/sogko/gulp-recipes/tree/master/browser-sync-nodemon-expressjs © Hafiz Ismail
 */

const browserSync = require('browser-sync');
const gulp = require('gulp');
const nodemon = require('gulp-nodemon');
const config = require('../config').server;

gulp.task('nodemon', (cb) => {
  if (!config.run) {
    cb();
    return null;
  }

  let called = false;

  return nodemon({
    script: config.file,
    watch: [config.watch],
  })

  .on('start', () => {
    if (!called) { cb(); }
    called = true;
  })

  .on('restart', () => {
    setTimeout(() => {
      browserSync.reload({
        stream: false,
      });
    }, config.reloadDelay);
  });
});
