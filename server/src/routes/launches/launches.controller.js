const { launches } = require("../../models/launches.model");

function getAllLaunches(req, res) {
  return res.status(200).json(Array.from(launches.values())); // Turns the iterable 'launches.values()' into an array, containing all of that values
}

module.exports = {
  getAllLaunches,
};
