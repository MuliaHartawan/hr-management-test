const { Department } = require("../models");

const findAll = async () => {
  return Department.findAll();
};

const findById = async (id) => {
  return Department.findByPk(id);
};

const findByName = async (name) => {
  return Department.findOne({
    where: {
      name,
    },
  });
};

const create = async (DepartmentData) => {
  return Department.create(DepartmentData);
};

const update = async (id, DepartmentData) => {
  return Department.update(
    {
      ...DepartmentData,
    },
    {
      where: {
        id: id,
      },
    }
  );
};

const destroy = async (id) => {
  return Department.destroy({
    where: {
      id,
    },
  });
};

module.exports = { findAll, findById, findByName, create, update, destroy };
