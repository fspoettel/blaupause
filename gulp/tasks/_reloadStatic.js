/**
 * _reloadStatic.js
 * @name - "reloadStatic"
 * @task - Helper function for reloading the server with changes to html/img
 * @private
 */

var browserSync = require("browser-sync"),
    gulp        = require("gulp");

gulp.task("reloadStatic", function () {
  browserSync.reload();
});
