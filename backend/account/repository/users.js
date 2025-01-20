const { User, Role } = require("../models");

const findAll = async () => {
  return User.findAll({
    attributes: { exclude: ["password"] },
    include: {
      model: Role,
      as: "role",
      attributes: ["id", "name"],
    },
  });
};

const findById = async (id) => {
  return await User.findByPk(id, {
    attributes: { exclude: ["password"] },
    include: {
      model: Role,
      as: "role",
      attributes: ["id", "name"],
    },
  });
};

const findByEmail = async (email) => {
  return await User.findOne({
    where: {
      email: email,
    },
    include: {
      model: Role,
      as: "role",
      attributes: ["id", "name"],
    },
  });
};

const create = async (userData) => {
  return await User.create(userData);
};

const update = async (id, userData) => {
  return await User.update(
    {
      ...userData,
    },
    {
      where: {
        id: id,
      },
    }
  );
};

const destroy = async (id) => {
  await User.destroy({
    where: {
      id,
    },
  });
};

module.exports = { findAll, findById, findByEmail, create, update, destroy };
