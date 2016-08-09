
const gulp = require('gulp');
const del = require('del');
const streamSize = require('../util/streamsize');
const svgSprite = require('gulp-svg-sprite');
const config = require('../config').svg;

const svgSpriteConfig = {
  transform: ['svgo'],
  mode: {
    symbol: {
      dest: '.',
      sprite: 'sprite.symbol.svg',
    },
  },
};

/**
 * @name - svg:build
 * @task - Builds & optimizes a SVG sprite from a source folder of SVG files
 */
gulp.task('svg:build', () =>
  gulp.src(config.sourcePath)
    .pipe(svgSprite(svgSpriteConfig))
    .pipe(streamSize('SVG'))
    .pipe(gulp.dest(config.destinationPath))
);

/**
 * @name - svg:clean
 * @task - Removes the svg build directory
 */
gulp.task('svg:clean', () =>
  del([config.destinationPath]));
