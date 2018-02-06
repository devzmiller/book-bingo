'use strict';
module.exports = (sequelize, DataTypes) => {
  const Card = sequelize.define('Card', {
    name: DataTypes.STRING,
    user_id: DataTypes.INT
  });

  Card.associate = (models) => {
    Card.hasMany(models.CardCategory, {
      foreignKey: 'card_id',
      as: 'cardCategories',
    });
  };

  return Card;

};
