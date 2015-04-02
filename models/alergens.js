"use strict";
module.exports = function(sequelize, DataTypes) {
  var alergen = sequelize.define("alergens", {
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
  return alergen;
};
