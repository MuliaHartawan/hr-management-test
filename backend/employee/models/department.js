"use strict";

module.exports = (sequelize, DataTypes) => {
  const Department = sequelize.define(
    "Department",
    {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      name: {
        type: DataTypes.STRING(100),
        allowNull: false,
      },
      description: {
        type: DataTypes.TEXT,
        allowNull: true,
      },
      created_at: {
        type: DataTypes.DATE,
        defaultValue: DataTypes.NOW,
      },
      updated_at: {
        type: DataTypes.DATE,
        defaultValue: DataTypes.NOW,
      },
    },
    {
      tableName: "departments",
      timestamps: false,
    }
  );

  Department.associate = (models) => {
    Department.hasMany(models.Position, {
      foreignKey: "department_id",
      as: "positions",
    });
    Department.hasMany(models.Employee, {
      foreignKey: "department_id",
      as: "employees",
    });
  };

  return Department;
};
