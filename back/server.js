const express = require('express')
const mongoose = require('mongoose')
const router = require('./router/router')
const bodyParser = require('body-parser')
const cors = require('cors')
const tokenValidator = require('./validators/tokenValidator')
const cookieParser = require('cookie-parser')
mongoose.connect('mongodb://localhost:27017/taxCalculator')
const app = express()

app.use(bodyParser.json())
app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.use(cors())
app.use('/', tokenValidator.verifyToken, router)
app.use(cookieParser())

app.use(function (req, res, next) {
  res.status(404).json(new Error('not found'))
})

app.listen(5000, function () {
  console.log('Dev app listening on port 5000!')
})
