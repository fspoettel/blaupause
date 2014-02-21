
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
    uglify        = require("gulp-uglify");

    livereload    = require("gulp-livereload"),
    server        = livereload();

// Cache watch & source paths
var jsSrcPath     = ["js/modules/**/*.js", "js/modules/*.js", "js/global.js"],
    jsWatchPath   = jsSrcPath,
    sassSrcPath   = "css/build.scss",
    sassWatchPath = "css/**/*.scss",
    imgPaths      = "img/src/**",
    lrPath        = ["css/build/prefixed/global.css","**/**/*.html","js/build/global.min.js"];


// *    Gulp tasks
// * ---------------------

// JS
// * 1. js-hint
// * 2. concat
// * --> write out
// * 3. uglify
// * 4. rename
// * --> write out
// * ---------------------

gulp.task("scripts", function(){
  gulp.src(jsSrcPath)
    .pipe(jshint())
    .pipe(jshint.reporter('default'))
    .pipe(concat("global.js"))
    .pipe(gulp.dest("js/build"))
    .pipe(uglify())
    .pipe(rename("global.min.js"))
    .pipe(gulp.dest("js/build"));
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

gulp.task("images", function () {
  gulp.src(imgPaths)
    .pipe(imagemin())
    .pipe(gulp.dest("img/opti"));
});

// * Watch
// * ---------------------

gulp.task('watch', function () {
  gulp.watch(sassWatchPath, ["sass"]);
  gulp.watch(jsWatchPath, ["scripts"]);
  gulp.watch(imgPaths, ["images"]);
  gulp.watch(lrPath).on('change', function(file) {
      server.changed(file.path);
  });
});

// * Tasks
// * ---------------------

gulp.task("default", ["scripts","sass","images","watch"]);
