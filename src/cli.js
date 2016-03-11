#! /usr/bin/env node
'use strict';

let config = { dependency: {}, project: {} };
config.dependency.path = 'node_modules/' + process.argv[2];
config.dependency.dphonegap = require(process.cwd() + '/' + config.dependency.path + '/dphonegap.json');
config.project.path = '..';
config.project.dphonegap = require(process.cwd() + '/' + config.project.path + '/dphonegap/dphonegap.json');

require('./cli/copyfiles.js')(
  config,
  () => { require('./cli/javascripts.js')(config); }
);
require('./cli/icons.js')(config);
