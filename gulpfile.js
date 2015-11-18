var gulp = require('gulp');
var minifyCss = require('gulp-minify-css');
var sourcemaps = require('gulp-sourcemaps');
var autoprefixer = require('gulp-autoprefixer');
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');



gulp.task('tarea-css', function() {
  return gulp.src('./www/public/css/**/*.css')
    .pipe(sourcemaps.init())
    .pipe(minifyCss())
    .pipe(concat('all.css'))
    .pipe(sourcemaps.write('.'))
    .pipe(gulp.dest('./www/public/dist'));
});


gulp.task('tarea-js', function() {
  return gulp.src(['./www/public/js/libs/jquery-1.8.3.min.js', './www/public/js/libs/inputmask.min.js', './www/public/js/libs/**/*.js', './www/public/js/com/**/*.js'])
    .pipe(sourcemaps.init())
    .pipe(uglify())
    .pipe(concat('all.js'))
    .pipe(sourcemaps.write('.'))
    .pipe(gulp.dest('./www/public/dist'));
});



gulp.task('watch', ['tarea-css', 'tarea-js'], function () {

    gulp.watch('./www/public/css/**/*.css', ['tarea-css']);
    gulp.watch('./www/public/js/**/*.js', ['tarea-js']);

});
