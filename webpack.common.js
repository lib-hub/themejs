const path = require('path');
const sass = require('sass');
const fs = require('fs');

/**
 * Compile Javascript
 *
 * @type {{output: {path: string, libraryTarget: string, filename: string}, entry: string}}
 */
module.exports = {
    entry: './src/index.js',
    output: {
        filename: 'main.min.js',
        path: path.resolve(__dirname, 'dist'),
        libraryTarget: "window"
    },
};

/**
 * Compile SASS
 */
const css = sass.renderSync({
    file: "src/sass/style.scss",
    outputStyle: "compressed",
    includePaths: [
        "../../node_modules",
        'node_modules'
    ],
}).css.toString();

fs.writeFile('dist/style.min.css', css, function (err) {
    if (err) return console.log(err);
});