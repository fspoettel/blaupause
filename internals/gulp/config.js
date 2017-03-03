/**
 * config.js
 * @exports {Object} - Configuration for Gulp Tasks
 */
const BrowserSync = require('browser-sync');

/**
 * Sets the target path for the build
 * @type {String}
 */
const destinationPath = 'public';

/**
 * Sets the target path for static assets (scripts, styles, images, svg)
 * @type {String}
 */
const assetPath = `${destinationPath}/static`;

/**
 * Source path of the site template
 * @type {String}
 */
const sourcePath = 'src';

/**
 * Host that BrowserSync serves from
 * @type {String}
 */
const host = 'localhost';

/**
 * Port that BrowserSync serves from
 * @type {Number}
 */
const port = process.env.PORT || 3000;

/**
 * BrowserSync Config
 * `options` will be passed to BrowserSync instance
 * task: `tasks/watch.js` (other tasks may use browserSync instance)
 * @type {Object}
 */
const browserSync = {
  instance: BrowserSync.create(),
  settings: {
    files: false,
    host,
    notify: false,
    port,
    server: destinationPath,
  },
};

/**
 * Copy Config
 * each bundle should be set up as an object with `sourcePath` & `destinationPath`. Globbing supported
 * task: `tasks/copy.js`
 * @type {Object}
 */
const copy = {
  // each bundle is an object consisting of source-glob and destination-path
  bundles: [
    {
      sourcePath: `${sourcePath}/webfonts/*.{ttf,woff,woff2}`,
      destinationPath: `${assetPath}/styles/webfonts`,
    },
    {
      sourcePath: `${sourcePath}/*.*`,
      destinationPath,
    },
  ],
};

/**
 * Hugo Config
 * Task: `tasks/hugo.js`
 * @type {Object}
 */
const hugo = {
  devHost: `http://${host}`,
  destinationPath,
  sourcePath: 'hugo',
  port,
  watch: ['hugo/**', `${sourcePath}/layouts/**/*.html`],
};

/**
 * Images Config
 * `options` will be passed to imagemin
 * Task: `tasks/images.js`
 * @type {Object}
 */
const images = {
  sourcePath: `${sourcePath}/images/**/*.{jpg,jpeg,png,gif}`,
  destinationPath: `${assetPath}/images`,
  settings: {
    progressive: true,
  },
};

/**
 * Modernizr Settings
 * `tests` specify the modernizr tests to run
 * `settings` will be passed to customizr
 * task: `tasks/modernizr.js`
 * @type {Object}
 */
const modernizr = {
  destinationPath: `${assetPath}/scripts/vendor`,
  fileName: 'modernizr-custom.js',
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
};

/**
 * Scripts Config
 * uses webpack fur bundling. use the task to configure webpack
 * task: `tasks/scripts.js`
 * @type {Object}
 */
const scripts = {
  bundles: [`${sourcePath}/scripts/*.js`],
  destinationPath: `${assetPath}/scripts`,
  watch: [`${sourcePath}/scripts/**/*.{js,jsx}`],
  externals: {
    // jquery: 'jQuery',
  },
};

/**
 * Styles Config
 * `autoprefixer` will be passed to autoprefixer
 * task: `tasks/styles.js`
 * @type {Object}
 */
const styles = {
  sourcePath: `${sourcePath}/styles/*.{sass,scss}`,
  destinationPath: `${assetPath}/styles`,
  watch: [`${sourcePath}/styles/**/*.{sass,scss}`],
  autoprefixer: {
    browsers: ['last 2 versions', 'ie >= 10', 'Android >= 4.4'],
  },
};

/**
 * SVG Config
 * task: `tasks/svg.js`
 * @type {Object}
 */
const svg = {
  sourcePath: `${sourcePath}/images/**/*.svg`,
  destinationPath: `${assetPath}/svg`,
};

module.exports = {
  browserSync,
  copy,
  destinationPath,
  hugo,
  images,
  modernizr,
  port,
  scripts,
  styles,
  svg,
};
