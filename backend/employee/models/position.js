"use strict";

module.exports = (sequelize, DataTypes) => {
  const Position = sequelize.define(
    "Position",
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
      department_id: {
        type: DataTypes.INTEGER,
        references: {
          model: "departments",
          key: "id",
        },
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
      tableName: "positions",
      timestamps: false,
    }
  );

  Position.associate = (models) => {
    Position.belongsTo(models.Department, {
      foreignKey: "department_id",
      as: "department",
    });
  };

  return Position;
};
