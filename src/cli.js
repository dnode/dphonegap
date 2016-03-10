#! /usr/bin/env node
'use strict';

let config = { dependency: {}, project: {} };
config.dependency.relativePath = 'node_modules/' + process.argv[2];
config.dependency.absolutePath = process.cwd() + '/' + config.dependency.relativePath;
config.dependency.phonegap = require(config.dependency.absolutePath + '/phonegap.json');
config.project.relativePath = '..';
config.project.absolutePath = process.cwd() + '/' + config.project.relativePath;
config.project.phonegap = require(config.project.absolutePath + '/dphonegap/phonegap.json');

require('./cli/copyfiles.js')(
  config,
  () => { require('./cli/javascripts.js')(config); }
);
require('./cli/icons.js')(config);
