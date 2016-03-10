'use strict';

const fs = require('fs');

module.exports = (config) => {
  if (!config.dependency.phonegap.index) {
    return;
  }
  if (!config.project.phonegap.javascripts) {
    return;
  }
  let path = config.project.relativePath + '/' + config.dependency.phonegap.index;
  let replace = config.project.phonegap.javascripts
    .map((javascript) => { return '<script src="' + javascript + '"></script>'; })
    .push('</body>')
    .join("\n");
  fs.writeFileSync(path, fs.readFileSync(path, 'utf8').replace('</body>', replace));
};
