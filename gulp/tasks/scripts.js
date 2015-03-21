/**
 * scripts.js
 * @name - "scripts"
 * @task - Compiles & uglifies AMD modules
 */

var gulp               = require("gulp"),
    webpack            = require("gulp-webpack"),
    uglify             = require("gulp-uglify"),
    rename             = require("gulp-rename"),
    size               = require("gulp-size"),
    named              = require("vinyl-named"),
    reload             = require("browser-sync").reload,
    config             = require("../config").scripts;

gulp.task("scripts", function(){
  return gulp.src(config.bundles)
    .pipe(named())
    .pipe(webpack({
      cache: true,
      module: {
        loaders: [
          { test: /\.(js|jsx)$/, exclude: [/node_modules/, /bower_components/], loaders: ["jsx-loader", "babel-loader"]}
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
