module.exports = function() {
  this.route('login', {path: '/login'})
  this.route('logout', {path: '/logout'})

  this.resource('users', function() {
    this.route('edit', {path: '/:id'})
  })
}
