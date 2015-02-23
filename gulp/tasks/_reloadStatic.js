/**
 * _reloadStatic.js
 * @name - "reloadStatic"
 * @task - Helper function for reloading the server with changes to html/img
 * @private
 */

var gulp        = require("gulp"),
    browserSync = require("browser-sync");

gulp.task("reloadStatic", function () {
  browserSync.reload();
});
