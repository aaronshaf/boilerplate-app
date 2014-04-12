const fs = require('fs')
const database = JSON.parse(fs.readFileSync(__dirname + '/config.json', 'utf8')).production

module.exports = {
  port: 80,

  "database": database
}
