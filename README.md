# blaupause ![Travis](https://img.shields.io/travis/fspoettel/blaupause.svg?maxAge=2592000?style=flat-square)

[![Greenkeeper badge](https://badges.greenkeeper.io/fspoettel/blaupause.svg)](https://greenkeeper.io/)

> Blaupause is a developer-friendly Hugo starter kit based around npm scripts. It comes es6-ready with helpers for SVG and a basic structure for the html, css and javascript. For a detailed listing of what is included, see "In the box".

## Installation

This project depends on [Hugo](https://gohugo.io) and [Node](http://nodejs.org/) being installed on your machine. To initiate a new site, do:

1. `git clone https://github.com/felics/blaupause project`
2. `cd project`
3. `npm install`
4. `gulp`

## In the box

* [NPM scripts](http://gulpjs.com/) build process
* [BrowserSync](http://www.browsersync.io/) live-reloading environment
* `Developer Mode` with `Sourcemaps` and debugging helpers
* `Production Mode` for optimized builds
* PWA-Support: Offline pre-caching service workers

### JS

* [Webpack](http://webpack.github.io)-builds
* [Babel](babeljs.io) with `babel-env`
* [ESLint](http://eslint.org/)
* [Jest Unit Tests](https://facebook.github.io/jest/)

### CSS

* [Autoprefixer](https://github.com/postcss/autoprefixer)
* [PostCSS-import](http://cssnext.io/)
* [Stylelint](http://stylelint.io/)
* [Sanitize.css](https://github.com/10up/sanitize.css)

### Static Site Generator

* [Hugo](https://gohugo.io) with a minimal `layout`-boilerplate

### Images/SVG

* [svg-sprite](https://github.com/jkphl/svg-sprite)

### Dev Tools

* [editorConfig](http://editorconfig.org/)
* [Travis](https://travis-ci.org) continuous integration
* (Example) Automatic Travis deploy to Github Pages

## Tasks & Configuration

### Basic Configuration

The build configuration is setup in `package.json` and `./hugo/config.yaml`.

``` md
# ./hugo/config.yaml

# The baseurl of the build artifact, only used in production. In development mode, localhost will be used
baseurl: "http://fspoettel.github.io/blaupause/"
```

### Tasks & Task Configuration

Resource tasks have a `compile`, `build` and `watch` task associated with them. `compile` builds the source when developing, while `build` applies further optimizations for production builds via passing `NODE_ENV=production` to the task. `watch` starts a file-watcher and executes `compile` on changes, although you should not need to run these tasks by themselves (use the `npm start`) shortcut).

#### `npm start`

Runs `compile` and starts a BrowserSync instance. Whenever you change a source file, the BrowserSync instance will reload your connected browsers with the changes.

#### `npm run start:staging`

Same as `npm:start`, with production-ready assets (CSS, JS, gzip in Browser-Sync).

#### `npm build`

Builds all content and assets from `src` to `public`. Generates a production-ready build:

 - The "production" baseUrl is applied by Hugo
 - Draft entries are not included
 - Source maps are omitted
 - JS & CSS is uglified, `NODE_ENV=production` is passed to the javascript build
 - Autoprefixer generates prefixes according to `browserlist`
 - A service worker with offline pre-caching is automatically generated
 - Debug console statement called with `utils/debug` are stripped

#### `npm run build:clean`

Removes the `public`-folder (executed automatically when running `npm build` or `npm start`).

#### `npm run lint`

Runs eslint & stylelint against your code.

#### `npm run test`

Runs jest unit tests

## Hugo Partials

#### image/svg

Reference a SVG-symbol from `/static/svg/sprite.symbol.svg` by ID. The SVG build task will look for `.svg`-files in `src/img` and sub-directories. Usage:

``` html
  <div class="icon">{{ partial "image/svg" (dict "id" "the-icon" "class" "optional-class") }}</div>
```
