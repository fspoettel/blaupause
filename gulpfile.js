// Require plugins
var gulp         = require("gulp"),
    rename       = require("gulp-rename"),
    concat       = require("gulp-concat"),
    uglify       = require("gulp-uglify"),
    sass         = require("gulp-ruby-sass"),
    prefix       = require("gulp-autoprefixer"),
    cssmin       = require("gulp-minify-css"),
    plumber      = require("gulp-plumber"),
    imagemin     = require ("gulp-imagemin"),
    tinylr       = require("tiny-lr"),
    server       = tinylr();

// Concat & Minify JS
gulp.task("scripts", function(){
    gulp.src(["js/lib/plugins/**/*.js","js/user/**/*.js", "js/global.js"])
        .pipe(concat("global.js"))
        .pipe(gulp.dest("js/build"))
        .pipe(uglify())
        .pipe(rename("global.min.js"))
        .pipe(gulp.dest("js/build"))
});

// Build, autoprefix & minify CSS
gulp.task("sass", function () {
    gulp.src("css/build.scss")
        .pipe(plumber())
        .pipe(sass({noCache:true}))
        .pipe(rename("global.css"))
        .pipe(gulp.dest("css/build/unprefixed"))
        .pipe(prefix("last 2 versions", "> 1%"))
        .pipe(gulp.dest("css/build/prefixed"))
        .pipe(cssmin())
        .pipe(rename("global.min.css"))
        .pipe(gulp.dest("css/build/prefixed"))
});

// Minify images
gulp.task("images", function () {
    gulp.src("img/src/*")
        .pipe(imagemin())
        .pipe(gulp.dest("img/opti"))
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
    gulp.watch("css/**/*.scss" , function(ev){
        gulp.run("sass");
    });

    // Watch & build js
    gulp.watch("js/**/*.js", function(ev){
        gulp.run("scripts")
    });

    // Watch & minify images
    gulp.watch(["img/src/*"], function(ev){
        gulp.run("images")
    });

    // Trigger reload
    gulp.watch(["css/build/prefixed/global.min.css","**/*.html"], function (e) {
    server.changed({
        body: {
            files: [e.path]
        }
    });
});


});

// Default
gulp.task("default", function(){
    // Run Task
    gulp.run("scripts", "sass", "images");
    gulp.run("watch");
});