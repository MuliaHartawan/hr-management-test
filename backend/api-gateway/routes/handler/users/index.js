const findAll = require("./findAllUser");
const findOne = require("./findOneUser");
const findMe = require("./findMeUser");
const create = require("./createUser");
const update = require("./updateUser");
const destroy = require("./deleteUser");

module.exports = {
  findAll,
  findOne,
  findMe,
  create,
  update,
  destroy,
};
