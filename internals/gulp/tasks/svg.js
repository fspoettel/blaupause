
const gulp = require('gulp');
const del = require('del');
const streamSize = require('../util/streamsize');
const svgSprite = require('gulp-svg-sprite');
const cfg = require('../config').svg;

/**
 * @name - svg:build
 * @task - Builds & optimizes a SVG sprite from a source folder of SVG files
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
