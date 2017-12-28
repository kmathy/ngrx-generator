const path = require('path');
const fs = require('fs-extra');

module.exports = function(data, config, plop) {
    const makeDestPath = p => path.resolve(plop.getDestBasePath(), p);
    const fileDestPath = makeDestPath(plop.renderString(config.path));
    try {
      let fileData = fs.readFileSync(fileDestPath, 'utf-8');
      const importFile = "$1\r\nimport { {{ properCase name }}Service } from './{{ folder name 'services' }}/{{ kebabCase name }}.service';";
      const provider = "$1\r\n\t\t{{ properCase name }}Service,";
      fileData = fileData
        .replace(/(\/\/ -- IMPORT SERVICES --)/, plop.renderString(importFile, data))
        .replace(/(\/\/ -- PROVIDERS --)/, plop.renderString(provider, data))
      fs.writeFileSync(fileDestPath, fileData);
      return fileDestPath.replace(path.resolve(plop.getDestBasePath()), '');
    } catch(err) {
      throw typeof err === 'string' ? err : err.message || JSON.stringify(err);
    }
}