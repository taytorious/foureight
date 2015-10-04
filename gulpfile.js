var config = require ('./config');

var pkg = require('./package.json'),
    gulp = require('gulp'),
    gulpif = require('gulp-if'),
    gutil = require('gulp-util'),
    sass = require('gulp-sass'),
    minifyCss = require('gulp-minify-css'),
    autoprefixer = require('gulp-autoprefixer'),
    uglify = require('gulp-uglify'),
    concat = require('gulp-concat');


gulp.task('css', function () {
    return gulp.src(config.foureight.src)
        .pipe(gulpif(config.env.dev, sass(config.foureight.sassconfigLocal), sass(config.foureight.sassconfigDist)))
       // .pipe(autoprefixer(['last 2 versions']))
        //.pipe(gulpif(config.env.dist, minifyCss()))
        .pipe(gulp.dest(config.foureight.dest))
        .on('error', function(err) {
            gutil.log(err.message);
        });
});

gulp.task('js', function() {
    return gulp.src(config.js.src)
        .pipe(concat('global.js'))
        .pipe(gulpif(config.env.dist, uglify()))
        .pipe(gulp.dest(config.js.dest));
});

/*
Watch
 */

gulp.task('watch', function() {
    gulp.watch(config.foureight.src, ['css']);

});



