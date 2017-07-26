const gulp = require('gulp');
const revReplace = require('gulp-rev-replace');
const cfg = require('../config');

gulp.task('hash-replace', () => {
  const manifest = gulp.src(`${cfg.assetPath}/rev-manifest.json`);
  return gulp.src([
    `${cfg.destinationPath}/**/*.html`,
    `${cfg.destinationPath}/**/*.xml`,
    `${cfg.destinationPath}/**/*.json`,
    `${cfg.destinationPath}/**/*.css`,
    `${cfg.destinationPath}/**/*.js`,
    `!${cfg.assetPath}/rev-manifest.json`,
  ])
    .pipe(revReplace({ manifest, replaceInExtensions: ['.js', '.css', '.html', '.xml', '.json'] }))
    .pipe(gulp.dest(cfg.destinationPath));
});
