const express = require("express");
const carsRoute = require("../car-routes/carsRoute");

const server = express();

server.use(express.json());

server.use("/api/cars", carsRoute);

module.exports = server;
