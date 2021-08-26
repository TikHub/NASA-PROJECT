const express = require("express");
const path = require("path");
const cors = require("cors");

const planetsRouter = require("./routes/planets/planets.router");

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
app.use(express.json());

app.use(express.static(path.join(__dirname, "..", "public")));

app.use(planetsRouter);

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "..", "public", "index.html"));
});

module.exports = app;
