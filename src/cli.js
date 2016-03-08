#! /usr/bin/env node
'use strict';

const copyfiles = require('copyfiles');
const fs = require('fs');

let dependency = process.argv[2];
let paths = require(process.cwd() + '/node_modules/' + dependency + '/phonegap.json');
paths.push('www/index.html');
paths = paths.map((path) => { return 'node_modules/' + dependency + '/' + path });
paths.push('../');
copyfiles(paths, 2, () => {
  const path = '../www/index.html';
  fs.writeFileSync(path, fs.readFileSync(path, 'utf8').replace('</body>', "<script src=\"cordova.js\"></script>\n<script src=\"app-cordova.js\"></script>\n</body>"));
});
