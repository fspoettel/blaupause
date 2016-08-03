/**
 * svg.js
 * @name - 'svg'
 * @task - Generates a svg.symbol.sprite
 */
const gulp = require('gulp');
const streamSize = require('./util/streamsize');
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

gulp.task('svg:build', () =>
  gulp.src(config.sourcePath)
    .pipe(svgSprite(svgSpriteConfig))
    .pipe(streamSize('SVG'))
    .pipe(gulp.dest(config.destinationPath))
);
