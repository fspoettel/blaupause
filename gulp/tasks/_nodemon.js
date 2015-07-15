/**
 * _nodemon.js
 * @name - 'nodemon'
 * @task - Set up live-reloading via browserSync
 * @private
 * Nodemon task inspired by https://github.com/sogko/gulp-recipes/tree/master/browser-sync-nodemon-expressjs © Hafiz Ismail
 */

'use strict';

const browserSync = require('browser-sync');
const gulp        = require('gulp');
const nodemon     = require('gulp-nodemon');

const config      = require('../config').server;

gulp.task('nodemon', function(cb) {

  if (config.run) {
    let called = false;

    return nodemon({
      script: config.file,
      watch: [config.watch]
    })
    .on('start', function() {

      if (!called) { cb(); }

      called = true;

    })
    .on('restart', function() {

      setTimeout(function() {
        browserSync.reload({
          stream: false
        });
      }, config.reloadDelay);

    });

  }
  else {
    cb();
  }

});
