var User = require('../../../models').User
var pick = require('lodash-node/modern/objects/pick')

module.exports = function(req, res) {
  req.body.user = pick(req.body.user,[
    'id',
    'email',
    'new_password'
  ])

  User.find({
    where: {id: req.params.id}
  }).success(function(user) {
    if(user) {
      user.updateAttributes(req.body.user).success(function(error) {
        res.json(204,true)
      });
    } else {
      User.create(req.body.user).success(function(user) {
        res.json({
          user: user
        })
      })
    }
  })
}
