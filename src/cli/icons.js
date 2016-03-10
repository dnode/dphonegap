'use strict';

const mkdirp = require('mkdirp');
const im = require('imagemagick');
const path = require('path');

module.exports = (config) => {
  if (!config.dependency.phonegap.icon) {
    return;
  }
  if (!config.project.phonegap.icons) {
    return;
  }
  let source = config.dependency.absolutePath + '/' + config.dependency.phonegap.icon;
  let directory = config.project.absolutePath + '/' + config.project.phonegap.icons.path;
  for (let format of config.project.phonegap.icons.formats) {
    mkdirp.sync(directory + '/' + path.dirname(format.destination));
    im.resize(
        {
          srcPath: source,
          dstPath: directory + '/' + format.destination,
          width: format.width,
          height: format.height
        },
        (err) => {
          if (err) {
            console.log(err);
          }
        }
    );
  }
};
