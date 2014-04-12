const fs = require('fs')
const database = JSON.parse(fs.readFileSync(__dirname + '/config.json', 'utf8')).test

module.exports = {
  "port": 3001,

  "database": database
}
