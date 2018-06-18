'use strict';

var   gulp = require('gulp'),
concat = require('gulp-concat'),
del = require('del'),
livereload = require('gulp-livereload'),
sass = require('gulp-sass'),
fileinclude = require('gulp-file-include');

var pages = ['index.html',
'me_users.html',
'login.html',
'about.html',
'login_company.html',
'done.html',
'trips.html',
'me.html',
'trip.html',
'search.html',
'companies.html',
'services.html',
'company.html',
'search_company.html',
'services_company.html',
'users_company.html',
'company_add_service.html',
'partners_company.html',
'company_add_partner.html'];

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
  gulp.src(['partials/demo.html'])
  .pipe(gulp.dest('public'));
});

gulp.task("watch", function() {
  livereload.listen();
  return gulp.watch(['partials/*.html', 'partials/*/*', 'scss/*', 'img/*', 'js/*'], ['build'])
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
