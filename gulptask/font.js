const {src, dest} = require("gulp");

//Config
const path = require("../config/path.js");
const app = require("../config/app.js");

// Plugins
const plumber = require("gulp-plumber");
const notify = require("gulp-notify");
const newer = require("gulp-newer");
const fonter = require("gulp-fonter"); //font convertor




// обработка Font
const font = ()=>{
    return src(path.font.src)
    .pipe(plumber({
        errorHandler: notify.onError(error => ({
            title: 'Font',
            message: error.message
        }))
    }))
    .pipe(newer(path.font.dest))
    .pipe(fonter(app.fonter))
    .pipe(dest(path.font.dest));
}

module.exports = font;