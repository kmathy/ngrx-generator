// Generators
const createGenerator = require('./src/generators/create');
const addRouterSerializer = require('./src/generators/add-router-serializer');
const exit = require('./src/generators/exit');
// Action types
const updateAppStore = require('./src/action_types/update-app-store');
const updateAllEffects = require('./src/action_types/update-all-effects');
const updateStoreReduxor = require('./src/action_types/update-store-reduxor');
// Initializers
const initConfig = require('./src/initConfig');
const initHelpers = require('./src/helpers');
const path = require('path');
const fs = require('fs-extra');

module.exports = function (plop) {
  const options = initConfig();
  initHelpers(plop, options);
  
  plop.setActionType('update app.store', updateAppStore);
  plop.setActionType('update all-effects', updateAllEffects);
  plop.setActionType('update store-reduxor', updateStoreReduxor);
  
  const hasRouterSerializer = fs.existsSync(path.resolve(options.BASE_PATH, 'router-serializer.ts'));

  plop.setGenerator('New entity', createGenerator(options));
  if(!hasRouterSerializer) plop.setGenerator('Add router-store', addRouterSerializer(options));
  plop.setGenerator('Exit', exit())
};