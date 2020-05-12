const express = require("express");
const db = require("../data/config-db");

const route = express.Router();

route.post("/", (req, res) => {
  db("dealer")
    .insert(req.body, "id")
    .then((car) => {
      res.status(201).json(car);
    })
    .catch((err) => {
      res
        .status(500)
        .json({ errorMessage: "there was an error trying to add a car" });
    });
});

route.get("/", (req, res) => {
  db("dealer")
    .then((cars) => {
      res.status(200).json(cars);
    })
    .catch((err) => {
      res.status(500).json({ errorMessage: "there was an error getting cars" });
    });
});

route.get("/:id", (req, res) => {
  const { id } = req.params;
  db("dealer")
    .where({ id })
    .first()
    .then((car) => {
      res.status(200).json(car);
    })
    .catch((err) => {
      res
        .status(500)
        .json({ errorMessage: "there was an error finding the car" });
    });
});

module.exports = route;
