const findAll = require("./findAllAttendance");
const findOne = require("./findOneAttendance");
const checkin = require("./checkinAttendance");
const checkout = require("./checkoutAttendance");
const approval = require("./approvalAttendance");
const findMe = require("./findAllMeAttendance");
const findStatus = require("./findStatusAttendance");

module.exports = {
  findAll,
  findOne,
  checkin,
  checkout,
  approval,
  findMe,
  findStatus,
};
