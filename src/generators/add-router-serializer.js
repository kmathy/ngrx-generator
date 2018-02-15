const fs = require('fs-extra');

// actions
const routerSerializer = require('../actions/router-serializer');

// modules
const modulesActions = require('../actions/modules-actions');
const path = require('path');
const pjson = require(path.resolve('./package.json'));

const hasNgrxRouterStoreInstalled = () => {
    return Object.keys(pjson.dependencies).indexOf('@ngrx/router-store') >= 0;
}

module.exports = function(options) {
    return {
        description: 'Generate a router serializer',
        prompts: [],
        actions: () => {
            if(!hasNgrxRouterStoreInstalled()) {
                console.log(`@ngrx/router-store is not present in your package.json. Please install it and save it as a dependency of your project`.red);
                process.exit();
            }
            let actions = [routerSerializer.serializer, modulesActions.updateIndex, modulesActions.updateStoreReduxorModule];
            return actions.reduce((a, b) => a.concat(b));
        }
    }
}