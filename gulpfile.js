
// *    Gulpfile
// * ---------------------
// * This file contains the gulp build-process.
// * ---------------------

// *   Core
// * ---------------------

// * Require gulp modules

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

// * Cache watch & source paths

// * .js
var jsSrcPath     = [
    // * Polyfills first
    "js/app/globals/polyfills/**/*.js",
    // * Declare source-order for modules depending upon each other - this spares us requirejs
    "js/app/globals/eventie.js",
    "js/app/globals/doc-ready.js",
    // * Source-order indpt. rest of globals
    "js/app/globals/**/*.js",
    // * Modules
    "js/app/modules/**/*.js",
    "js/app/main.js"
  ],
    jsWatchPath   = "js/app/**",
// * .scss
    sassSrcPath   = "css/build.scss",
    sassWatchPath = "css/**/*.scss",
// * img
    imgSrcPath    = "img/src/**",
    imgDestPath   = "img/dist",
// * livereload watch
    lrPath        = ["css/dist/global.css", "test/css/**.css", "**/**/*.html", "js/dist/global.js"];


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
    .pipe(gulp.dest("js/dist"))
    .pipe(uglify())
    .pipe(rename("global.min.js"))
    .pipe(gulp.dest("js/dist"));
});

// * jshint
// * 1. jshint with default params
// * ---------------------

gulp.task("jshint", function(){
  gulp.src(jsSrcPath)
    .pipe(jshint())
    .pipe(jshint.reporter('default'));
});


// * scss
// * 1. handle errors
// * 2. sass
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
    .pipe(prefix("last 1 version", "Explorer >=10 Chrome >=30 iOS >=7 Safari >=6.1 Firefox >= 24 Opera >=12.1 Android >=4.4"))
    .pipe(gulp.dest("css/dist"))
    .pipe(cssmin())
    .pipe(rename("global.min.css"))
    .pipe(gulp.dest("css/dist"));
});

// * debug scss
// * A debug build that will spawn unprefixed, prefixed and prefixed & minified files.
// * 1. handle errors
// * 2. sass
// * --> write out
// * 3. prefix
// * --> write out
// * 4. minify
// * --> write out
// * ---------------------

gulp.task("debug-sass", function () {
  gulp.src(sassSrcPath)
    .pipe(plumber())
    .pipe(sass({noCache:true}))
    .pipe(rename("global.css"))
    .pipe(gulp.dest("css/dist/debug/unprefixed"))
    .pipe(prefix("last 1 version", "Explorer >=10 Chrome >=30 iOS >=7 Safari >=6.1 Firefox >= 24 Opera >=12.1 Android >=4.4"))
    .pipe(gulp.dest("css/dist/debug/prefixed"))
    .pipe(cssmin())
    .pipe(rename("global.min.css"))
    .pipe(gulp.dest("css/dist/debug/prefixed"));
});

// * test scss
// * Spawns a css in test/css
// * 1. handle errors
// * 2. sass
// * 3. prefix
// * --> write out
// * ---------------------

gulp.task("test-sass", function () {
  gulp.src(sassSrcPath)
    .pipe(plumber())
    .pipe(sass({noCache:true}))
    .pipe(rename("global.css"))
    .pipe(prefix("last 1 version", "Explorer >=10 Chrome >=30 iOS >=7 Safari >=6.1 Firefox >= 24 Opera >=12.1 Android >=4.4"))
    .pipe(rename("global.css"))
    .pipe(gulp.dest("test/css"));
});

// * img
// * 1. Minify
// * --> write out
// * ---------------------

gulp.task("imgTask", function () {
  gulp.src(imgSrcPath)
    .pipe(imagemin())
    .pipe(gulp.dest(imgDestPath));
});

// * watch
// * 1. Watch SCSS changes
// * 2. Watch JS changes
// * 3. Start livereload server
// * ---------------------

gulp.task('watchTask', function () {
  gulp.watch(sassWatchPath, ["sass"]);
  gulp.watch(jsWatchPath, ["scripts"]);
  gulp.watch(lrPath).on('change', function(file) {
      server.changed(file.path);
  });
});

// * watch tests
// * 1. Watch SCSS changes, output to test-folder
// * 2. Watch JS changes
// * 3. Start livereload server
// * ---------------------

gulp.task('testWatch', function () {
  gulp.watch(sassWatchPath, ["test-sass"]);
  gulp.watch(jsWatchPath, ["scripts"]);
  gulp.watch(lrPath).on('change', function(file) {
      server.changed(file.path);
  });
});

// * Tasks
// * ---------------------

// * Default task

gulp.task("default", ["scripts", "sass"]);

// * Debug task

gulp.task("debug", ["debug-sass", "jshint"]);

// * Hint task

gulp.task("hint", ["scripts", "jshint"]);

// * Image task

gulp.task("images",["imgTask"]);

// * Rebuild tests

gulp.task("test", ["scripts", "test-sass"]);

// * Test watch

gulp.task("test-watch", ["scripts", "test-sass", "testWatch"]);

// * Watch

gulp.task("watch", ["default", "watchTask"]);


