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
    run: true,
    /** Needed for clean task & server */
    dest: dest,
    port: port,
    file: "server.js",
    /** Tell nodemon which directories/files to watch */
    watch: ["server.js"],
    /** Needed for BrowserSync to work properly with server restarts */
    reloadDelay: 500
  },

  browserSync: {
      /** Use "proxy" to reload existing servers */
      proxy: "localhost:" + port,
      /** Port for browserSync-proxy */
      port: 4000
    },

  styles: {
    entry: src + "/scss/app.scss",
    watch: [src + "/scss/**/*.{sass,scss}"],
    dest: dest + "/css",
    name: "app"
  },

  scripts: {
    entry: src + "/js/app.js",
    watch: [src + "/js/**/*.{js,jsx}"],
    dest: dest + "/js",
    name: "app"
  },

  views: {
    index: src + "/*.*",
    src: [src + "/views/**/*", src + "/views/*"],
    dest: dest,
    /** Root-mode copies the files from "views" into the root of "dest". Use for Statamic and static pages with folders */
    root: false
  },

  images: {
    src: src + "/img/*",
    dest: dest + "/img"
  },

  mocha: {
    specs: "./test/*.js"
  }

};
