require("dotenv/config");

const express = require("express");
const db = require("./config/database");
const apiRoutes = require("./api/routes/index");
const morgan = require("morgan");
const { handleError } = require("./helpers/error");

const Application = require("./Application");

const app = new Application({
  server: express,
  database: db,
  morgan,
  routes: {
    api: apiRoutes,
  },
  handleError,
});

app.initialize();