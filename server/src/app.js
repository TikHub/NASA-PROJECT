const express = require("express");

const planetsRouter = require("./routes/planets/planets.router");

const app = express(); // Setup Express application

app.use(express.json());

app.use(planetsRouter);

module.exports = app;
