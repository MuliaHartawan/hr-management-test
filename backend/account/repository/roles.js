const { Role } = require("../models");

const findAll = async () => {
  return Role.findAll();
};

const findById = async (id) => {
  return await Role.findByPk(id);
};

const findOne = async () => {
  return await Role.findOne();
};

const create = async (RoleData) => {
  return await Role.create(RoleData);
};

const update = async (id, RoleData) => {
  return await Role.update(
    {
      ...RoleData,
    },
    {
      where: {
        id: id,
      },
    }
  );
};

const destroy = async (id) => {
  await Role.destroy({
    where: {
      id,
    },
  });
};

module.exports = { findAll, findById, findOne, create, update, destroy };
