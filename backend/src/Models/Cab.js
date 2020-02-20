const mongoose = require('mongoose');
const schemaOptions = require('./SchemaOptions');

const DoctorSchema = new mongoose.Schema({
  driverName: {
    type: mongoose.Schema.Types.String,
    require: false,
  },
  thumbnailImage: {
    type: mongoose.Schema.Types.String,
    require: false,
  },
  description: {
    type: mongoose.Schema.Types.String,
    require: false,
  },
  rating: {
    type: mongoose.Schema.Types.Number,
    require: false,
  },
  cabsBooked: {
    type: mongoose.Schema.Types.Number,
    require: false,
    default: 0,
  },
}, schemaOptions);

module.exports = mongoose.model('Cab', DoctorSchema);