"use strict";
module.exports = function(sequelize, DataTypes) {
  var users = sequelize.define("users", {
    name: DataTypes.STRING,
    allergy: DataTypes.STRING
  }, {
    timestamps: false,
    classMethods: {
      associate: function(models) {
        users.hasMany(models.pantry_ingredients, {
          foreignKey: 'user_id',
          onDelete: 'cascade',
          hooks: true
        });
        users.hasMany(models.fridge_ingredients, {
          foreignKey: 'user_id',
          onDelete: 'cascade',
          hooks: true
        });
      }
    }
  });
  return users;
};