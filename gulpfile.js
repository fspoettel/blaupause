
// *    Gulpfile
// * ---------------------
// * This file contains the gulp build-process.
// * ---------------------

// *   Require sub-modules
// * ---------------------

var gulp = require("./gulp")([
  "sass",
  "sassDebug",
  "sassTestBuild",
  "scripts",
  "scriptsHint",
  "image",
  "observe",
  "observeTest"
]);

// * Register Tasks
// * ---------------------

gulp.task("default", ["sass", "scripts"]);

gulp.task("debug", ["sassDebug"]);

gulp.task("hint", ["scriptsHint"]);

gulp.task("test", ["sassTestBuild", "scripts"]);

gulp.task("images", ["image"]);

gulp.task("watch", ["observe"]);

gulp.task("watchTest", ["observeTest"]);




