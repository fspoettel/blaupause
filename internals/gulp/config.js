/**
 * config.js
 * @exports {object} - Configuration for Gulp Tasks
 */

const bs = require('browser-sync').create();

const destinationPath = 'public';
const assetPath = `${destinationPath}/static`;
const sourcePath = 'src';

const host = 'localhost';
const port = process.env.PORT || 3000;

const browserSync = {
  instance: bs,
  // browsersync settings
  options: {
    files: false,
    host,
    notify: false,
    port,
    server: destinationPath,
  },
};

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

const hugo = {
  devHost: `http://${host}`,
  destinationPath,
  sourcePath: 'hugo',
  port,
  watch: ['hugo/**/*.{md,yaml}', `${sourcePath}/layouts/**/*.html`],
};

const images = {
  sourcePath: `${sourcePath}/images/**/*.{jpg,jpeg,png,gif}`,
  destinationPath: `${assetPath}/images`,
  // imagemin settings
  settings: {
    progressive: true,
  },
};

const modernizr = {
  destinationPath: `${assetPath}/scripts/vendor`,
  // customizr settings
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

const scripts = {
  // to configure webpack, see `tasks/scripts`
  bundles: [`${sourcePath}/scripts/*.js`],
  destinationPath: `${assetPath}/scripts`,
  watch: [`${sourcePath}/scripts/**/*.{js,jsx}`],
  externals: {
    // jquery: 'jQuery',
  },
};

const styles = {
  sourcePath: `${sourcePath}/styles/*.{sass,scss}`,
  destinationPath: `${assetPath}/styles`,
  watch: [`${sourcePath}/styles/**/*.{sass,scss}`],
  // autoprefixer settings
  autoprefixer: {
    browsers: ['last 2 versions', 'ie >= 10', 'Android >= 4.4'],
  },
};

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
