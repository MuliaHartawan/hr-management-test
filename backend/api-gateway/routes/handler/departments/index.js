const findAll = require("./findAllDepartment");
const findOne = require("./findOneDepartment");
const create = require("./createDepartment");
const update = require("./updateDepartment");
const destroy = require("./deleteDepartment");

module.exports = {
  findAll,
  findOne,
  create,
  update,
  destroy,
};
