/**
 * build.js
 * @name - "build"
 * @task - Rebuild without watching. Gets called in "default"
 */

var gulp = require("gulp");

gulp.task("build", ["clean", "styles", "scripts", "views"]);
