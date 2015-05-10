/**
 * styles.js
 * @name - "styles"
 * @task - Compiles, prefixes & minfies SCSS-files
 */

var gulp         = require("gulp"),
    sass         = require("gulp-sass"),
    autoprefixer = require("gulp-autoprefixer"),
    rename       = require("gulp-rename"),
    cssmin       = require("gulp-minify-css"),
    browserSync  = require("browser-sync"),
    reload       = browserSync.reload,
    size         = require("gulp-size"),
    plumber      = require("gulp-plumber"),
    config       = require("../config").styles;

gulp.task("styles", function(){
  return gulp.src(config.src)
    .pipe(plumber())
    .pipe(sass.sync().on('error', sass.logError))
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
