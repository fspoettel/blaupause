const argv = require('yargs').boolean('p').argv;
const exec = require('child_process').exec;
const gulp = require('gulp');
const gutil = require('gulp-util');
const path = require('path');
const cfg = require('../config').hugo;

/**
 * @name hugo:build
 * @task builds the site via Hugo
 */

/**
 * Destination Path
 * @type {String}
 */
const dest = path.join(process.cwd(), cfg.destinationPath);

/**
 * Source Path
 * @type {String}
 */
const src = path.join(process.cwd(), cfg.sourcePath);

/**
 * Production Mode
 * if set, the site will be rendered without drafts and with the production URL set in `hugo/config.yaml`
 * @type {Boolean}
 */
const isProduction = argv.p;

/**
 * DevMode Config
 * @type {String}
 */
const devOpts = !isProduction ? `--buildDrafts=true --baseUrl="${cfg.devHost}:${cfg.port}/"` : '';

/**
 * Command that will be executed by `exec()`
 * @type {String}
 */
const command = `hugo --config=hugo/config.yaml -s ${src} -d ${dest} ${devOpts}`;

gulp.task('hugo:build', done =>
  exec(command, (err, stdout) => {
    gutil.log(gutil.colors.yellow(stdout));
    done();
  })
);
