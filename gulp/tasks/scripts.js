/**
 * scripts.js
 * @name - "scripts"
 * @task - Compiles & uglifies AMD modules
 */

"use strict";

const gulp    = require("gulp");
const named   = require("vinyl-named");
const reload  = require("browser-sync").reload;
const size    = require("gulp-size");
const uglify  = require("gulp-uglify");
const webpack = require("webpack-stream");
const pack    = require("webpack"); // Reference for plugins

const config  = require("../config").scripts;

gulp.task("scripts", function() {
  return gulp.src(config.bundles)
    .pipe(named())
    .pipe(webpack({
      cache: true,
      devtool: "#source-map",
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
