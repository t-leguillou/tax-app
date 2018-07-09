const Tax = require('../model/taxModel');

const getTaxHistory = (req, res) => {
  Tax.find({}, (err, data) => {
    if (err) {
      console.log(err);
      res.status(500);
    }
    res.status(200).send(data);
  });
}

module.exports = {getTaxHistory}