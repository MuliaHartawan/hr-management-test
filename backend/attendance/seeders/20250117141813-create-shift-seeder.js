"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    return queryInterface.bulkInsert("shifts", [
      {
        name: "Morning Shift",
        start_time: "08:00:00",
        end_time: "16:00:00",
        tolerance_minutes: 15,
        created_at: new Date(),
      },
      {
        name: "Evening Shift",
        start_time: "16:00:00",
        end_time: "00:00:00",
        tolerance_minutes: 15,
        created_at: new Date(),
      },
    ]);
  },

  async down(queryInterface, Sequelize) {
    return queryInterface.bulkDelete("shifts", null, {});
  },
};
