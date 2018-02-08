const express = require('express');
const logger = require('morgan');
const bodyParser = require('body-parser');
require('dotenv').config();
const MongoClient = require('mongodb').MongoClient;
const ObjectId = require('mongodb').ObjectId;

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
  db.collection('cards').insertOne({
    "title": req.body.title,
    "creator_id": req.body.creator_id,
    "categories": req.body.categories
  }).then((cards) => res.send(cards.ops[0]))
})

app.get('/cards', (req, res) => {
  db.collection('cards').find().toArray((err, cards) => res.send(cards))
})

app.get('/cards/:cardId', (req, res) => {
  db.collection('cards').findOne({"_id": ObjectId(req.params.cardId)}).then((card) => res.send(card));
})

app.post('/cards/:cardId/books', (req, res) => {
  db.collection('books').insertOne({
    "card_id": ObjectId(req.params.cardId),
    "category": req.body.category,
    "title": req.body.title
  }).then((books) => res.send(books.ops[0]))

})

app.get('/', (req, res) => res.status(200).send({
  message: 'Hello World!',
}));


module.exports = app;
