const fs = require('fs-extra');

// actions
const basicActions = require('../actions/basic-actions');
const crudActions = require('../actions/crud-actions');

// actions with entity
const crudEntityActions = require('../actions/crud-entity-actions');

// modules
const modulesActions = require('../actions/modules-actions');

// utils
const validators = require('../validators');

module.exports = function(options) {
    return {
        description: 'Generate Actions, Reducers, Services and Effect',
        prompts: [
            {
                type: 'input',
                name: 'name',
                message: 'Name for the new store object?',
                validate: (name) => validators.validateName(name),
                description: 'object must be singular'
            }, 
            {
                type: 'list',
                name: 'store',
                message: 'What kind of store do you want to generate?',
                choices: ['CRUD', 'Basic']
            },
            {
                type: 'list',
                name: 'entity',
                message: 'Is this a collection using ngrx/entity?',
                choices: ['Yes', 'No']
            }
        ],
        actions: (data) => {
            let actions = [];
            
            if ( data.store === 'CRUD' && data.entity === 'Yes' ) {
                actions = actions.concat(crudEntityActions.action, crudEntityActions.reducer, crudEntityActions.effect, crudEntityActions.service);
            } else if ( data.store === 'CRUD' && data.entity === 'No' ) {
                actions = actions.concat(crudActions.action, crudActions.reducer, crudActions.effect, crudActions.service);
            } else if ( data.store === 'Basic' && data.entity === 'No') {
                actions = actions.concat(basicActions.action, basicActions.reducer, basicActions.effect, basicActions.service);
            }

            const indexExists = fs.existsSync(options.BASE_PATH, 'app.store.ts');
            const allEffectsExists = fs.existsSync(options.BASE_PATH, 'all-effects.ts');
            const storeReduxorModuleExists = fs.existsSync(options.BASE_PATH, 'store-reduxor.module.ts');
            actions = indexExists ? actions.concat(modulesActions.updateIndex) : actions.concat(modulesActions.addIndex);
            actions = allEffectsExists ? actions.concat(modulesActions.updateAllEffects) : actions.concat(modulesActions.addAllEffects);
            actions = storeReduxorModuleExists ? actions.concat(modulesActions.updateStoreReduxorModule) : actions.concat(modulesActions.addStoreReduxorModule);

            return actions;
        }
    }
}