
const argv = require('yargs').boolean('p').argv;
const exec = require('child_process').exec;
const gulp = require('gulp');
const gutil = require('gulp-util');
const path = require('path');
const config = require('../config').hugo;

const isProduction = argv.p;
const dest = path.join(process.cwd(), config.destinationPath);
const src = path.join(process.cwd(), config.sourcePath);

const devOpts = !isProduction ? `--buildDrafts=true --baseUrl="http://localhost:${config.port}/"` : '';
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
