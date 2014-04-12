const hash = require('../transforms/password-to-hash')

module.exports = function(sequelize, DataTypes) {
  const attributes = {
    "id": {
      "type": DataTypes.UUID,
      "allowNull": false,
      "primaryKey": true
    },
    "email": {
      "type": DataTypes.STRING(255),
      "allowNull": false,
      "validate": {"isEmail": true}
    },
    "password": {
      "type": DataTypes.STRING(255),
      "allowNull": false
    },
    "name": {
      "type": DataTypes.STRING(255),
      "allowNull": true,
      "defaultValue": null
    },
    "createdAt": {
      "type": DataTypes.DATE,
      "allowNull": false
    },
    "updatedAt": {
      "type": DataTypes.DATE,
      "allowNull": false
    },
  }

  var User = sequelize.define('User', attributes, {
    tableName: 'users',
    classMethods: {
      findWithPassword: function(data) {
        var query = {
          where: {
            email: data.email,
            password: hash(data.password)
          }
        }
        return User.find(query)
      }
    }
  })

  User.beforeCreate(require('../transforms/before-create'))
  User.beforeUpdate(require('../transforms/before-update'))

  return User
};
