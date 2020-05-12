exports.up = function (knex) {
  return knex.schema.createTable("dealer", (table) => {
    table.increments();
    table.string("VIN", 255).notNullable().unique();
    table.string("make", 128).notNullable();
    table.string("model", 128).notNullable();
    table.integer("mileage").notNullable();
    table.string("transmition_type", 128);
    table.string("status", 128);
  });
};

exports.down = function (knex) {
  return knex.schema.dropTableIfExists("dealer");
};
