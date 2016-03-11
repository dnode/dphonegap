'use strict';

const dlogos = require('dlogos');

module.exports = (config) => {
  if (!config.dependency.dphonegap.logo) {
    return;
  }
  if (!config.project.dphonegap.icons) {
    return;
  }
  let destinations = [];
  for (let destination of config.project.dphonegap.icons.destinations) {
    destinations.push({
      path: config.project.path + '/' + config.project.dphonegap.icons.path + '/' + destination.path,
      width: destination.width,
      height: destination.height
    });
  }
  let source = config.dependency.path + '/' + config.dependency.dphonegap.logo;
  dlogos([{ source, destinations }]);
};
