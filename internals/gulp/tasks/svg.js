
const gulp = require('gulp');
const del = require('del');
const svgSprite = require('gulp-svg-sprite');
const cfg = require('../config').svg;
const streamSize = require('../util/streamsize');

/**
 * @name - svg:build
 * @task - builds & optimizes a SVG sprite from a source folder of SVG files
 */

/**
 * Spriting Config for svgo
 * @type {Object}
 */
const svgSpriteConfig = {
  transform: ['svgo'],
  mode: {
    symbol: {
      dest: '.',
      sprite: 'sprite.symbol.svg',
    },
  },
};

gulp.task('svg:build', () =>
  gulp.src(cfg.sourcePath)
    .pipe(svgSprite(svgSpriteConfig))
    .pipe(streamSize('SVG'))
    .pipe(gulp.dest(cfg.destinationPath))
);

/**
 * @name - svg:clean
 * @task - Removes the svg build directory
 */
gulp.task('svg:clean', () =>
  del([cfg.destinationPath]));
