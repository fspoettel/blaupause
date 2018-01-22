# blaupause ![Travis](https://img.shields.io/travis/fspoettel/blaupause.svg?maxAge=2592000?style=flat-square)

[![Greenkeeper badge](https://badges.greenkeeper.io/fspoettel/blaupause.svg)](https://greenkeeper.io/)

> Blaupause is a developer-friendly Hugo starter kit based around npm scripts. It comes es6-ready with helpers for SVG and a basic structure for the html, css and javascript. For a detailed listing of what is included, see "In the box".

## Installation

This project depends on [Node](http://nodejs.org/) being installed on your machine. To initiate a new site, do:

1. `git clone https://github.com/felics/blaupause project`
1. `cd project`
1. `npm install`
1. `npm start`

## In the box

* NPM scripts build process
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

## Tasks & Configuration

### Basic Configuration

The build configuration is setup in `package.json` and `./hugo/config.yaml`.

``` md
# ./hugo/config.yaml

# The baseurl of the build artifact, only used in production. In development mode, localhost will be used
baseurl: "https://blaupause.felics.me"
```

### Tasks & Task Configuration

Tasks are managed via [nps](https://github.com/kentcdodds/nps) and live in `package-scripts.js`.

#### `npm start`

Compiles all assets and starts a BrowserSync instance. Whenever you change a source file, the BrowserSync instance will reload your connected browsers with the changes. Source-Maps are enabled in this environment.

#### `npm run start:staging`

Same as `npm:start`, but with production-ready assets. No sourcemaps, resources are optimized and gzipped.

#### `npm run build`

Builds all content and assets from `src` to `public`. Generates a production-ready build:

* The "production" baseUrl is applied by Hugo
* Draft entries are not included
* Source maps are omitted
* JS & CSS is minified, `NODE_ENV=production` is passed to the javascript build
* A service worker with offline pre-caching is automatically generated
* Debug console statement called with `utils/debug` are stripped

#### `npm run build:clean`

Removes the `public`-folder (executed automatically when running `npm run build` or `npm start`).

#### `npm run lint`

Runs eslint & stylelint against your code.

#### `npm run test`

Runs jest unit tests

## Hugo Partials

### image/svg

Reference a SVG-symbol from `/static/svg/sprite.symbol.svg` by ID. The SVG build task will look for `.svg`-files in `src/img` and sub-directories. Usage:

``` html
  <div class="icon">{{ partial "media/svg" (dict "id" "the-icon" "class" "optional-class") }}</div>
```

## Deploying to Netlify

Netlify is the easiest deploy option for blaupause. To get started, you have to:

* Push your clone to your own GitHub repository.
* [Create a new site on Netlify](https://app.netlify.com/start) and link the repository.

Now Netlify will build and deploy your site whenever you push to git.

You can also click this button:

[![Deploy to Netlify](https://www.netlify.com/img/deploy/button.svg)](https://app.netlify.com/start/deploy?repository=https://github.com/fspoettel/blaupause)

It is also possible to roll your own deploy with CircleCI and AWS as an alternative.

## Adding Netlify CMS

To add Netlify CMS, add the following files to the repo and configure according to the netlify-cms docs.

### /hugo/static/admin/index.html

``` html
<!doctype html>
<html>
<head>
  <meta charset="utf-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Content Manager</title>

  <!-- Include the styles for the Netlify CMS UI, after your own styles -->
  <link rel="stylesheet" href="https://unpkg.com/netlify-cms@^0.7.0/dist/cms.css" />

</head>
<body>
  <!-- Include the script that builds the page and powers Netlify CMS -->
  <script src="https://unpkg.com/netlify-cms@^0.7.0/dist/cms.js"></script>
</body>
</html>
```

### /hugo/static/admin/config.yml

``` yaml
backend:
  name: github # git-gateway if using Netlify Identity integration
  repo:  fspoettel/blaupause
  branch: master
  base_url: # See https://github.com/vencax/netlify-cms-github-oauth-provider or remove if using Netlify Identity
publish_mode: editorial_workflow
media_folder: "hugo/static/assets"
public_folder: "/assets"
collections: # See netlify-cms docs
```
