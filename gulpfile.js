

const gulp = require('gulp')
const sass = require('gulp-sass')(require('sass'));

// Compile Sass
gulp.task('compileSass', function () {
    return gulp.src('sass/index.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(gulp.dest('css'));
});

gulp.task('watch', function () {
    gulp.watch('sass/**/*.scss', gulp.series('compileSass'));
});


