const taxArray = require('../data_year/2016.json');
const Tax = require('../model/taxModel');

const handleIncome = (income, superAnnuation, year) => {
  const taxPaid = computeTaxes(income, year)
  const netIncome = income - taxPaid;
  const superAnnuationAmount = computeSuperAnnuationAmount(superAnnuation, income)
  const tax = {
    income: incomne,
    superAnnuationRate : superAnnuation,
    superAnnuationAmount: superAnnuationAmount,
    taxPaid: taxPaid,
    fullIncome: income + superAnnuation,
    netIncome: netIncome,
    netSuper: netIncome + superAnnuationAmount
  }
  return tax
}

const handleFullIncome = (fullIncome, superAnnuation, year) => {
  let income = computeGrossBasedOnAnnuationAndTotal(superAnnuation,fullIncome)
  const taxPaid = computeTaxes(income, year)
  const netIncome = income - taxPaid;
  const superAnnuationAmount = computeSuperAnnuationAmount(superAnnuation, income)
  const tax = {
    income : income,
    superAnnuationRate : superAnnuation,
    superAnnuationAmount: fullIncome - superAnnuation,
    taxPaid: computeTaxes(income, year),
    fullIncome: fullIncome,
    netIncome: income - taxPaid,
    netSuper: netIncome + superAnnuationAmount
  }
  console.log(tax);
  return tax
}

const computeSuperAnnuationAmount = (superAnnuation, income) => {
  return superAnnuation * income
}

const computeGrossBasedOnAnnuationAndTotal = (superAnnuation, fullIncome) => {
  return (fullIncome / (1 + superAnnuation))
}

const computeTaxes = (income, year) => {
  if (year === '2016') {
    let taxPaid = 0
    let lastMaxAmount = 0
    for (let [maxAmount, rate] of Object.entries(taxArray)) {
      const maxPossibleInThisRate = income - parseInt(maxAmount, 10)
      if (maxPossibleInThisRate >= 0) {
        taxPaid += (parseInt(maxAmount, 10) - lastMaxAmount) * rate
        lastMaxAmount = parseInt(maxAmount, 10)
      } else {
        taxPaid += (income - lastMaxAmount) * rate
        break
      }
    }
    console.log('taxPaid', taxPaid)
    return taxPaid
  } else {
    throw new Error('no data for this year')
  }
}

const saveTaxes = (tax) => {
  const saveInstance = new Tax(tax);
  return saveInstance.save();
}

module.exports = {
  handleIncome,
  handleFullIncome,
  computeSuperAnnuationAmount,
  computeGrossBasedOnAnnuationAndTotal,
  computeTaxes,
  saveTaxes
}