/**
 * scripts.js
 * @name - "scripts"
 * @task - Compiles & uglifies AMD modules
 */

var gulp               = require("gulp"),
    webpack            = require("gulp-webpack"),
    BowerWebpackPlugin = require("bower-webpack-plugin"),
    uglify             = require("gulp-uglify"),
    rename             = require("gulp-rename"),
    size               = require("gulp-size"),
    reload             = require("browser-sync").reload,
    config             = require("../config").scripts;

gulp.task("scripts", function(){
  return gulp.src(config.entry)
    /** Supports JSX / JSON files & can require from "node_modules" & "bower-components" */
    .pipe(webpack({
      cache: true,
      module: {
        loaders: [
          { test: /\.(js|jsx)$/, exclude: /node_modules/, loader: 'jsx-loader'},
          { test: /\.json$/,  exclude: /node_modules/, loader: 'json-loader' }
        ]
      },
      plugins: [new BowerWebpackPlugin({
        excludes: /.*\.(less|scss|sass|css|html)/
      })]
    }))
    .pipe(rename({
      basename: config.name,
      extname: ".js"
    }))
    .pipe(gulp.dest(config.dest))
    .pipe(uglify())
    .pipe(rename({suffix: ".min"}))
    .pipe(gulp.dest(config.dest))
    .pipe(size({
        title: "js:"
    }))
    .pipe(reload({stream:true}));
});
