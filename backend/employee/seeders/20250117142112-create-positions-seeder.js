"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    return queryInterface.bulkInsert("positions", [
      {
        name: "HR Manager",
        department_id: 1,
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        name: "Recruitment Specialist",
        department_id: 1,
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        name: "Financial Analyst",
        department_id: 2,
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        name: "Accountant",
        department_id: 2,
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        name: "R&D Engineer",
        department_id: 3,
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        name: "Product Designer",
        department_id: 3,
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        name: "Marketing Specialist",
        department_id: 4,
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        name: "SEO Analyst",
        department_id: 4,
        created_at: new Date(),
        updated_at: new Date(),
      },
    ]);
  },

  async down(queryInterface, Sequelize) {
    return queryInterface.bulkDelete("positions", null, {});
  },
};
