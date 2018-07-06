
const incomeHandler = require('../services/incomeServiceHandler');

const saveAndCompute = (req, res) => {
  console.log('body',req.body);
  const { income, fullIncome, superAnnuationRate, year } = req.body
  if(!year || !superAnnuationRate) {
    res.status(500).json('Missing parameters')
  }
  console.log('income',income);
  if(income) {
    return incomeHandler.handleIncome(income,superAnnuationRate,year);
  } else {
    return incomeHandler.handleFullIncome(fullIncome,superAnnuationRate,year)
  }
}

module.exports= { saveAndCompute}