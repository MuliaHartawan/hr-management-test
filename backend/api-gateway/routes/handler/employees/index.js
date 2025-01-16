const findAll = require("./findAllEmployee");
const findOne = require("./findOneEmployee");
const create = require("./createEmployee");
const update = require("./updateEmployee");
const destroy = require("./deleteEmployee");

module.exports = {
  findAll,
  findOne,
  create,
  update,
  destroy,
};
