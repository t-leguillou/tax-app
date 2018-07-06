const express = require('express')
const router = express.Router()

const computeTaxesController = require('../controllers/computeTaxesController')

router.post('/tax', computeTaxesController.saveAndCompute)

module.exports = router