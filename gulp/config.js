/**
 * config.js
 * @exports {object} - Configuration
 */

var dest = "./public",
    src  = "./client",
    port = 3000;


module.exports = {

  server: {
    /** Disable if you don't want to run an Express-server (e.g. use MAMP) */
    runServer: true,
    /** Needed for clean task & server */
    dest: dest,
    port: port,
    file: "app.js",
    /** Needed for BrowserSync to work properly with server restarts */
    reloadDelay: 500
  },

  browserSync: {
      /** Use "proxy" to reload existing servers */
      proxy: "localhost:" + port,
      port: 4000
    },

  styles: {
    entry: src + "/styles/app.scss",
    src: src + "/styles/**/*.{sass,scss}",
    dest: dest + "/css",
    name: "app"
  },

  scripts: {
    entry: src + "/scripts/*.js",
    src: src + "/scripts/**/*.js",
    dest: dest + "/js",
    name: "app"
  },

  views: {
    /** Extensions based on h5bp & Statamic */
    index: src + "/*.{html,yaml,txt,md,xml,png,ico}",
    src: src + "/views/**/*",
    dest: dest,
    /** Root-mode copies the files from "views" into the root of "dest". Use for Statamic and static pages with folders */
    root: false
  },

  mocha: {
    specs: "./test/*.js"
  }

};
