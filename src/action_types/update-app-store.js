const path = require('path');
const fs = require('fs-extra');

module.exports = function(data, config, plop) {
    const makeDestPath = p => path.resolve(plop.getDestBasePath(), p);
    const fileDestPath = makeDestPath(plop.renderString(config.path));
    try {
      let fileData = fs.readFileSync(fileDestPath, 'utf-8');
      if (data.name) {
        const importFile = "$1\r\nimport * as {{ camelCase name }} from './{{ folder name 'reducers' }}/{{ kebabCase name }}.reducer';";
        const importState = "$1\r\n\t{{ camelCase name }}: {{ camelCase name }}.{{ titleCase name }}State;";
        const addReducer = "$1\r\n\t{{ camelCase name }}: {{ camelCase name }}.reducer,";
        fileData = fileData
          .replace(/(\/\/ -- IMPORT REDUCER --)/, plop.renderString(importFile, data))
          .replace(/(\/\/ -- IMPORT STATE --)/, plop.renderString(importState, data))
          .replace(/(\/\/ -- ADD REDUCER --)/, plop.renderString(addReducer, data));
      } else {
        const importRouterStore = "import { routerReducer, RouterReducerState } from '@ngrx/router-store';\r\n"
        const importFile = "$1\r\nimport * as router from './router-serializer';";
        const importState = "$1\r\n\trouter: RouterReducerState<router.RouterStateUrl>;";
        const addReducer = "$1\r\n\trouter: routerReducer,";
        fileData = importRouterStore.concat(fileData);
        fileData = fileData
          .replace(/(\/\/ -- IMPORT REDUCER --)/, plop.renderString(importFile, data))
          .replace(/(\/\/ -- IMPORT STATE --)/, plop.renderString(importState, data))
          .replace(/(\/\/ -- ADD REDUCER --)/, plop.renderString(addReducer, data));
      }
      fs.writeFileSync(fileDestPath, fileData);
      return fileDestPath.replace(path.resolve(plop.getDestBasePath()), '');
    } catch(err) {
      throw typeof err === 'string' ? err : err.message || JSON.stringify(err);
    }
}