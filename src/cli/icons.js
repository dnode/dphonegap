'use strict';

const dlogos = require('dlogos');

module.exports = (config) => {
  if (!config.dependency.dphonegap.logo) {
    return;
  }
  if (!config.project.dphonegap.icons) {
    return;
  }
  dlogos([{
    source: config.dependency.path + '/' + config.dependency.dphonegap.logo,
    path: config.project.path + '/' + config.project.dphonegap.icons.path,
    destinations: config.project.dphonegap.icons.destinations
  }]);
};
