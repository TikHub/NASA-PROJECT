const mongoose = require("mongoose");

const launchesSchema = new mongoose.Schema({
  flightNumber: {
    type: Number,
    required: true,
  },
  mission: {
    type: String,
    required: true,
  },
  rocket: {
    type: String,
    required: true,
  },
  launchDate: {
    type: Date,
    required: true,
  },
  target: {
    type: String,
    required: true,
  },
  customer: [String],
  upcoming: {
    type: Boolean,
    required: true,
  },
  success: {
    type: Boolean,
    required: true,
    default: true,
  },
});

// NOTE First argument should be singular name of the collection, that this model represents
//  Mongoose will take the first argument, lowercase it,
//  make it plural and talk to the collection with that name

// Connect launches schema with the "launches" collection
module.exports = mongoose.model("Launch", launchesSchema);
