const fs = require('fs')
const database = JSON.parse(fs.readFileSync(__dirname + '/config.json', 'utf8')).development

module.exports = {
  "port": 3000,

  "database": database
}
