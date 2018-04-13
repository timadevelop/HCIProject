'use strict';

var   gulp = require('gulp'),
concat = require('gulp-concat'),
del = require('del'),
livereload = require('gulp-livereload'),
sass = require('gulp-sass'),
fileinclude = require('gulp-file-include');

var pages = ['index.html',
'login.html',
'about.html',
'login_company.html',
'done.html',
'trips.html',
'me.html',
'trip.html',
'search.html',
'companies.html',
'services.html'];

var partials_src = 'partials/';

gulp.task('compileSass', function() {
  return gulp.src("scss/minimal.scss")
  .pipe(sass())
  .pipe(gulp.dest('public/css'))
  .pipe(livereload());
});


gulp.task("concatPages", function() {
  pages.forEach((page) => {
    gulp.src([partials_src + 'header.html', partials_src + page, partials_src + 'footer.html'])
    .pipe(concat(page))
    .pipe(fileinclude({
      prefix: '@@',
      basepath: partials_src
    }))
    .pipe(gulp.dest('public'))
    .pipe(livereload());
  });
});

gulp.task("watch", function() {
  livereload.listen();
  return gulp.watch(['partials/*.html', 'scss/*', 'img/*', 'js/*'], ['build'])
})

gulp.task('clean', function() {
  del(['public'])
});

gulp.task("build", ['compileSass', 'concatPages'], function() {
  return gulp.src(["css/*", "img/*", "js/*"], { base: './'})
  .pipe(gulp.dest('public'))
  .pipe(livereload());

});

gulp.task("default", ["watch"]);
