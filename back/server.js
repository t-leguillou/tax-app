const express = require('express');
const mongoose = require('mongoose');
const router = require('./router/router');
const bodyParser = require('body-parser')
const cors = require('cors')
mongoose.connect('mongodb://localhost:27017/taxCalculator');
const app = express();

app.use(bodyParser.json());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cors())
app.use('/', router);

app.use(function (req, res, next) {
  res.status(404).json(new Error('not found'))
})

// Listen to port 5000
app.listen(5000, function () {
  console.log('Dev app listening on port 5000!');
});
