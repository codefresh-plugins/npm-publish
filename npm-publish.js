#!/usr/bin/env node

const npm   = require('npm-utils');
const _     = require('lodash');
const yargs = require('yargs');

const argv = yargs
    .command('$0', 'relative path for the directory', () => {}, (argv) => {
        try {
            dir = argv._[0];
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
            onError('invalid directory')
        }
    })
    .argv;

function onError (err) {
  console.error(err);
  process.exit(-1);
}

