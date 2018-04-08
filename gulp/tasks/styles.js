var gulp = require('gulp');
var postcss = require('gulp-postcss');
var autoprefixer = require('autoprefixer');
var cssvars = require('postcss-simple-vars');
var nested = require('postcss-nested');
var cssimport = require('postcss-import');
var mixins = require('postcss-mixins');

gulp.task('styles', function() {
	return gulp.src('./app/assets/styles/styles.css')
	.pipe(postcss([cssimport, mixins, autoprefixer, cssvars, nested]))
	.on('error', function(error) {
		console.log(error.toString);
		this.emit('end');
	})
	.pipe(gulp.dest('./app/temp/styles/'));
});