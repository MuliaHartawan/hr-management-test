"use strict";
const bcrypt = require("bcrypt");

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    const hashedPassword = await bcrypt.hash("password", 10);

    await queryInterface.bulkInsert("users", [
      {
        id: 1,
        role_id: 1,
        email: "hrd1@example.com",
        password: hashedPassword,
        is_active: true,
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        id: 2,
        role_id: 1,
        email: "hrd2@example.com",
        password: hashedPassword,
        is_active: true,
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        id: 3,
        role_id: 2,
        email: "staff1@example.com",
        password: hashedPassword,
        is_active: true,
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        id: 4,
        role_id: 2,
        email: "staff2@example.com",
        password: hashedPassword,
        is_active: true,
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        id: 5,
        role_id: 2,
        email: "staff3@example.com",
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
