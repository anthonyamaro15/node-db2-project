const db = require("../data/config-db");

function validateId(req, res, next) {
  const { id } = req.params;

  db("dealer")
    .where({ id })
    .first()
    .then((car) => {
      if (car) {
        req.car = car;
        next();
      } else {
        res.status(404).json({ errorMessage: "Invalid id" });
      }
    })
    .catch((err) => {
      res
        .status(500)
        .json({ errorMessage: "there was an error getting the car" });
    });
}

function validateBody(req, res, next) {
  const { VIN, make, model, mileage } = req.body;
  if (!VIN || !make || !model || !mileage) {
    res.status(400).json({ errorMessage: "please enter values" });
  } else {
    next();
  }
}
module.exports = {
  validateId,
  validateBody,
};
