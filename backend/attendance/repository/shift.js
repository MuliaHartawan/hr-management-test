const { Shift, Attendance } = require("../models");

const findAll = async () => {
  return Shift.findAll();
};

const findById = async (id) => {
  return await Shift.findByPk(id);
};

const findOne = async () => {
  return await Shift.findOne();
};

const create = async (ShiftData) => {
  return await Shift.create(ShiftData);
};

const update = async (id, ShiftData) => {
  return await Shift.update(
    {
      ...ShiftData,
    },
    {
      where: {
        id: id,
      },
    }
  );
};

const destroy = async (id) => {
  await Shift.destroy({
    where: {
      id,
    },
  });
};

module.exports = { findAll, findById, findOne, create, update, destroy };
