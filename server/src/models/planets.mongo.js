const mongoose = require("mongoose");

const planetsSchema = new mongoose.Schema({
  keplerNmae: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model("Planet", planetsSchema);
