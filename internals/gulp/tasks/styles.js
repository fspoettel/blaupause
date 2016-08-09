
const argv = require('yargs').boolean('p').argv;
const autoprefixer = require('autoprefixer');
const browserSync = require('../config').browserSync;
const cssnano = require('cssnano');
const del = require('del');
const gulp = require('gulp');
const gulpif = require('gulp-if');
const postcss = require('gulp-postcss');
const sass = require('gulp-sass');
const sourcemaps = require('gulp-sourcemaps');
const streamSize = require('../util/streamsize');
const config = require('../config').styles;

const isProduction = argv.p;

const processors = [autoprefixer(config.autoprefixer)];

if (isProduction) {
  processors.push(cssnano());
}

/**
 * @name - styles:build
 * @task - Compiles, prefixes & minfies SCSS-files
 */
gulp.task('styles:build', () =>
  gulp.src(config.sourcePath)
    .pipe(gulpif(!isProduction, sourcemaps.init()))
    .pipe(sass().on('error', sass.logError))
    .pipe(postcss(processors))
    .pipe(gulpif(!isProduction, sourcemaps.write('./maps')))
    .pipe(gulpif(isProduction, streamSize('CSS')))
    .pipe(gulp.dest(config.destinationPath))
    .pipe(browserSync.stream({ match: '**/*.css' }))
);

/**
 * @name - styles:clean
 * @task - Removes the css build directory
 */
gulp.task('styles:clean', () =>
  del([`${config.destinationPath}/**`]));
