/**
 * config.js
 * @exports {object} - Configuration
 */

'use strict';

const dest = './public';
const hostname = 'localhost';
const port = 3000;
const src = './_src';

module.exports = {

  browserSync: {
    /** Port for browserSync-proxy */
    port: 4000,
    /** Use 'proxy' to reload existing servers */
    proxy: hostname + ':' + port,
  },

  fonts: {
    src: src + '/fonts/**/*.{ttf,woff,woff2}',
    dest: dest + '/css/fonts',
  },

  images: {
    dest: dest + '/img',
    settings: {
      progressive: true,
    },
    src: src + '/img/*',
  },

  modernizr: {
    dest: dest + '/js/vendor',
    settings: {
      options: [
        'setClasses',
        'addTest',
        'html5printshiv',
        'testProp',
        'fnBind',
      ],
      tests: [],
    },
  },

  scripts: {
    bundles: [src + '/js/*.js'],
    dest: dest + '/js',
    externals: {
      jquery: 'jQuery',
    },
    watch: [src + '/js/**/*.{js,jsx}'],
  },

  server: {
    /** Disable if you don't want to run an Express-server (e.g. use MAMP) */
    run: true,
    /** Needed for clean task & server */
    dest: dest,
    file: 'server.js',
    port: port,
    /** Needed for BrowserSync to work properly with server restarts */
    reloadDelay: 500,
    /** Tell nodemon which directories/files to watch */
    watch: ['server.js'],
  },

  styles: {
    autoprefixer: {
      browsers: ['last 2 versions', 'ie >= 10', 'Android >= 4.0'],
    },
    dest: dest + '/css',
    src: src + '/scss/*.{sass,scss}',
    watch: [src + '/scss/**/*.{sass,scss}'],
  },

  views: {
    dest: dest,
    index: src + '/*.*',
  },
};
