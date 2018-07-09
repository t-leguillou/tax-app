const assert = require('chai').assert
const sinon = require('sinon')
const incomeHandler = require('../../services/incomeServiceHandler');

describe('incomeServiceHandler', () => {
  it('should compute the super annuation amount', () => {
    const income = 10000;
    const superAnnuation = 0.095;
    const superAnnuationAmount = incomeHandler.computeSuperAnnuationAmount(superAnnuation,income)
    assert.equal(superAnnuationAmount, 950)
  });
  it('should compute the income based on superAnnuation and fullIncome', () => {
    const fullIncome = 10950;
    const superAnnuation = 0.095;
    const superAnnuationAmount = incomeHandler.computeGrossBasedOnAnnuationAndTotal(superAnnuation,fullIncome)
    assert.equal(superAnnuationAmount, 10000)
  });
  it('should pay no taxes if income is < 18000$ and year is 2016', () => {
    const income = 10950;
    const year = "2016";
    const taxes = incomeHandler.computeTaxes(income,year);
    assert.equal(taxes, 0)
  });
  it('should throw an error to get netValues if year != 2016', () => {
    const income = 10950;
    const year = "2017";
    assert.throws(incomeHandler.computeTaxes,Error)
  });
  it('should return the right amount of tax when < 18000 and year is 2016', () => {
    const year = "2016";
    const income = 100000;
    const taxPaid = incomeHandler.computeTaxes(income,year)
    assert.equal(24632,taxPaid);
  });
  it('should return the right amount of tax when > 18000 and year is 2016', () => {
    const year = "2016";
    const income = 200000;
    const taxPaid = incomeHandler.computeTaxes(income,year)
    assert.equal(63232,taxPaid);
  });
})