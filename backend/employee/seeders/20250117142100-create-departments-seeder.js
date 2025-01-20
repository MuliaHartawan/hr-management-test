"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    return queryInterface.bulkInsert("departments", [
      {
        name: "Human Resources",
        description: "Handles employee relations, payroll, and recruitment.",
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        name: "Finance",
        description: "Manages company finances, budgets, and accounts.",
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        name: "Research and Development",
        description: "Focuses on developing new products and services.",
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        name: "Marketing",
        description: "Responsible for advertising and market research.",
        created_at: new Date(),
        updated_at: new Date(),
      },
    ]);
  },

  async down(queryInterface, Sequelize) {
    return queryInterface.bulkDelete("departments", null, {});
  },
};
