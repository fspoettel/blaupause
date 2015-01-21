/**
 * scripts.js
 * @name - "scripts"
 * @task - Compiles & uglifies AMD modules
 */

var gulp        = require("gulp"),
    webpack     = require("gulp-webpack"),
    uglify      = require("gulp-uglify"),
    rename      = require("gulp-rename"),
    browserSync = require("browser-sync"),
    reload      = browserSync.reload,
    size        = require("gulp-size"),
    config      = require("../config").scripts;

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
    .pipe(reload({stream:true}))
    .pipe(size({
        title: "js:"
    }))
});
