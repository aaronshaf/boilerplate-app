var db = require('../../models')
var handleQuery = require('../../handlers/query')
var handleMeta = require('../../handlers/meta')

module.exports = function(req, res) {
  var dbQuery = handleQuery(req.query)

  db.User.findAndCountAll(dbQuery).success(function(result) {
    return res.json({
      users: result.rows,
      meta: handleMeta(dbQuery,result)
    })
  })
}
