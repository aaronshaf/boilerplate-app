var uuid = require('node-uuid')

module.exports = function(record, callback) {
  record.set({
    id: uuid.v4(),
    created: new Date(),
    modified: new Date()
  })
  callback(null, record)
}
