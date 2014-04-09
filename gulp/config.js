
// *    Gulp Config
// * ---------------------
// * Paths & file-names used in gulp build process
// * ---------------------

module.exports = {

    fileName: "global",

    sassSrc: "css/scss/app.scss",
    sassDest: "css/dist",
    sassDebugDest: "css/dist/debug",
    sassTestDest: "test/css",
    sassWatch: "css/scss/**/*.scss",

    jsSrc: [
        "js/app/globals/polyfills/**/*.js",
        "js/app/globals/eventie.js",
        "js/app/globals/doc-ready.js",
        "js/app/globals/**/*.js",
        "js/app/modules/**/*.js",
        "js/app/app.js"
    ],
    jsWatch: "js/app/**",
    jsDest: "js/dist",

    imgSrc: "img/src/**",
    imgDest:"img/dist",

    lrWatch: ["css/dist/global.css", "test/css/**.css", "**/**/*.html", "js/dist/global.js"]

};