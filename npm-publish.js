#!/usr/bin/env node

const npm = require('npm-utils');
const _   = require('lodash');
let dir   = process.argv[2];

try {
  if(_.isUndefined(dir)){
      dir = '.';
  }
  process.chdir(dir);
  console.log('Current directory: ' + process.cwd());
  npm.setAuthToken()
      .then(npm.publish().catch(onError))
      .catch(onError);
}
catch (err) {
  console.log('invalid directory');
  process.exit(-1);
}

function onError (err) {
  console.error(err);
  process.exit(-1);
}

