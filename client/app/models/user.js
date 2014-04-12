var attr = DS.attr

module.exports = DS.Model.extend({
  email: attr('string'),
  name: attr('string'),
  created: attr('string'),
  modified: attr('string')
})
