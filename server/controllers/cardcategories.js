const Category = require('../models').Category;

module.exports = {

  create(req, res) {
    return Category
      .findOrCreate({
        name: req.body.name,
      })
      .then(card => res.status(201).send(card))
      .catch(error => res.status(400).send(error));
  },

};
