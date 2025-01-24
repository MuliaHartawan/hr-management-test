'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    return queryInterface.bulkInsert('attendances', [
      {
        id: 1,
        employee_id: 2,
        date: '2025-01-13',
        clock_in: '2025-01-13 08:11:31',
        clock_in_photo: '1736698410410-447772259.png',
        clock_in_location: '-7.926819,112.598350',
        clock_out: '2025-01-13 11:16:57',
        clock_out_photo: '1736698410410-447772259.png',
        clock_out_location: '-7.926337,112.597342',
        status: 'APPROVED',
        verified_by: 1,
        verified_at: '2025-01-13 11:16:57',
        notes: 'This is a test note',
        created_at: '2025-01-13 10:12:36',
        updated_at: '2025-01-13 10:12:36'
      },
      {
        id: 2,
        employee_id: 2,
        date: '2025-01-14',
        clock_in: '2025-01-14 07:10:31',
        clock_in_photo: '1736698410410-447772259.png',
        clock_in_location: '-7.927409,112.594410',
        clock_out: null,
        clock_out_photo: null,
        clock_out_location: null,
        status: 'REJECTED',
        verified_by: null,
        verified_at: null,
        notes: null,
        created_at: '2025-01-14 08:16:57',
        updated_at: '2025-01-14 08:16:57'
      },
    ]);
  },

  async down (queryInterface, Sequelize) {
    return queryInterface.bulkDelete('attendances', null, {});
  }
};
