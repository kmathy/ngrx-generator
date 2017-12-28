const fs = require('fs-extra');
const path = require('path');
const defaultOptions = fs.readJsonSync(path.resolve(__dirname, './default.config.json'), 'utf-8')

module.exports = function () {
    if(!fs.existsSync('./ngx-reduxor.config.json')) {
      console.log(`The config file doesn't exist`.yellow)
      try {
        fs.outputJsonSync('./ngx-reduxor.config.json', defaultOptions, {spaces: '\t'});
        console.log(`The config file has been created.`.green)
        return fs.readJsonSync('./ngx-reduxor.config.json', 'utf-8')
      } catch(err) {
        console.log(`${err}`.red);
        process.exit(1);
      }
    } else {
      return fs.readJsonSync('./ngx-reduxor.config.json', 'utf-8');
    }
  }