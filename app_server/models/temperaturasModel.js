const mongoose = require('mongoose');


const TemperaturaSchema = new mongoose.Schema({
  value:    { type: Number, require: true },
  created: { type: Date, default: Date.now  }
} ,{
  collection : 'temperaturas'
}) ;



module.exports = mongoose.model('Temperaturas',TemperaturaSchema);

