const express = require("express");
const path = require("path");
const cors = require("cors");
const morgan = require("morgan");
const fs = require("fs");
// const rfs = require("rotating-file-stream");

const planetsRouter = require("./routes/planets/planets.router");
const launchesRouter = require("./routes/launches/launches.routes");

const app = express(); // Setup Express application

// TODO Implement Whitelist, CORS error in case of running "npm run watch" in common package.json
// const whitelist = ["http://localhost:3000"];
app.use(
  cors({
    origin: "http://localhost:3000", // Allow CORS from this URL (Origin)
    // origin: function (origin, callback) {
    //   if (whitelist.indexOf(origin) !== -1) {
    //     callback(null, true);
    //   } else {
    //     callback(new Error("Not allowed by CORS"));
    //   }
    // },
  })
);

// ROTATION
// const accessLogStream = rfs.createStream("rotation.log", {
//   interval: "20s",
//   path: path.join(__dirname, "..", "logs"),
// });
// app.use(
//   morgan("combined", {
//     stream: accessLogStream,
//   })
// );

// CREATE WRITE STREAM
// app.use(
//   morgan("combined", {
//     stream: fs.createWriteStream(path.join(__dirname, "..", "access.log"), {
//       flags: "a",
//     }),
//   })
// );

app.use(express.json());

app.use(express.static(path.join(__dirname, "..", "public")));

app.use(planetsRouter);
app.use(launchesRouter);

app.get("/*", (req, res) => {
  res.sendFile(path.join(__dirname, "..", "public", "index.html"));
});

module.exports = app;
