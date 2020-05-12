exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex("sales").insert([
    { car_id: 1 },
    { car_id: 1 },
    { car_id: 2 },
    { car_id: 3 },
    { car_id: 4 },
    { car_id: 5 },
    { car_id: 6 },
    { car_id: 7 },
    { car_id: 8 },
    { car_id: 9 },
    { car_id: 10 },
    { car_id: 11 },
    { car_id: 12 },
  ]);
};
