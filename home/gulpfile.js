const gulp = require('gulp');
const scss = require('gulp-sass');
const autoprefixer = require('gulp-autoprefixer');

gulp.task('scss', () => {
	return gulp.src('./scss/app.scss')
		.pipe(scss({ errorLogToConsole: true }))
        .pipe(autoprefixer('last 2 version'))
		.on('error', process.exit)
		.pipe(gulp.dest('./css'));
});

gulp.task('watch', () => {
	gulp.watch('./scss/**/*.scss', ['scss']);
	gulp.watch('./gulpfile.js', process.exit);
});

gulp.task('default', ['watch', 'scss']);
