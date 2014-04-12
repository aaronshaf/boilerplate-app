var db = require('../../../models')
var transformEmbedsToLinks = require('../../../transforms/embedded-to-links')

module.exports = function(req, res){
  db.User.find({
    where: {id: req.params.id}
  }).success(function(user) {
    if(user) {
      return res.json({
        user: transformEmbedsToLinks(user,[])
      })
    } else {
      return res.json(404,false)
    }
  })
}
