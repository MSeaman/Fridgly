"use strict";
module.exports = function(sequelize, DataTypes) {
  var diet = sequelize.define("diets", {
    name: DataTypes.STRING,
    api_search_param: DataTypes.STRING
  }, {
    timestamps: false,
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      }
    }
  });
  return diet;
};
