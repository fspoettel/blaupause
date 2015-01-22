/**
 * _reload.js
 * @name - "reload"
 * @task - Helper function for reloading the server with changes to html/js
 * @private
 */

var gulp        = require("gulp"),
    browserSync = require("browser-sync");

gulp.task("reload", function () {
  browserSync.reload();
});
