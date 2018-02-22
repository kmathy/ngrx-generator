const path = require('path');
const camelCase = require('lodash.camelcase');

module.exports = function (plop, options) {
    plop.addHelper('basePath', () => path.resolve(options.BASE_PATH));
  
    plop.addHelper('folder', (name, type) => options.SEPARATE_DIRECTORY ? type : camelCase(name));
    
    plop.addHelper('position', (name) => options.SEPARATE_DIRECTORY ? '../' + name : '.');

    plop.addHelper('ifIn', function (elem, list, options) {
        return list.indexOf(elem) > -1 ? options.fn(this) : options.inverse(this);
    })

    plop.addHelper('isEqual', function (elem1, elem2, options) {
        return elem1 === elem2 ? options.fn(this) : options.inverse(this);
    })

    plop.addHelper('isNotEqual', function(elem1, elem2, options) {
        return elem1 !== elem2 ? options.fn(this) : options.inverse(this);
    })
}