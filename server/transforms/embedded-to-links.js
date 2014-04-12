const cloneDeep = require('lodash-node/modern/objects/cloneDeep')
const find = require('lodash-node/modern/collections/find')
const en = require('lingo').en

module.exports = function embeddedToLinks(data, embeddedKeys) {
  data = JSON.parse(JSON.stringify(data))
  // data = cloneDeep(data)

  if(typeof data['links'] === 'undefined') {
    data['links'] = {}
  }

  embeddedKeys.forEach(function(key) {
    if(data[key]) {

      if(data[key] instanceof Array) {
        data['links'][key] = data[key].map(function(record) {return record.id})
      } else if(typeof data[key] === 'object') {
        data['links'][key] = data[key].id
      }
      delete data[key]
    }
  })

  return data
}
