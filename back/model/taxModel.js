const mongoose = require('mongoose');
const Tax = new mongoose.Schema({
  superAnnuationRate: 'number',
  superAnnuationAmount: 'number',
  income: 'number',
  taxPaid: 'number',
  netIncome: 'number',
  netSuper: 'number',
  fullIncome: 'number',
});
module.exports = mongoose.model('Tax', Tax);