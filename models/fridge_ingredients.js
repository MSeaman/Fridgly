"use strict";
module.exports = function(sequelize, DataTypes) {
  var fridge_ingredients = sequelize.define("fridge_ingredients", {
    name: DataTypes.STRING,
    user_id: DataTypes.INTEGER,
    ingredient_class: DataTypes.STRING
  }, {
    classMethods: {
      associate: function(models) {
        fridge_ingredients.belongsTo(models.users, { foreignKey: 'user_id'});
      }
    }
  });
  return fridge_ingredients;
};
