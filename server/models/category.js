'use strict';
module.exports = (sequelize, DataTypes) => {
  const Category = sequelize.define('Category', {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    default: {
      type: DataTypes.BOOLEAN,
      defaultValue: false,
    },
  });

  Category.associate = (models) => {
    Category.hasMany(models.CardCategory, {
      foreignKey: 'category_id',
      as: 'cardCategories',
    });
  };

  return Category;
};
