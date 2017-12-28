const path = require('path');
const fs = require('fs-extra');

module.exports = function(data, config, plop) {
    const makeDestPath = p => path.resolve(plop.getDestBasePath(), p);
    const fileDestPath = makeDestPath(plop.renderString(config.path));
    try {
      let fileData = fs.readFileSync(fileDestPath, 'utf-8');
      const importFile = "$1\r\nimport { {{ properCase name }}Effects } from './{{ folder name 'effects' }}/{{ kebabCase name }}.effects';";
      const listEffect = "$1\r\n\t{{ properCase name }}Effects,";
      fileData = fileData
        .replace(/(\/\/ -- IMPORT --)/, plop.renderString(importFile, data))
        .replace(/(\/\/ -- LIST --)/, plop.renderString(listEffect, data))
      fs.writeFileSync(fileDestPath, fileData);
      return fileDestPath.replace(path.resolve(plop.getDestBasePath()), '');
    } catch(err) {
      throw typeof err === 'string' ? err : err.message || JSON.stringify(err);
    }
}