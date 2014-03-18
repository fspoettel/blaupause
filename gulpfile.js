
// *    Gulpfile
// * ---------------------
// * This file contains the gulp build-process.
// * ---------------------

// *   Core
// * ---------------------

// Require gulp modules
var gulp          = require("gulp"),
    concat        = require("gulp-concat"),
    cssmin        = require("gulp-minify-css"),
    imagemin      = require("gulp-imagemin"),
    jshint        = require("gulp-jshint"),
    plumber       = require("gulp-plumber"),
    prefix        = require("gulp-autoprefixer"),
    rename        = require("gulp-rename"),
    sass          = require("gulp-ruby-sass"),
    uglify        = require("gulp-uglify"),
    livereload    = require("gulp-livereload"),
    server        = livereload();

// Cache watch & source paths
var jsSrcPath     = ["js/modules/polyfills/**/*.js", "js/modules/globals/**/*.js", "js/modules/plugins/**/*.js", "js/global.js"],
    jsWatchPath   = jsSrcPath,
    sassSrcPath   = "css/build.scss",
    sassWatchPath = "css/**/*.scss",
    imgSrcPath    = "img/src/**",
    imgDestPath   = "img/opti",
    lrPath        = ["css/build/prefixed/global.css","**/**/*.html","js/build/global.min.js"];


// *    Gulp tasks
// * ---------------------

// js
// * 1. concat
// * --> write out
// * 2. uglify
// * 3. rename
// * --> write out
// * ---------------------

gulp.task("scripts", function(){
  gulp.src(jsSrcPath)
    .pipe(concat("global.js"))
    .pipe(gulp.dest("js/build"))
    .pipe(uglify())
    .pipe(rename("global.min.js"))
    .pipe(gulp.dest("js/build"));
});

// jshint
// * 1. jshint with default params
// * ---------------------

gulp.task("jshint", function(){
  gulp.src(jsSrcPath)
    .pipe(jshint())
    .pipe(jshint.reporter('default'));
});


// CSS
// * 1. handle errors
// * 2. sass
// * --> write out
// * 3. prefix
// * --> write out
// * 4. minify
// * --> write out
// * ---------------------

gulp.task("sass", function () {
  gulp.src(sassSrcPath)
    .pipe(plumber())
    .pipe(sass({noCache:true}))
    .pipe(rename("global.css"))
    .pipe(gulp.dest("css/build/unprefixed"))
    .pipe(prefix("last 1 version", "Explorer >=10 Chrome >=30 iOS >=7 Safari >=6.1 Firefox >= 24 Opera >=12.1 Android >=4.4"))
    .pipe(gulp.dest("css/build/prefixed"))
    .pipe(cssmin())
    .pipe(rename("global.min.css"))
    .pipe(gulp.dest("css/build/prefixed"));
});

// * Images
// * 1. Minify
// * --> write out
// * ---------------------

gulp.task("imgTask", function () {
  gulp.src(imgSrcPath)
    .pipe(imagemin())
    .pipe(gulp.dest(imgDestPath));
});

// * Watch
// * 1. Watch SCSS changes
// * 2. Watch JS changrs
// * 3. Start livereload server
// * ---------------------

gulp.task('watchTask', function () {
  gulp.watch(sassWatchPath, ["sass"]);
  gulp.watch(jsWatchPath, ["scripts"]);
  gulp.watch(lrPath).on('change', function(file) {
      server.changed(file.path);
  });
});

// * Tasks
// * ---------------------

gulp.task("default", ["scripts", "sass"]);

gulp.task("watch", ["default", "watchTask"]);

gulp.task("hint", ["scripts", "jshint"]);

gulp.task("images",["imgTask"]);

