const express = require("express");
const server = express();
const cors = require('cors');
const morgan = require("morgan");
const router = require("./routes/index");
require("dotenv").config();

const PORT = process.env.PORT || 3002;

server.use(express.json());
server.use(morgan("dev"));
server.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Credentials", "true");
  res.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});
server.use("/rickandmorty", router);

server.listen(PORT, () => {
  console.log("Server raised on port ", PORT);
});
