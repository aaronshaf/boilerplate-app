var db = require('../../../models')
var transformEmbedsToLinks = require('../../../transforms/embedded-to-links')

module.exports = function(req, res){
  db.User.find({
    where: {id: req.params.id}
  }).success(function(user) {
    if(user) {
      user.destroy().success(function(error) {
        res.json(204,true)
      })
    } else {
      res.json(404,false)
    }
  })
}
