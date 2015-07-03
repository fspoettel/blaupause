/**
 * styles.js
 * @name - "styles"
 * @task - Compiles, prefixes & minfies SCSS-files
 */

var autoprefixer = require("gulp-autoprefixer");
var browserSync  = require("browser-sync");
var cssmin       = require("gulp-minify-css");
var gulp         = require("gulp");
var reload       = browserSync.reload;
var sass         = require("gulp-sass");
var size         = require("gulp-size");
var sourcemaps   = require("gulp-sourcemaps");

var config       = require("../config").styles;

gulp.task("styles", function() {
  gulp.src(config.src)
    .pipe(sourcemaps.init())
    .pipe(sass().on("error", sass.logError))
    .pipe(autoprefixer({
      browsers: ["last 2 versions", "ie >= 10", "Android >= 4.0"]
    }))
    .pipe(cssmin())
    .pipe(sourcemaps.write("./maps"))
    .pipe(gulp.dest(config.dest))
    .pipe(reload({stream:true}))
    .pipe(size({
      showFiles: true,
      title: "CSS:"
    }))
});
