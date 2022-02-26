const { src, dest, task } = require('gulp');

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

task(copy);
