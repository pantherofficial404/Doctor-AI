const mongoose = require("mongoose");
const schemaOptions = require("./SchemaOptions");

const HospitalSchema = new mongoose.Schema(
  {
    hospitalName: {
      type: mongoose.Schema.Types.String,
      require: true
    },
    address: {
      type: mongoose.Schema.Types.String,
      require: true
    },
    thumbnailImage: {
      type: mongoose.Schema.Types.String,
      require: true
    },
    description: {
      type: mongoose.Schema.Types.String,
      require: true
    },
    rating: {
      type: mongoose.Schema.Types.Number,
      require: false
    },
    websiteUrl: {
      type: mongoose.Schema.Types.String,
      require: true
    },
    location: {
      type: {
        type: mongoose.Schema.Types.String
      },
      coordinates: [mongoose.Schema.Types.Number]
    },
    category: {
      type: [mongoose.Schema.Types.String],
      require: true
    },
    doctors: {
      type: [mongoose.Schema.Types.ObjectId],
      ref: "Doctor"
    },
    mobileNo: {
      type: [mongoose.Schema.Types.Number],
      required: false
    }
  },
  schemaOptions
);

HospitalSchema.index(
  { location: "2dsphere", hospitalName: 1 },
  { background: true }
);
module.exports = mongoose.model("Hospital", HospitalSchema);
