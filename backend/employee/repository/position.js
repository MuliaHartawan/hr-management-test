const { Position, Department } = require("../models");

const findAll = async () => {
  return Position.findAll({
    include: {
      model: Department,
      as: "department",
    },
  });
};

const findById = async (id) => {
  return await Position.findByPk(id, {
    include: {
      model: Department,
      as: "department",
    },
  });
};

const create = async (PositionData) => {
  return await Position.create(PositionData);
};

const update = async (id, PositionData) => {
  return await Position.update(
    {
      ...PositionData,
    },
    {
      where: {
        id: id,
      },
    }
  );
};

const destroy = async (id) => {
  await Position.destroy({
    where: {
      id,
    },
  });
};

module.exports = { findAll, findById, create, update, destroy };
