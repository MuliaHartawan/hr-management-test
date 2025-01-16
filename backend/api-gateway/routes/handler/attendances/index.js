const findAll = require("./findAllAttendance");
const findOne = require("./findOneAttendance");
const checkin = require("./checkinAttendance");
const checkout = require("./checkoutAttendance");
const approval = require("./approvalAttendance");

module.exports = {
  findAll,
  findOne,
  checkin,
  checkout,
  approval,
};
