'use strict';

//const args = [ 'start' ];
const args = process.argv.slice(2);
const opts = { stdio: 'inherit', cwd: 'client', shell: true };
require('child_process').spawn('yarn', args, opts);