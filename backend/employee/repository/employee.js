const { Employee, Department, Position } = require("../models");

const findAll = async () => {
  return Employee.findAll({
    include: [
      {
        model: Department,
        as: "department",
      },
      {
        model: Position,
        as: "position",
      },
    ],
  });
};

const findById = async (id) => {
  return await Employee.findByPk(id, {
    include: [
      {
        model: Department,
        as: "department",
      },
      {
        model: Position,
        as: "position",
      },
    ],
  });
};

const create = async (EmployeeData) => {
  return await Employee.create(EmployeeData);
};

const update = async (id, EmployeeData) => {
  return await Employee.update(
    {
      ...EmployeeData,
    },
    {
      where: {
        id: id,
      },
    }
  );
};

const destroy = async (id) => {
  await Employee.destroy({
    where: {
      id,
    },
  });
};

const findByUserId = async (userId) => {
  return await Employee.findOne({
    where: {
      user_id: userId,
    },
    include: [
      {
        model: Department,
        as: "department",
      },
      {
        model: Position,
        as: "position",
      },
    ],
  });
};

module.exports = { findAll, findById, findByUserId, create, update, destroy };
