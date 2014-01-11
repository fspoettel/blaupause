// Require plugins
var lr           = require('tiny-lr'),
    gulp         = require('gulp'),
    rename       = require("gulp-rename"),
    concat       = require('gulp-concat'),
    uglify       = require('gulp-uglify'),
    sass         = require('gulp-ruby-sass'),
    prefix       = require('gulp-autoprefixer'),
    cssmin       = require('gulp-minify-css'),
    imagemin     = require ('gulp-imagemin'),
    livereload   = require('gulp-livereload'),
    server       = lr();

// Concat & Minify JS
gulp.task('scripts', function(){
    gulp.src(['js/lib/plugins/**','js/global.js'])
        .pipe(concat('global.js'))
        .pipe(gulp.dest('js/build'))
        .pipe(uglify())
        .pipe(rename('global.min.js'))
        .pipe(gulp.dest('js/build'))
        .pipe(livereload(server));
});

// Build, autoprefix & minify CSS
gulp.task('sass', function () {
    gulp.src('css/build.scss')
        .pipe(sass({noCache:true,quiet:true}))
        .pipe(rename('global.css'))
        .pipe(gulp.dest('css/build/unprefixed'))
        .pipe(prefix("last 2 versions", "> 1%", "ie 8"))
        .pipe(gulp.dest('css/build/prefixed'))
        .pipe(cssmin())
        .pipe(rename('global.min.css'))
        .pipe(gulp.dest('css/build/prefixed'))
        .pipe(livereload(server));
});

// Minify images
gulp.task('images', function () {
    gulp.src('img/*')
        .pipe(imagemin())
        .pipe(gulp.dest('img'))
        .pipe(livereload(server));
});

// Reload when HTML 
gulp.task('html', function () {
    gulp.src(['templates/**','layouts/**','partials/**'])
        .pipe(livereload(server));
});

// Run Server
gulp.task('livereload', function(){  
    server.listen(35729, function(err){
        if(err) return console.log(err);
    });
});

// Default
gulp.task('default', function(){
    // Run Task
    gulp.run('scripts', 'sass', 'images','html', 'livereload');

    // Watch & build .scss
    gulp.watch('css/**/*.scss' , function(ev){
        gulp.run('sass')
    });

    // Watch & build js
    gulp.watch(['js/global.js', 'js/lib/plugins/**'], function(ev){
        gulp.run('scripts')
    });

    // Watch & minify images
    gulp.watch(['img/**'], function(ev){
        gulp.run('images')
    });

    // Watch & reload HTML (needs testing)
    gulp.watch(['templates/**','layouts/**','partials/**'], function(ev){
        gulp.run('html')
    });
});