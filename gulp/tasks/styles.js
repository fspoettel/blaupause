/**
 * styles.js
 * @name - "styles"
 * @task - Compiles, prefixes & minfies SCSS-files
 */

var gulp         = require("gulp"),
    scss         = require("gulp-ruby-sass"),
    autoprefixer = require("gulp-autoprefixer"),
    rename       = require("gulp-rename"),
    cssmin       = require("gulp-minify-css"),
    browserSync  = require("browser-sync"),
    reload       = browserSync.reload,
    size         = require("gulp-size"),
    config       = require("../config").styles;

gulp.task("styles", function(){
  return scss(config.entry, {
      sourcemap: false
    })
    .pipe(autoprefixer({
      browsers: ["last 2 versions", "ie >= 10", "Android >= 4.0"]
    }))
    .pipe(rename({
      basename: config.name,
      extname: ".css"
    }))
    .pipe(gulp.dest(config.dest))
    .pipe(cssmin())
    .pipe(rename({suffix: ".min"}))
    .pipe(gulp.dest(config.dest))
    .pipe(reload({stream:true}))
    .pipe(size({
        title: "css:"
    }))
});
