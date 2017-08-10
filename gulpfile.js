// Include gulp 
var gulp = require('gulp');

// Include plugins
var jshint = require('gulp-jshint'),
	sass = require('gulp-sass'),
	concat = require('gulp-concat'),
	uglify = require('gulp-uglify'),
	cleancss = require('gulp-clean-css'),
	rename = require('gulp-rename');
	
// JS hint - checks JS files for errors in the code
gulp.task('jshint', function() {
	return gulp.src('src/js/*js')
		.pipe(jshint())
		.pipe(jshint.reporter('default'));
});

// Sass - Compiles sass files from src/scss and saves the compiled css files into dist/css
gulp.task('sass', function() {
	return gulp.src('src/scss/*.scss')
		.pipe(sass())
		.pipe(gulp.dest('dist/css'));
});

gulp.task('cssbundle', function() {
	return gulp.src('src/scss/*.scss')
		.pipe(sass())
		.pipe(concat('style.css'))
		.pipe(gulp.dest('dist/css'))
		.pipe(rename('style.min.css'))
		.pipe(cleancss())
		.pipe(gulp.dest('dist/css'));
});

// Scripts - Concatenates all js files in src/js, saves the output to dist/js then also creates a minified / renamed version of the concatenated file in dist/js
gulp.task('jsbundle', function() {
	return gulp.src([
		'!src/js/vendor/*.js',
		'src/js/**/*.js'
		])
		.pipe(concat('bundle.js'))
		.pipe(gulp.dest('dist/js'))
		.pipe(rename('bundle.min.js'))
		.pipe(uglify())
		.pipe(gulp.dest('dist/js'));
});

// JavaScript libraries copied across to dist folder
gulp.task('library', function() {
	return gulp.src('src/js/vendor/*.js')
		.pipe(gulp.dest('dist/js/vendor'));
});

// Copy HTML to dist folder
gulp.task('html', function() {
	return gulp.src('src/*.html')
		.pipe(gulp.dest('dist'));
});

// Watch - method will listen for changes made to files and automatically run tasks
gulp.task('watch', function() {
	gulp.watch('src/js/*.js', ['lint', 'scripts']);
	gulp.watch('src/scss/*.scss', ['sass']);
});

// Default task - used as a group reference to our other tasks. This will be the task that is run upon entering gulp in the command line
gulp.task('default', ['jshint', 'cssbundle', 'jsbundle', 'library', 'html', 'watch']);