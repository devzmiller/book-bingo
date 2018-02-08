const express = require('express');
const logger = require('morgan');
const bodyParser = require('body-parser');
const MongoClient = require('mongodb').MongoClient;
require('dotenv').config();

MongoClient.connect(`mongodb://${process.env.DB_USER}:${process.env.DB_PASSWORD}@ds053320.mlab.com:53320/book-bingo`, (err, database) => {

});

const app = express()

app.use(logger('dev'));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

app.get('/', (req, res) => res.status(200).send({
  message: 'Hello World!',
}));

module.exports = app;
