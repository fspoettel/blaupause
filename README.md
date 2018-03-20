# blaupause

[![Greenkeeper badge](https://badges.greenkeeper.io/fspoettel/blaupause.svg)](https://greenkeeper.io/)

> blaupause is a [hugo](https://gohugo.io) starter kit based on npm scripts, webpack and postcss. It helps with setting up a modern web development stack and adds offline support via a service worker.

## In the box

* [hugo](https://gohugo.io) with a layout boilerplate
* build process managed via npm scripts
* _Development Mode_: sourcemaps, [browserSync](http://www.browsersync.io/) live-reloading environment and debugging helpers
* _Production Mode_: optimized builds, offline support via a service worker

### JavaScript

* [webpack@4](http://webpack.github.io)
* [babel@7](babeljs.io) with `babel-env`
* [eslint with airbnb config](http://eslint.org/)
* [jest unit tests](https://facebook.github.io/jest/)

### CSS

* [autoprefixer](https://github.com/postcss/autoprefixer)
* [pstcss-import](http://cssnext.io/)
* [stylelint with standard config](http://stylelint.io/)
* [sanitize.css](https://github.com/10up/sanitize.css)

### Images/SVG

* Automatic svg sprites via [svg-sprite](https://github.com/jkphl/svg-sprite)
* Hugo partial to embed svg sprite

### Dev Tools

* [editorConfig](http://editorconfig.org/)
* [travis](https://travis-ci.org)

## Installation

This project depends on [NodeJS](http://nodejs.org/) being installed on your machine. If the Hugo binary is not yet available on your `$PATH`, it will be installed during `npm install`.

To initiate a new site, run:

1. `git clone https://github.com/felics/blaupause project`
1. `cd project`
1. `npm install`
1. `npm start`

## Tasks & Task Configuration

Tasks are managed via [nps](https://github.com/kentcdodds/nps) and live in `package-scripts.js`. The following tasks are exposed in `package.json`:

#### `npm start`

Compiles all assets and starts a development server. Whenever you change a source file, the BrowserSync instance will reload your connected browsers with the changes. Sourcemaps are enabled.

#### `npm run start:staging`

Same as `npm:start`, but with production-ready assets. No sourcemaps, resources are optimized and gzipped.

#### `npm run build`

Builds all content and assets from `src` to `public`. Generates a production-ready build:

* The `production` baseUrl is applied by hugo
* Draft entries are not included
* Source maps are omitted
* JS & CSS is minified, `NODE_ENV=production` is passed to the javascript build
* A service worker is added to the build
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

## Offline Support

The service worker in `src` provides basic offline capabilities and follows a `networkFirst` strategy for static files and a `cacheFirst` strategy for google fonts and images. This means that visitors will always see the latest content and styles when a network connection is available. After the first visit, webfonts and images will be served from the cache and visited pages will work offline. The last cached version of the page will be served in the event that a user has no network connection. If you do not have dynamic content and changing static files, consider configuring workbox to use precaching. That way, your whole page will work offline once a single URL is visited.

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
