/**
 * config.js
 * @exports {object} - Configuration
 */

var dest = "./public",
    src  = "./client";


module.exports = {

  browserSync: {
    server: {
      /** Serve the build folder. Use "proxy" to reload existing servers */
      baseDir: dest
    }
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
    /** Statamic-mode copies the files from "views" into the root of "dest" */
    statamic: false
  },

  mocha: {
    specs: "./test/*.js"
  },

  /** Needed for clean task */
  dest: dest

};
