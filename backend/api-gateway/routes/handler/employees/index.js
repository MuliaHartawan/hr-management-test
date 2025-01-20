const findAll = require("./findAllEmployee");
const findOne = require("./findOneEmployee");
const create = require("./createEmployee");
const update = require("./updateEmployee");
const destroy = require("./deleteEmployee");
const findByUser = require("./findEmployeeByUser");

module.exports = {
  findAll,
  findOne,
  create,
  update,
  destroy,
  findByUser,
};
