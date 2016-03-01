#! /usr/bin/env node
'use strict';

const copyfiles = require('copyfiles');

let dependency = process.argv[2];
let paths = require(process.cwd() + '/node_modules/' + dependency + '/phonegap.json');
paths = paths.map((path) => { return 'node_modules/' + dependency + '/' + path });
paths.push('../');
copyfiles(paths, 2, () => {});
