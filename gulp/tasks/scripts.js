/**
 * scripts.js
 * @name - "scripts"
 * @task - Compiles & uglifies AMD modules
 */

var gulp    = require("gulp");
var named   = require("vinyl-named");
var reload  = require("browser-sync").reload;
var size    = require("gulp-size");
var uglify  = require("gulp-uglify");
var webpack = require("webpack-stream");
var pack    = require("webpack"); // Reference for plugins

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
      },
      plugins: [
        new pack.optimize.DedupePlugin(),
        new pack.optimize.UglifyJsPlugin({
          compress: {
            warnings: false
          }
        })
      ]
    }))
    .pipe(gulp.dest(config.dest))
    .pipe(size({
      title: "JS:",
      showFiles: true
    }))
    .pipe(reload({stream:true}));
});
