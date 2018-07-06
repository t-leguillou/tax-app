
const incomeHandler = require('../services/incomeServiceHandler');

const saveAndCompute = (req, res) => {
  console.log('body',req.body);
  const { income, fullIncome, superAnnuationRate, year } = req.body
  if(!year || !superAnnuationRate) {
    res.status(500).json('Missing parameters')
  }
  let tax = {};
  if(income) {
    tax = incomeHandler.handleIncome(income,superAnnuationRate,year)
  } else {
    tax = incomeHandler.handleFullIncome(fullIncome,superAnnuationRate,year)
  }
  console.log('tax computed',tax);
  return incomeHandler.saveTaxes(tax)
    .then(() => {
      return res.json(tax);
    })
}

module.exports= { saveAndCompute }