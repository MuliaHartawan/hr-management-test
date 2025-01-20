"use strict";
const bcrypt = require("bcrypt");

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    const hashedPassword = await bcrypt.hash("password", 10);

    await queryInterface.bulkInsert("users", [
      {
        role_id: 1,
        email: "hrd@example.com",
        password: hashedPassword,
        is_active: true,
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        role_id: 2,
        email: "staff@example.com",
        password: hashedPassword,
        is_active: true,
        created_at: new Date(),
        updated_at: new Date(),
      },
    ]);
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("users", null, {});
  },
};
