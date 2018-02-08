const express = require('express');
const logger = require('morgan');
const bodyParser = require('body-parser');
require('dotenv').config();
const MongoClient = require('mongodb').MongoClient;

let db;

MongoClient.connect(`mongodb://${process.env.DB_USER}:${process.env.DB_PASSWORD}@ds053320.mlab.com:53320/book-bingo`, (err, client) => {
  if (err) return console.log(err);
  db = client.db('book-bingo');
});

const app = express()

app.use(logger('dev'));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

app.post('/cards', (req, res) => {
  console.log(req.body.title)
  db.collection('cards').save({
    "title": req.body.title,
    "creator_id": req.body.creator_id,
    "categories": req.body.categories
  })
  db.collection('cards').findOne({
    $and: [
      {"title": req.body.title}, {"creator_id": req.body.creator_id}
    ]
  }).then((card) => res.send(card));
})

app.get('/', (req, res) => res.status(200).send({
  message: 'Hello World!',
}));


module.exports = app;
