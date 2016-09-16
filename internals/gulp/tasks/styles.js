const argv = require('yargs').boolean('p').argv;
const autoprefixer = require('autoprefixer');
const browserSync = require('../config').browserSync.instance;
const cssnano = require('cssnano');
const del = require('del');
const gulp = require('gulp');
const gulpif = require('gulp-if');
const postcss = require('gulp-postcss');
const sass = require('gulp-sass');
const sourcemaps = require('gulp-sourcemaps');
const streamSize = require('../util/streamsize');
const cfg = require('../config').styles;

/**
 * @name - styles:build
 * @task - Compiles, prefixes & minfies SCSS-files
 */
const isProduction = argv.p;

const processors = [autoprefixer(cfg.autoprefixer)];

if (isProduction) {
  processors.push(cssnano());
}

gulp.task('styles:build', () =>
  gulp.src(cfg.sourcePath)
    .pipe(gulpif(!isProduction, sourcemaps.init()))
    .pipe(sass().on('error', sass.logError))
    .pipe(postcss(processors))
    .pipe(gulpif(!isProduction, sourcemaps.write('./maps')))
    .pipe(gulpif(isProduction, streamSize('CSS')))
    .pipe(gulp.dest(cfg.destinationPath))
    .pipe(browserSync.stream({ match: '**/*.css' }))
);

/**
 * @name - styles:clean
 * @task - Removes the css build directory
 */
gulp.task('styles:clean', () =>
  del([`${cfg.destinationPath}/**`]));
