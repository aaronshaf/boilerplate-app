var Ember = require("ember")
var API_HOST = 'http://localhost:3002'

var App = Ember.Application.create({
  // LOG_ACTIVE_GENERATION: true,
  // LOG_MODULE_RESOLVER: true,
  // LOG_TRANSITIONS: true,
  // LOG_TRANSITIONS_INTERNAL: true,
  // LOG_VIEW_LOOKUPS: true
})

App.ApplicationAdapter = DS.RESTAdapter.extend({
  host: 'http://localhost:3002'
})

App.ApplicationSerializer = DS.ActiveModelSerializer.extend({})

// Routes
var routes = require("./config/routes")

App.initializer({
  name: "routes",
  initialize: function(container,application) {
    application.Router.map(routes)
  }
})

// Models
App.User = require("./models/user")
App.UsersRoute = require("./routes/users")
App.UsersEditRoute = require("./routes/users/edit")

module.exports = window.App = App
