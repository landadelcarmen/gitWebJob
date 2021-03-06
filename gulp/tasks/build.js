var gulp = require('gulp');
var del= require('del');
var imagemin = require('gulp-imagemin');
var usemin = require('gulp-usemin');
var rev = require('gulp-rev');
var cssnano = require('gulp-cssnano');
var uglify = require('gulp-uglify');
var browserSync = require('browser-sync').create();

gulp.task('previewDist', function() {
	browserSync.init({
		notify: false,
		server: {
			baseDir: 'docs'
		}
	});
});

gulp.task('deleteDistFolder', ['icons'], function() {
	return del(['./docs/']);
});

gulp.task('optimizeImages', ['deleteDistFolder'], function() {
	return gulp.src('./app/assets/images/**/*')
	.pipe(imagemin({
		progressive: true,
		interlaced: true,
		multipass: true
	}))
	.pipe(gulp.dest('./docs/assets/images'));
});

gulp.task('useminTrigger', ['deleteDistFolder'], function() {
	gulp.start('usemin');
});

gulp.task('usemin', ['deleteDistFolder', 'styles', 'scripts'], function() {
	return gulp.src('./app/index.html')
	.pipe(usemin({
		css: [function() {return rev()}, function() {return cssnano()}],
		js: [function() {return rev()}, function() {return uglify()}]
	}))
	.pipe(gulp.dest('./docs'));
});

gulp.task('build', ['deleteDistFolder', 'useminTrigger', 'optimizeImages']);