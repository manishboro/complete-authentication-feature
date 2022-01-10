const express = require("express");
const cors = require("cors");

const app = express();

app.use(express.json(), cors());

app.get("/", (req, res) =>
  res.send("<h1>Welcome to complete authentication feature series</h1>")
);

module.exports = app;
