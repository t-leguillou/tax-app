const express = require('express')
const router = express.Router()

const computeTaxesController = require('../controllers/computeTaxesController')
const loginController = require('../controllers/loginController')

router.post('/tax', computeTaxesController.saveAndCompute)
router.post('/login', loginController.login)

module.exports = router