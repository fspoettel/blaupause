
const argv = require('yargs').boolean('p').argv;
const exec = require('child_process').exec;
const gulp = require('gulp');
const gutil = require('gulp-util');
const path = require('path');
const cfg = require('../config').hugo;

const isProduction = argv.p;
const dest = path.join(process.cwd(), cfg.destinationPath);
const src = path.join(process.cwd(), cfg.sourcePath);

const devOpts = !isProduction ? `--buildDrafts=true --baseUrl="${cfg.host}:${cfg.port}/"` : '';
const command = `hugo --config=hugo/config.yaml -s ${src} -d ${dest} ${devOpts}`;

/**
 * @name hugo:build
 * @task Builds the site via Hugo
 */
gulp.task('hugo:build', done =>
  exec(command, (err, stdout, stderr) => {
    gutil.log(gutil.colors.yellow(stdout));
    gutil.log(gutil.colors.red(stderr));
    done(err);
  })
);
