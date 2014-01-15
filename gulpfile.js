// Require plugins
var gulp         = require('gulp'),
    rename       = require("gulp-rename"),
    concat       = require('gulp-concat'),
    uglify       = require('gulp-uglify'),
    sass         = require('gulp-ruby-sass'),
    prefix       = require('gulp-autoprefixer'),
    cssmin       = require('gulp-minify-css'),
    imagemin     = require ('gulp-imagemin');

// Concat & Minify JS
gulp.task('scripts', function(){
    gulp.src(['js/lib/plugins/*.js','js/user/*.js', 'js/global.js'])
        .pipe(concat('global.js'))
        .pipe(gulp.dest('js/build'))
        .pipe(uglify())
        .pipe(rename('global.min.js'))
        .pipe(gulp.dest('js/build'))
});

// Build, autoprefix & minify CSS
gulp.task('sass', function () {
    gulp.src('css/build.scss')
        .pipe(sass({noCache:true,debugInfo:true}))
        .pipe(rename('global.css'))
        .pipe(gulp.dest('css/build/unprefixed'))
        .pipe(prefix("last 2 versions", "> 1%", "ie 8"))
        .pipe(gulp.dest('css/build/prefixed'))
        .pipe(cssmin())
        .pipe(rename('global.min.css'))
        .pipe(gulp.dest('css/build/prefixed'))
});

// Minify images
gulp.task('images', function () {
    gulp.src('img/*')
        .pipe(imagemin())
        .pipe(gulp.dest('img'))
});

// Default
gulp.task('default', function(){
    // Run Task
    gulp.run('scripts', 'sass', 'images');

    // Watch & build .scss
    gulp.watch('css/**/*.scss' , function(ev){
        gulp.run('sass')
    });

    // Watch & build js
    gulp.watch(['js/global.js', 'js/lib/plugins/*.js', 'js/user/*.js'], function(ev){
        gulp.run('scripts')
    });

    // Watch & minify images
    gulp.watch(['img/**'], function(ev){
        gulp.run('images')
    });
});