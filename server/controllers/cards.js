const Card = require('../models').Card;

module.exports = {
  create(req, res) {
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
