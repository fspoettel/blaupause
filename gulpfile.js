// Require plugins
var gulp          = require("gulp"),
    rename        = require("gulp-rename"),
    concat        = require("gulp-concat"),
    uglify        = require("gulp-uglify"),
    sass          = require("gulp-ruby-sass"),
    prefix        = require("gulp-autoprefixer"),
    cssmin        = require("gulp-minify-css"),
    plumber       = require("gulp-plumber"),
    imagemin      = require ("gulp-imagemin"),
    tinylr        = require("tiny-lr"),
    server        = tinylr();

var jsSrcPath     = ["js/modules/*.js", "js/modules/**/*.js", "js/global.js"],
    jsWatchPath   = jsSrcPath,
    sassSrcPath   = "css/build.scss",
    sassWatchPath = "css/**/*.scss",
    imgPaths      = "img/src/*",
    lrPath        = ["css/build/prefixed/global.min.css","**/*.html","js/build/global.min.js"];

// Concat & Minify JS
gulp.task("scripts", function(){
  gulp.src(jsSrcPath)
    .pipe(concat("global.js"))
    .pipe(gulp.dest("js/build"))
    .pipe(uglify())
    .pipe(rename("global.min.js"))
    .pipe(gulp.dest("js/build"));
});

// Build, autoprefix & minify CSS
gulp.task("sass", function () {
  gulp.src(sassSrcPath)
    .pipe(plumber())
    .pipe(sass({noCache:true}))
    .pipe(rename("global.css"))
    .pipe(gulp.dest("css/build/unprefixed"))
    .pipe(prefix("last 2 versions", "> 1%"))
    .pipe(gulp.dest("css/build/prefixed"))
    .pipe(cssmin())
    .pipe(rename("global.min.css"))
    .pipe(gulp.dest("css/build/prefixed"));
});

// Minify images
gulp.task("images", function () {
  gulp.src(imgPaths)
    .pipe(imagemin())
    .pipe(gulp.dest("img/opti"));
});

// Watch
gulp.task('watch', function () {

// Server
server.listen(35729, function (err) {
  if (err){
    return console.log(err);
  }
});

// Watch & build .scss
gulp.watch(sassWatchPath , function(ev){
  gulp.run("sass");
});

// Watch & build js
gulp.watch(jsWatchPath, function(ev){
  gulp.run("scripts")
});

// Watch & minify images
gulp.watch(imgPaths, function(ev){
  gulp.run("images")
});

// Trigger reload
gulp.watch(lrPath, function (e) {
  server.changed({
    body: {
      files: [e.path]
    }
  });
});


});

// Default
gulp.task("default", function() {
  // Run Task
  gulp.run("scripts", "sass", "images","watch");
});
