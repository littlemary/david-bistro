const {watch, series, parallel} = require("gulp");
//Config
const path = require("./config/path.js");
const browserSync = require('browser-sync').create();
 

//Server
const server = () =>{
    browserSync.init({
        server:{
            baseDir: "./public/"
        }
    });
}
// Tasks
const clear = require('./gulptask/clear.js');
const pug = require('./gulptask/pug.js');
//const scss = require('./task/scss.js');
const css = require('./gulptask/css.js');
const js = require('./gulptask/js.js');
const img = require('./gulptask/img.js');
const font = require('./gulptask/font.js');

// Watching
const watcher = () =>{
    watch(path.pug.watch, pug).on("all", browserSync.reload);
//    watch(path.scss.watch, scss).on("all", browserSync.reload);
    watch(path.css.watch, css).on("all", browserSync.reload);
    watch(path.js.watch, js).on("all", browserSync.reload);
    watch(path.img.watch, img).on("all", browserSync.reload);
    watch(path.font.watch, font).on("all", browserSync.reload);
}

exports.pug = pug;
exports.css = css;
//exports.scss = scss;
exports.js = js;
exports.img = img;
exports.font = font;

//Assembly
exports.default = series(
    //clear,
//    parallel (pug, scss, js, img),
    parallel (pug, css, js, img, font),
    parallel (watcher, server)
);