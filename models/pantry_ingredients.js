"use strict";
module.exports = function(sequelize, DataTypes) {
  var pantry_ingredients = sequelize.define("pantry_ingredients", {
    name: DataTypes.STRING,
    user_id: DataTypes.INTEGER,
    ingredient_class: DataTypes.STRING
  }, {
    timestapms: false,
    classMethods: {
      associate: function(models) {
        pantry_ingredients.belongsTo(models.users, {
          foreignKey: 'user_id'
        });
      },
    }
  });
  return pantry_ingredients;
};