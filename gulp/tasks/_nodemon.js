/**
 * _nodemon.js
 * @name - "nodemon"
 * @task - Set up live-reloading via browserSync
 * @private
 * Nodemon task inspired by https://github.com/sogko/gulp-recipes/tree/master/browser-sync-nodemon-expressjs © Hafiz Ismail
 */


var gulp   = require("gulp"),
    nodemon = require("gulp-nodemon"),
    browserSync = require("browser-sync"),
    config = require("../config").server;

gulp.task("nodemon", function (cb) {
  if(config.runServer){
    var called = false;
    return nodemon({
      script: config.file,
      watch: [config.file]
    })
    .on("start", function() {
      /** Make sure starting callback is only triggered once */
      if (!called) {
        cb();
      }
      called = true;
    })
    .on("restart", function() {
      /** reload connected browsers after a slight delay */
      setTimeout(function() {
        browserSync.reload({
          stream: false
        });
      }, config.reloadDelay);
    });
  }
  else {
    /** Signalize task is done when no server is setup */
    cb();
  }
});
