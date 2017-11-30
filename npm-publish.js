#!/usr/bin/env node

const npm = require('npm-utils');
let dir = process.env.DIR;


try {
  if (typeof (dir) === "undefined") {
      dir = ".";
  }
  process.chdir(dir);
  console.log('Current directory: ' + process.cwd());
  npm.setAuthToken()
      .then(npm.publish().catch(onError))
      .catch(onError);
}
catch (err) {
  console.log('invalid directory');
  process.exit(-1)
}

function onError (err) {
  console.error(err);
  process.exit(-1)
}

