
const gulp = require('gulp');
const svgSprite = require('gulp-svg-sprite');
const config = require('../config').svg;

gulp.task('svg', () => {
  return gulp.src(config.src)
    .pipe(svgSprite({
      transform: ['svgo'],
      mode: {
        symbol: {
          dest: '.',
          sprite: 'sprite.symbol.svg'
        },
      },
    }))
    .pipe(gulp.dest(config.dest));
});
