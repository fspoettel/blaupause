/**
 * build.js
 * @name - "build"
 * @task - Rebuild without watching
 */

var gulp = require("gulp");

gulp.task("build", ["styles", "scripts", "views"]);
