const mongoose = require('mongoose');
const schemaOptions = require('./SchemaOptions');

const PatientSchema = new mongoose.Schema({
  patientName: {
    type: mongoose.Schema.Types.String,
    require: false,
  },
  age: {
    type: mongoose.Schema.Types.Number,
    require: false,
  },
  contactNumber: {
    type: mongoose.Schema.Types.Number,
    require: false,
  },
  diseaseDescription: {
    type: mongoose.Schema.Types.String,
    require: false,
  },
  hospitalId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Hospital',
  }
}, schemaOptions);

module.exports = mongoose.model('Patient', PatientSchema);