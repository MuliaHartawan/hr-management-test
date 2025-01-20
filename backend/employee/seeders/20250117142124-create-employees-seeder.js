"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    return queryInterface.bulkInsert("employees", [
      {
        user_id: 1,
        nip: "EMP001",
        first_name: "John",
        last_name: "Doe",
        department_id: 1,
        position_id: 1,
        shift_id: 1,
        phone: "081234567890",
        address: "123 Main Street",
        join_date: "2023-01-15",
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        user_id: 2,
        nip: "EMP004",
        first_name: "Emily",
        last_name: "Davis",
        department_id: 4,
        position_id: 7,
        shift_id: 2,
        phone: "081345678912",
        address: "321 Birch Lane",
        join_date: "2023-04-05",
        created_at: new Date(),
        updated_at: new Date(),
      },
    ]);
  },

  async down(queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  },
};
