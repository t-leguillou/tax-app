const express = require('express')
const router = express.Router()

const computeTaxesController = require('../controllers/computeTaxesController')
const loginController = require('../controllers/loginController')
const taxHistoryController = require('../controllers/taxHistoryController')

router.post('/tax', computeTaxesController.saveAndCompute)
router.post('/login', loginController.login)
router.get('/history', taxHistoryController.getTaxHistory)

module.exports = router