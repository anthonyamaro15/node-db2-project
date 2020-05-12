const express = require("express");
const db = require("./cars-schema");
const { validateId, validateBody } = require("../middlewares/validate");

const route = express.Router();

route.post("/", validateBody, (req, res) => {
  db.add(req.body)
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
  db.find()
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
  db.update(id, req.body)
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
  db.remove(id)
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
