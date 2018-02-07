'use strict';
module.exports = (sequelize, DataTypes) => {
  const Card = sequelize.define('Card', {
    name: DataTypes.STRING,
    user_id: DataTypes.INT
  });

  Card.associate = (models) => {
    Card.belongsToMany(models.Category, { through: 'CardCategories', as: 'category' });
  };

  return Card;

};
