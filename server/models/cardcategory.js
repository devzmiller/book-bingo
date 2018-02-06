'use strict';
module.exports = (sequelize, DataTypes) => {
  var CardCategory = sequelize.define('CardCategory', {
    card_id: DataTypes.INT,
    category_id: DataTypes.INT
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      }
    }
  });
  return CardCategory;
};