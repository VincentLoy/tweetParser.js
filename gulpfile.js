/**
 * Project : tweetParser.js
 * File : gulpfile
 * Date : 11/13/2024
 * Author : Vincent Loy <vincent.loy1@gmail.com>
 */

/*jslint indent: 4, maxlen: 100, node: true, vars: true, nomen: true */

(function () {
    'use strict';

    const gulp = require('gulp'),
        log = require('fancy-log'),
        less = require('gulp-less'),
        cleanCSS = require('gulp-clean-css'),
        sourcemaps = require('gulp-sourcemaps'),
        plumber = require('gulp-plumber'),
        terser = require('gulp-terser'), // replacing gulp-uglify with gulp-terser
        rename = require('gulp-rename'),
        babel = require('gulp-babel'),
        targetCSSDir = 'demo',
        targetLESSDir = `${targetCSSDir}/less`,
        devJSDir = 'dev',
        distJSDir = 'dist';

    // Compile Less and minify CSS
    function css() {
        return gulp.src(`${targetLESSDir}/demo.less`)
            .pipe(plumber())
            .pipe(less({ javascriptEnabled: true }))
            .on('error', log)
            .pipe(sourcemaps.init())
            .pipe(cleanCSS({ compatibility: 'ie8' }))
            .pipe(sourcemaps.write())
            .pipe(gulp.dest(targetCSSDir));
    }

    // Transpile ES6, minify, and generate sourcemaps for JavaScript
    function buildES6() {
        return gulp.src(`${devJSDir}/tweetParser.js`)
            .pipe(sourcemaps.init())
            .pipe(babel({
                presets: ['@babel/preset-env']
            }))
            .pipe(terser({
                format: {
                    comments: 'some' // preserve some comments
                }
            }))
            .pipe(rename({
                extname: '.min.js'
            }))
            .pipe(sourcemaps.write('./'))
            .pipe(gulp.dest(distJSDir));
    }

    // Watch for changes in LESS and JavaScript files
    function watchFiles() {
        gulp.watch('demo/**/*.less', css);
        gulp.watch(`${devJSDir}/tweetParser.js`, buildES6);
    }

    // Define complex tasks
    const build = gulp.series(css, buildES6);
    const watch = gulp.parallel(watchFiles);

    // Export tasks
    exports.css = css;
    exports.buildES6 = buildES6;
    exports.watch = watch;
    exports.default = gulp.series(build, watch);
    exports.release = build; // To run with 'gulp release'

}());
