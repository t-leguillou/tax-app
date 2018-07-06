const mongoose = require('mongoose');
const TaxSchema = new mongoose.Schema({
  tax: {
    type: Object,
    unique: true,
    required: true
  },
});
const Tax = mongoose.model('Tax', TaxSchema);
module.exports = Tax;