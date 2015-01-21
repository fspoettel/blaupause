/**
 * default.js
 * @name - "[default, start]"
 * @task - Default compile task
 */

var gulp = require("gulp");

gulp.task("default", ["styles", "scripts", "views", "watch"]);

gulp.task("start", ["styles", "scripts", "views", "watch"]);
