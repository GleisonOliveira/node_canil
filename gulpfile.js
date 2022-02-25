const { src, dest, task } = require('gulp');

async function copy() {
  src('node_modules/bootstrap/dist/*/*').pipe(dest('dist/'));
}

task(copy);