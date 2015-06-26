/**
 * styles.js
 * @name - "styles"
 * @task - Compiles, prefixes & minfies SCSS-files
 */

var gulp         = require("gulp");
var sass         = require("gulp-sass");
var autoprefixer = require("gulp-autoprefixer");
var rename       = require("gulp-rename");
var cssmin       = require("gulp-minify-css");
var browserSync  = require("browser-sync");
var reload       = browserSync.reload;
var size         = require("gulp-size");
var config       = require("../config").styles;

gulp.task("styles", function() {
  gulp.src(config.src)
    .pipe(sass().on("error", sass.logError))
    .pipe(autoprefixer({
      browsers: ["last 2 versions", "ie >= 10", "Android >= 4.0"]
    }))
    .pipe(gulp.dest(config.dest))
    .pipe(cssmin())
    .pipe(rename({suffix: ".min"}))
    .pipe(gulp.dest(config.dest))
    .pipe(reload({stream:true}))
    .pipe(size({
      showFiles: true,
      title: "CSS:"
    }))
});
