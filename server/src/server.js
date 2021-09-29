const http = require("http");
const mongoose = require("mongoose");
const app = require("./app");
const { loadPlanetsData } = require("./models/planets.model");

// Use environment variable PORT (PORT=XXXX in packages.json -> scripts -> [SCRIPT]) or 8000
const PORT = process.env.PORT || 8000;

const MONGO_URL =
  "mongodb+srv://nasa-api:6gP2vZg40L0Nbcju@nasacluster.dg9ud.mongodb.net/nasa?retryWrites=true&w=majority";

const server = http.createServer(app);

// Check connection status
// Will execute once
mongoose.connection.once("open", () => {
  console.log("MongoDB connection ready!");
});

// Error
mongoose.connection.on("error", (err) => {
  console.error(err);
});

// NOTE useNewUrlParser, useUnifiedTopology, useFindAndModify, and useCreateIndex are no longer supported options.
//  Mongoose 6 always behaves as if useNewUrlParser, useUnifiedTopology, and useCreateIndex are true, and useFindAndModify is false.
//  Please remove these options from your code.
async function startServer() {
  await mongoose.connect(MONGO_URL, {
    // To use the latest features in Mongoose and the _mongo driver, specify the 4 parameters below (< v.6)
    // useNewUrlParser: true, // Detetermines how Mongoose parses connection string
    // useFindAndModify: false, // Disables the outdated way of updating data
    // useCreateIndex: true, // Use createIndex function rather than old ensureIndex function
    // useUnifiedTopology: true, // Use the updated way of talking with clusters of Mongo databases
  });
  await loadPlanetsData();

  // listen function for Express is exactly the same as listen function for server (http.createServer())
  // So it is possible to separate Express functionality (app.js) from server (server.js) in separate files
  server.listen(PORT, () => {
    console.log(`Listening on port ${PORT}...`);
  });
}

startServer();
