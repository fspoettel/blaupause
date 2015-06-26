/**
 * watch.js
 * @name - "watch"
 * @task - Triggers recompiles & live-reloads
 */

var gulp        = require("gulp");
var browserSync = require("browser-sync");
var config      = require("../config");

/** Execute build process / start Node-Server before initiating watch-tasks */
gulp.task("watch", ["build", "nodemon"], function() {

  /** Init BrowserSync Process */
  browserSync.init(config.browserSync);

  /** Watch file changes & trigger rebuilds / reloads */
  gulp.watch([config.styles.watch, config.styles.src], ["styles"]);

  gulp.watch([config.scripts.watch, config.scripts.bundles], ["scripts"]);

  gulp.watch([config.views.index], ["views", "reloadStatic"]);

  gulp.watch([config.images.src], ["images", "reloadStatic"]);

});
