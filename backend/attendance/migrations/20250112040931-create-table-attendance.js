"use strict";

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("attendances", {
      id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
      },
      employee_id: {
        type: Sequelize.INTEGER(11),
        allowNull: false,
      },
      date: {
        type: Sequelize.DATEONLY,
        allowNull: false,
      },
      clock_in: {
        type: Sequelize.DATE,
        allowNull: true,
      },
      clock_in_photo: {
        type: Sequelize.STRING(255),
        allowNull: true,
      },
      clock_in_location: {
        type: Sequelize.STRING(255),
        allowNull: true,
      },
      clock_out: {
        type: Sequelize.DATE,
        allowNull: true,
      },
      clock_out_photo: {
        type: Sequelize.STRING(255),
        allowNull: true,
      },
      clock_out_location: {
        type: Sequelize.STRING(255),
        allowNull: true,
      },
      status: {
        type: Sequelize.ENUM("PENDING", "APPROVED", "REJECTED"),
        defaultValue: "PENDING",
      },
      verified_by: {
        type: Sequelize.INTEGER(11),
        allowNull: true,
      },
      verified_at: {
        type: Sequelize.DATE,
        allowNull: true,
      },
      notes: {
        type: Sequelize.TEXT,
        allowNull: true,
      },
      created_at: {
        type: Sequelize.DATE,
        defaultValue: Sequelize.literal("CURRENT_TIMESTAMP"),
        allowNull: false,
      },
      updated_at: {
        type: Sequelize.DATE,
        defaultValue: Sequelize.literal("CURRENT_TIMESTAMP"),
        allowNull: false,
      },
    });
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable("attendances");
  },
};
