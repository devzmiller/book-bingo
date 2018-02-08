const Card = require('../models').Card;
const Category = require('../models').Category;

module.exports = {
  createCategory(category) {
    Category.findOrCreate({
      where: {
        name: category
      },
    })
    .then(foundCategory => foundCategory.dataValues);
  },

  create(req, res) {
    const categories = req.body.categories.split(", ");
    let categoryObjects = [];
    categories.forEach(category => {
      categoryObjects.push(module.exports.createCategory(category));
    });
    console.log(categoryObjects);
    return Card
      .create({
        name: req.body.name,
      })
      .then(card => res.status(201).send(card))
      .catch(error => res.status(400).send(error));
  },

  list(req, res) {
    return Card
    .all()
    .then(cards => res.status(200).send(cards))
    .catch(error => res.status(400).send(error));
  },
};
