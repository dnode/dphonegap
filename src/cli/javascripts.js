'use strict';

const fs = require('fs');

module.exports = (config) => {
  if (!config.dependency.dphonegap.index) {
    return;
  }
  if (!config.project.dphonegap.javascripts) {
    return;
  }
  let path = config.project.path + '/' + config.dependency.dphonegap.index;
  let replace = config.project.dphonegap.javascripts
    .map((javascript) => { return '<script src="' + javascript + '"></script>'; });
  replace.push('</body>');
  fs.writeFileSync(path, fs.readFileSync(path, 'utf8').replace('</body>', replace.join("\n")));
};
