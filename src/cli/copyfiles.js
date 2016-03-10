'use strict';

const copyfiles = require('copyfiles');

module.exports = (config, callback) => {
  let paths = [];
  if (config.dependency.phonegap.copyfiles) {
    paths = config.dependency.phonegap.copyfiles;
  }
  if (config.dependency.phonegap.index) {
    paths.push(config.dependency.phonegap.index);
  }
  if (paths.length == 0) {
    return;
  }
  paths = paths.map((copyfile) => { return config.dependency.relativePath + '/' + copyfile; });
  paths.push(config.project.relativePath + '/');
  copyfiles(paths, config.dependency.relativePath.split('/').length, (err) => {
    if (err) {
      console.log(err);
      return;
    }
    callback();
  });
};
