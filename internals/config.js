/**
 * config.js
 * @exports {object} - Configuration
 */
const destinationPath = './public';
const assetPath = `${destinationPath}/assets`;
const sourcePath = 'app';

const hostname = 'localhost';
const port = 3000;

// Browser Sync Configuration
const browserSync = {
  notify: false,
  port: 4000,
  proxy: `${hostname}:${port}`,
};

// Copy Task Configuration
const copy = {
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

// Image Task Configuration
const images = {
  sourcePath: `${sourcePath}/images/**/*.{jpg,jpeg,png,gif}`,
  destinationPath: `${assetPath}/images`,
  // Imagemin-Settings
  settings: {
    progressive: true,
  },
};

// Modernizr Task Configuration
const modernizr = {
  destinationPath: `${assetPath}/scripts/vendor`,
  // Customizr Settings
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

// Script Task Configuration
const scripts = {
  bundles: [`${sourcePath}/scripts/*.js`],
  destinationPath: `${assetPath}/scripts`,
  watch: [`${sourcePath}/scripts/**/*.{js,jsx}`],
  externals: {
    // jquery: 'jQuery',
  },
};

// Nodemon Task Configuration
const server = {
  destinationPath,
  file: './internals/scripts/server.js',
  port,
  // Needed for BrowserSync to work properly with server restarts
  reloadDelay: 500,
  // Disable if you don't want to run an Express-server (e.g. use Apache)
  run: true,
  watch: ['./internals/scripts/server.js'],
};

// Style Task Configuration
const styles = {
  sourcePath: `${sourcePath}/styles/*.{sass,scss}`,
  destinationPath: `${assetPath}/styles`,
  watch: [`${sourcePath}/styles/**/*.{sass,scss}`],
  autoprefixer: {
    browsers: ['last 2 versions', 'ie >= 10', 'Android >= 4.4'],
  },
};

// SVG Task Configuration
const svg = {
  sourcePath: `${sourcePath}/images/**/*.svg`,
  destinationPath: `${assetPath}/images`,
};

module.exports = {
  browserSync,
  copy,
  images,
  modernizr,
  scripts,
  server,
  styles,
  svg,
};
