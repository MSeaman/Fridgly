"use strict";
module.exports = {
  up: function(migration, DataTypes, done) {
    migration.createTable("holidays", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER
      },
      name: {
        type: DataTypes.STRING
      },
      api_search_param: {
        type: DataTypes.STRING
      }
    }).done(done);
  },
  down: function(migration, DataTypes, done) {
    migration.dropTable("holidays").done(done);
  }
};
