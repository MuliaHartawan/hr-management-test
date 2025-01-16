"use strict";

module.exports = (sequelize, DataTypes) => {
  const Attendance = sequelize.define(
    "Attendance",
    {
      id: {
        type: DataTypes.INTEGER(11),
        primaryKey: true,
        allowNull: false,
        autoIncrement: true,
      },
      employee_id: {
        type: DataTypes.INTEGER(11),
        allowNull: false,
      },
      date: {
        type: DataTypes.DATEONLY,
        allowNull: false,
      },
      clock_in: {
        type: DataTypes.DATE,
        allowNull: true,
      },
      clock_in_photo: {
        type: DataTypes.STRING(255),
        allowNull: true,
      },
      clock_in_location: {
        type: DataTypes.STRING(255),
        allowNull: true,
      },
      clock_out: {
        type: DataTypes.DATE,
        allowNull: true,
      },
      clock_out_photo: {
        type: DataTypes.STRING(255),
        allowNull: true,
      },
      clock_out_location: {
        type: DataTypes.STRING(255),
        allowNull: true,
      },
      status: {
        type: DataTypes.ENUM("PENDING", "APPROVED", "REJECTED"),
        defaultValue: "PENDING",
      },
      verified_by: {
        type: DataTypes.INTEGER(11),
        allowNull: true,
      },
      verified_at: {
        type: DataTypes.DATE,
        allowNull: true,
      },
      notes: {
        type: DataTypes.TEXT,
        allowNull: true,
      },
      created_at: {
        type: DataTypes.DATE,
        defaultValue: DataTypes.NOW,
        allowNull: false,
      },
      updated_at: {
        type: DataTypes.DATE,
        defaultValue: DataTypes.NOW,
        allowNull: false,
      },
    },
    {
      tableName: "attendances",
      timestamps: false,
    }
  );

  Attendance.associate = (models) => {};

  return Attendance;
};
