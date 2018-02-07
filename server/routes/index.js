const cardsController = require('../controllers').cards;

module.exports = (app) => {
  app.get('/api', (req, res) => res.status(200).send({
    message: 'Welcome to the Bingo API!',
  }));

  app.post('/api/cards', cardsController.create);
  app.get('/api/cards', cardsController.list);
}
