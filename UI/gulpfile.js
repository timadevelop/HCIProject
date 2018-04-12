'use strict';

var   gulp = require('gulp'),
    concat = require('gulp-concat'),
       del = require('del');

var pages = ['index.html'];

var src = './src';
var partials_src = src + '/partials/';

gulp.task("concatPages", function() {
  pages.forEach((page) => {
    gulp.src([partials_src + 'header.html', partials_src + page, partials_src + 'footer.html'])
    .pipe(concat(page))
    .pipe(gulp.dest("./src/public"));
  });
});

gulp.task('clean', function() {
  del(['./src/public'])
});

gulp.task('build', ['concatPages'], function() {
  return gulp.src([src + '/css/*', src + '/img/*', src + '/js/*'], { base: './src'})
  .pipe(gulp.dest('./src/public'));   
});

gulp.task("default", ["build"]);