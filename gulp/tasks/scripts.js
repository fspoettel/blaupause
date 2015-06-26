/**
 * scripts.js
 * @name - "scripts"
 * @task - Compiles & uglifies AMD modules
 */

var gulp    = require("gulp");
var webpack = require("gulp-webpack");
var uglify  = require("gulp-uglify");
var rename  = require("gulp-rename");
var size    = require("gulp-size");
var named   = require("vinyl-named");
var reload  = require("browser-sync").reload;
var config  = require("../config").scripts;

gulp.task("scripts", function() {
  return gulp.src(config.bundles)
    .pipe(named())
    .pipe(webpack({
      cache: true,
      module: {
        loaders: [
          { test: /\.(js|jsx)$/, exclude: [/node_modules/, /bower_components/], loaders: ["babel-loader"]}
        ]
      }
    }))
    .pipe(gulp.dest(config.dest))
    .pipe(uglify())
    .pipe(rename({suffix: ".min"}))
    .pipe(gulp.dest(config.dest))
    .pipe(size({
      title: "JS:",
      showFiles: true
    }))
    .pipe(reload({stream:true}));
});
