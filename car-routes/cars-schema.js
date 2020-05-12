const db = require("../data/config-db");

function find() {
  return db("dealer");
}

function add(body) {
  return db("dealer").insert(body, "id");
}

function findById(id) {
  return db("dealer").where({ id }).first();
}

function update(id, body) {
  return db("dealer").where({ id }).update(body);
}

function remove(id) {
  return db("dealer").where({ id }).del();
}
module.exports = {
  find,
  findById,
  update,
  remove,
  add,
};
