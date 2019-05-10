const sass = require('gulp-sass')
const gulp = require('gulp')
const autoprefixer = require('gulp-autoprefixer')

gulp.task('sass', function () {
    return gulp.src('./scss/*.scss')
        .pipe(sass({ outputStyle: 'nested' }).on('error', sass.logError))
        .pipe(autoprefixer({
            browsers: ['last 2 versions'],
            cascade: false
        }))
        .pipe(gulp.dest('./css/'))
})

gulp.task('watch', function () {
    gulp.watch('./scss/*.scss', gulp.registry().get('sass'))
})