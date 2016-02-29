var gulp = require('gulp');
var minifyCss = require('gulp-minify-css');
var sourcemaps = require('gulp-sourcemaps');
var autoprefixer = require('gulp-autoprefixer');
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');
var ngAnnotate = require('gulp-ng-annotate');
var templateCache = require('gulp-angular-templatecache');
var exec = require('gulp-exec');
var run = require('gulp-run');

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


gulp.task('tarea-js', ['templates', "cordova-prepare"],  function() {


  return gulp.src(['./www/libs/angular.min.js', './www/libs/**/*.js', './www/dist/templates/templates.js', './www/app/app.js',  './www/servicios/**/*.js', './www/directivas/**/*.js', './www/app/index.js'])

      // .pipe(sourcemaps.init())
      .pipe(ngAnnotate())
      //.pipe(uglify())
      .pipe(concat('all.js'))

      //.pipe(sourcemaps.write('.'))
      .pipe(gulp.dest('./www/dist/'));
});


gulp.task('templates', function() {

    return gulp.src('./www/directivas/**/*.html')
        .pipe(templateCache({'root':'directivas', 'standalone': true}))

        .pipe(gulp.dest('./www/dist/templates/'));

});

gulp.task("cordova-prepare",  function() {
    run('cordova prepare ios').exec()
        .pipe(gulp.dest('output'))
});

gulp.task("cordova-platform-rm-ios",  function() {
    run('cordova platform remove ios').exec()
        .pipe(gulp.dest('output'))
});

gulp.task("cordova-platform-add-ios",  function() {
    run('cordova platform add ios').exec()
        .pipe(gulp.dest('output'))
});


gulp.task('watch', ['tarea-css', 'tarea-js'], function () {

    gulp.watch('./www/css/**/*.css', ['tarea-css']);
    gulp.watch('./www/js/**/*.js', ['tarea-js']);
    gulp.watch(['./config.xml', './www/**/*'], ["cordova-prepare"]);

});
