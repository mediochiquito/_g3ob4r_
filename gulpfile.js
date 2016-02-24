var gulp = require('gulp');
var minifyCss = require('gulp-minify-css');
var sourcemaps = require('gulp-sourcemaps');
var autoprefixer = require('gulp-autoprefixer');
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');
var ngAnnotate = require('gulp-ng-annotate');
var templateCache = require('gulp-angular-templatecache');

gulp.task('tarea-css', function() {

    return gulp.src('./www/css/**/*.css')
    .pipe( minifyCss() )
    .pipe(concat('all.css'))
    .pipe(autoprefixer({
          browsers: ['> 1%', 'Last 2 versions', 'IE 8'],
          cascade: false
    }))
    .pipe(gulp.dest('./www/dist'));

});


gulp.task('tarea-js', function() {
  return gulp.src(['./www/app/app.js',  './www/servicios/**/*.js', './www/directivas/**/*.js', './www/app/index.js'])

     // .pipe(sourcemaps.init())

      .pipe(ngAnnotate())
      //.pipe(uglify())
      .pipe(concat('all.js'))

      //.pipe(sourcemaps.write('.'))
      .pipe(gulp.dest('./www/dist/'));
});


gulp.task('templates', function() {

    return gulp.src('./www/directivas/**/*.html')
        .pipe(templateCache())
        .pipe(gulp.dest('./www/dist/templates/'));

});



gulp.task('watch', ['tarea-css', 'tarea-js'], function () {

    gulp.watch('./www/css/**/*.css', ['tarea-css']);
    gulp.watch('./www/js/**/*.js', ['tarea-js']);

});
