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
    Category.belongsToMany(models.Card, { through: 'CardCategories', as: 'cards' });
  };

  return Category;
};
