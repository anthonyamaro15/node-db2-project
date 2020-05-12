exports.seed = function (knex) {
  // Deletes ALL existing entries

  // Inserts seed entries
  return knex("dealer").insert([
    { VIN: "845fdfdf544dff", make: "honda", model: "civic", mileage: 1441 },
    { VIN: "845f544dff", make: "honda", model: "civic", mileage: 1441 },
    {
      VIN: "4545dfdfdf54fd",
      make: "nissan",
      model: "sentra",
      mileage: 1441,
    },
    { VIN: "845dffdfdf4dff", make: "nissan", model: "GTR", mileage: 11 },
    {
      VIN: "845fdfdf5fdfdff",
      make: "toyota",
      model: "camry",
      mileage: 141,
    },
    { VIN: "845fdfdf5dddf", make: "toyota", model: "corola", mileage: 441 },
    {
      VIN: "845fdfdfafdfadff",
      make: "lexus",
      model: "gs",
      mileage: 1441,
    },
    {
      VIN: "845fdfdffdf44dff",
      make: "nissan",
      model: "maxima",
      mileage: 1441,
    },
    { VIN: "845fddff544dff", make: "honda", model: "civic", mileage: 441 },
    {
      VIN: "8dfffdfdf544dff",
      make: "honda",
      model: "civic",
      mileage: 144,
      status: "clean",
    },
    {
      VIN: "845dfdffdf544dff",
      make: "honda",
      model: "civic coupe",
      mileage: 141,
      status: "clean",
    },
    {
      VIN: "845fdfdasg4dff",
      make: "honda",
      model: "accord",
      mileage: 141,
      status: "salvage",
    },
  ]);
};
