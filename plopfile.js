// Generators
const createGenerator = require('./src/generators/create');
// Action types
const updateAppStore = require('./src/action_types/update-app-store');
const updateAllEffects = require('./src/action_types/update-all-effects');
const updateStoreReduxor = require('./src/action_types/update-store-reduxor');
// Initializers
const initConfig = require('./src/initConfig');
const initHelpers = require('./src/helpers');

module.exports = function (plop) {
  const options = initConfig();
  initHelpers(plop, options);
  
  plop.setActionType('update app.store', updateAppStore);
  plop.setActionType('update all-effects', updateAllEffects);
  plop.setActionType('update store-reduxor', updateStoreReduxor);
  
  plop.setGenerator('New', createGenerator(options));
};