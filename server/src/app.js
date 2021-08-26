const express = require("express");
const cors = require("cors");

const planetsRouter = require("./routes/planets/planets.router");

const app = express(); // Setup Express application

const whitelist = ["http://localhost:3000"];
app.use(
  cors({
    // origin: "http://localhost:3000", // Allow CORS from this URL (Origin)
    origin: function (origin, callback) {
      if (whitelist.indexOf(origin) !== -1) {
        callback(null, true);
      } else {
        callback(new Error("Not allowed by CORS"));
      }
    },
  })
);
app.use(express.json());

app.use(planetsRouter);

module.exports = app;
