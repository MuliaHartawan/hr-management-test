const findAll = require("./findAllUser");
const findOne = require("./findOneUser");
const create = require("./createUser");
const update = require("./updateUser");
const destroy = require("./deleteUser");

module.exports = {
  findAll,
  findOne,
  create,
  update,
  destroy,
};
