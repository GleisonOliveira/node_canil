const { src, dest, task } = require('gulp');
var uglify = require('gulp-uglify');

async function copy() {
	src('node_modules/bootstrap/dist/*/*').pipe(dest('dist/'));
	src('node_modules/@fortawesome/fontawesome-free/css/*.*').pipe(
		dest('dist/css')
	);
	src('node_modules/@fortawesome/fontawesome-free/svgs/*.*').pipe(
		dest('dist/svgs')
	);
	src('node_modules/@fortawesome/fontawesome-free/webfonts/*.*').pipe(
		dest('dist/webfonts')
	);
}

task('uglify', function() {
	return src('dist/js/scripts/*.js')
    .pipe(uglify())
    .pipe(dest('dist/js/scripts'))
    .on('error', function(err) {
      console.error('Error in compress task', err.toString());
    });
});

exports.copy = copy;
