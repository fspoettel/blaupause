# blaupause

> Build process & application architecture for web projects

## Installation

 1. `git clone https://github.com/felics/blaupause myApp`
 2. `cd myApp`
 3. `npm install`
 4. `gulp`

## What's in the box...

 - [BrowserSync](browsersync.io)
 - [SASS](http://sass-lang.com/) with [Autoprefixer](https://github.com/postcss/autoprefixer) & Minification
 - [Webpack](webpack.github.io) - CommonJS / AMD-support
 - [jshint](http://jshint.com/), [mocha](mochajs.org) and [chai](chaijs.com)
 - Configurable [Express](http://expressjs.com/)-server with automatic restarts
 - Compatible with static pages / single-page-apps / [Statamic](http://statamic.com)

## Setup for use-cases

### Node.js / SPA with views:

Default configuration. Running `gulp` will run the Express-server in `./app.js` and serve from `./public`.

### Statamic:

*[Assuming you run this from `/_themes/yourtheme`]*

 1. Set `server.runServer` in `./gulp/config.js` to **false** and `views.root` to **true**.
 2. Set `dest`  in `./gulp/config.js` to `./`

This does two things: Prevents the express-server from running and tells the build-process to move the folders in `client/views`as well as the `css`& `js`-folder into the root of your `/yourtheme`-directory.

### Static Pages:

 1. Set `views.root` to **true**.
 2. (Move index.html into `views` if you prefer)

Folders and files in `client/views` get copied directly into the root directory of the destination.


