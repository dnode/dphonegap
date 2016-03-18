'use strict';

const copyfiles = require('copyfiles');

module.exports = (config, callback) => {
  let paths = [];
  if (config.dependency.dphonegap.copyfiles) {
    paths = config.dependency.dphonegap.copyfiles;
  }
  if (config.dependency.dphonegap.index) {
    paths.push(config.dependency.dphonegap.index);
  }
  if (paths.length == 0) {
    return;
  }
  paths = paths.map((path) => { return config.dependency.path + '/' + path; });
  paths.push(config.project.path + '/');
  copyfiles(paths, config.dependency.path.split('/').length, (err) => {
    if (err) {
      console.log(err);
      return;
    }
    callback();
  });
};
