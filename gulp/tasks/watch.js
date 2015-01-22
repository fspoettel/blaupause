/**
 * watch.js
 * @name - "watch"
 * @task - Triggers recompiles & live-reloads
 */

var gulp   = require("gulp"),
    config = require("../config");

gulp.task("watch", ["browserSync"], function(){

  gulp.watch([config.styles.watch, config.styles.entry], ["styles"]);

  gulp.watch([config.scripts.watch, config.scripts.entry], ["scripts", "reload"]);

  gulp.watch([config.views.src, config.views.index], ["views", "reload"]);

  gulp.watch([config.images.src], ["images", "reload"]);

});
