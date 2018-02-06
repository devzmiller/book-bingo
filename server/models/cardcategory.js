'use strict';
module.exports = (sequelize, DataTypes) => {
  const CardCategory = sequelize.define('CardCategory', {
    card_id: {
      type: DataTypes.INT,
      allowNull: false,
    },
    category_id: {
      type: DataTypes.INT,
      allowNull: false,
    },
  });

  CardCategory.associate = (models) => {
    CardCategory.belongsTo(models.Card, {
      foreignKey: 'card_id',
      onDelete: 'CASCADE',
    });
    CardCategory.belongsTo(models.Category, {
      foreignKey: 'category_id',
      onDelete: 'CASCADE',
    });
  };

  return CardCategory;
};
