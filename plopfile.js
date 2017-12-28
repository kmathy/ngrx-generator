// Libraries
const get = require('lodash.get');
const camelCase = require('lodash.camelcase');
const path = require('path');
const fs = require('fs-extra');
const defaultOptions = fs.readJsonSync(path.resolve(__dirname, './src/default.config.json'), 'utf-8')
let options;
// Source code
const basicGenerators = require('./src/generators/basic-generators');
const crudGenerators = require('./src/generators/crud-generators');
const modulesGenerators = require('./src/generators/modules-generators');

function validate(name) {
  return (/.+/).test(name) ? true : `A name is required`;
}

function createGenerator(plop) {
  plop.setGenerator('New',
    {
      description: 'Generate Actions, Reducers, Services and Effect',
      prompts: [{
        type: 'input',
        name: 'name',
        message: 'Name for the new store object?',
        validate: (name) => validate(name)
      }, {
        type: 'list',
        name: 'store',
        message: 'What kind of store do you want to generate?',
        choices: ['CRUD', 'Basic']
      }],
      actions: (data) => {
        let actions = [];
        switch(data.store) {
          case 'CRUD':
            actions = actions.concat(crudGenerators.action, crudGenerators.reducer, crudGenerators.effect, crudGenerators.service);
            break;
          case 'Basic':
            actions = actions.concat(basicGenerators.action, basicGenerators.reducer, basicGenerators.effect, basicGenerators.service);
            break;
        }
        const indexExists = fs.existsSync(options.BASE_PATH, 'app.store.ts');
        const allEffectsExists = fs.existsSync(options.BASE_PATH, 'all-effects.ts');
        const storeReduxorModuleExists = fs.existsSync(options.BASE_PATH, 'store-reduxor.module.ts');
        actions = indexExists ? actions.concat(modulesGenerators.updateIndex) : actions.concat(modulesGenerators.addIndex);
        actions = allEffectsExists ? actions.concat(modulesGenerators.updateAllEffects) : actions.concat(modulesGenerators.addAllEffects);
        actions = storeReduxorModuleExists ? actions.concat(modulesGenerators.updateStoreReduxorModule) : actions.concat(modulesGenerators.addStoreReduxorModule);

        return actions;
      }
    }
  );
}

module.exports = function (plop) {
  if(!fs.existsSync('./ngx-reduxor.config.json')) {
    console.log(`The config file doesn't exist`.yellow)
    try {
      fs.outputJsonSync('./ngx-reduxor.config.json', defaultOptions, {spaces: '\t'});
      console.log(`The config file has been created.`.green)
      options = fs.readJsonSync('./ngx-reduxor.config.json', 'utf-8')
    } catch(err) {
      console.log(`${err}`.red);
      process.exit(1);
    }
  } else {
    options = fs.readJsonSync('./ngx-reduxor.config.json', 'utf-8');
  }

  plop.addHelper('basePath', () => path.resolve(options.BASE_PATH));
  
  plop.addHelper('folder', (name, type) => options.SEPARATE_DIRECTORY ? type : camelCase(name));
  
  plop.addHelper('position', (name) => options.SEPARATE_DIRECTORY ? '../' + name : '.');
  
  plop.setActionType('update app.store', (data, config) => {
    const makeDestPath = p => path.resolve(plop.getDestBasePath(), p);
    const fileDestPath = makeDestPath(plop.renderString(config.path));
    try {
      let fileData = fs.readFileSync(fileDestPath, 'utf-8');
      const importFile = "$1\r\nimport * as {{ camelCase name }} from './{{ folder name 'reducers' }}/{{ kebabCase name }}.reducer';";
      const importState = "$1\r\n\t{{ camelCase name }}: {{ camelCase name }}.State;";
      const addReducer = "$1\r\n\t{{ camelCase name }}: {{ camelCase name }}.reducer,";
      fileData = fileData
        .replace(/(\/\/ -- IMPORT REDUCER --)/, plop.renderString(importFile, data))
        .replace(/(\/\/ -- IMPORT STATE --)/, plop.renderString(importState, data))
        .replace(/(\/\/ -- ADD REDUCER --)/, plop.renderString(addReducer, data));
      fs.writeFileSync(fileDestPath, fileData);
      return fileDestPath.replace(path.resolve(plop.getDestBasePath()), '');
    } catch(err) {
      throw typeof err === 'string' ? err : err.message || JSON.stringify(err);
    }
  })

  plop.setActionType('update all-effects', (data, config) => {
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
  })

  plop.setActionType('update store-reduxor', (data, config) => {
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
  })
  
  createGenerator(plop);
  
};