const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let Unit = new Schema({
  unit_name: { type: String},
  unit_price: {type: Number}
}, {
  collection: 'units'
});

module.exports = mongoose.model('Unit', Unit);
