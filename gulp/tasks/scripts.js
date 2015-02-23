/**
 * scripts.js
 * @name - "scripts"
 * @task - Compiles & uglifies AMD modules
 */

var gulp        = require("gulp"),
    webpack     = require("gulp-webpack"),
    uglify      = require("gulp-uglify"),
    rename      = require("gulp-rename"),
    size        = require("gulp-size"),
    config      = require("../config").scripts;
    reload             = require("browser-sync").reload,

gulp.task("scripts", function(){
  return gulp.src(config.entry)
    .pipe(webpack())
    .pipe(rename({
      basename: config.name,
      extname: ".js"
    }))
    .pipe(gulp.dest(config.dest))
    .pipe(uglify())
    .pipe(rename({suffix: ".min"}))
    .pipe(gulp.dest(config.dest))
    .pipe(size({
        title: "js:"
    }))
    .pipe(reload({stream:true}));
});
