let syntax = 'scss'; // Syntax: sass or scss;

const gulp = require('gulp'),
    gutil = require('gulp-util'),
    sass = require('gulp-sass'),
    concat = require('gulp-concat'),
    uglify = require('gulp-uglify'),
    cleancss = require('gulp-clean-css'),
    rename = require('gulp-rename'),
    autoprefixer = require('gulp-autoprefixer'),
    notify = require("gulp-notify"),
    webpack = require('webpack'),
    webpackStream = require('webpack-stream');

gulp.task('scripts', function () {
    return gulp.src('./app/js/common.js')
        .pipe(webpackStream({
            output: {
                filename: 'scripts.js',
            },
            module: {
                rules: [
                    {
                        test: /\.(js)$/,
                        exclude: /(node_modules)/,
                        loader: 'babel-loader',
                        query: {
                            presets: ['env']
                        }
                    }
                ]
            },
            externals: {
                jquery: 'jQuery',
                chart: 'chart.js'
            }
        }))
        .pipe(gulp.dest('./public/js'))
        .pipe(uglify())
        .pipe(rename({ suffix: '.min' }))
        .pipe(gulp.dest('./public/js'));
});

gulp.task('styles', function () {
    return gulp.src('app/' + syntax + '/**/*.' + syntax + '')
        .pipe(sass({outputStyle: 'expand'}).on("error", notify.onError()))
        .pipe(rename({suffix: '.min', prefix: ''}))
        .pipe(autoprefixer(['last 15 versions']))
        .pipe(cleancss({level: {1: {specialComments: 0}}})) // Opt., comment out when debugging
        .pipe(gulp.dest('public/css'))
});


gulp.task('watch', ['styles', 'scripts'], function () {
    gulp.watch('app/' + syntax + '/**/*.' + syntax, ['styles']);
    gulp.watch(['libs/**/*.js', 'app/js/*.js'], ['scripts']);
});

gulp.task('default', ['watch']);
