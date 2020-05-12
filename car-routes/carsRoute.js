const express = require("express");
const db = require("../data/config-db");
const { validateId, validateBody } = require("../middlewares/validate");

const route = express.Router();

route.post("/", validateBody, (req, res) => {
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

route.get("/:id", validateId, (req, res) => {
  res.status(200).json(req.car);
});

route.put("/:id", validateId, validateBody, (req, res) => {
  const { id } = req.params;
  db("dealer")
    .where({ id })
    .update(req.body)
    .then((car) => {
      res.status(200).json(car);
    })
    .catch((err) => {
      res
        .status(500)
        .json({ errorMessage: "there was an error trying to update car" });
    });
});

route.delete("/:id", validateId, (req, res) => {
  const { id } = req.params;
  db("dealer")
    .where({ id })
    .del()
    .then((car) => {
      res.status(200).json(car);
    })
    .catch((err) => {
      res
        .status(500)
        .json({ errorMessage: "the was an error deleting the car" });
    });
});
module.exports = route;
