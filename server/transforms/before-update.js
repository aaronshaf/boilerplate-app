module.exports = function(record, callback) {
  record.set({
    updatedAt: new Date()
  })
  callback(null, record)
}
