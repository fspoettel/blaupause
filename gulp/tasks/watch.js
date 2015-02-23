/**
 * watch.js
 * @name - "watch"
 * @task - Triggers recompiles & live-reloads
 */

var gulp        = require("gulp"),
    browserSync = require("browser-sync"),
    config      = require("../config");

/** Execute build process / start Node-Server before initiating watch-tasks */
gulp.task("watch", ["build", "nodemon"], function(){

  /** Init BrowserSync Process */
  browserSync.init(config.browserSync);

  /** Watch file changes & trigger rebuilds / reloads */
  gulp.watch([config.styles.watch, config.styles.entry], ["styles"]);

  gulp.watch([config.scripts.watch, config.scripts.entry], ["scripts"]);

  gulp.watch([config.views.src, config.views.index], ["views", "reloadStatic"]);

  gulp.watch([config.images.src], ["images", "reloadStatic"]);

});
