const process = require("process");
const apiAdapter = require("../../../commons/api-adapter");
const responseFormatter = require("../../../commons/http/format");
const {
  URL_SERVICE_INTERNAL_MANAGEMENT,
  URL_SERVICE_ACCOUNT,
  URL_SERVICE_ATTENDACE,
} = process.env;

const api = apiAdapter(URL_SERVICE_INTERNAL_MANAGEMENT);
const apiAccount = apiAdapter(URL_SERVICE_ACCOUNT);
const apiAttendance = apiAdapter(URL_SERVICE_ATTENDACE);

module.exports = async (req, res) => {
  const employees = await api.get(`/employee`, {
    validateStatus: () => true,
  });
  const users = await apiAccount.get(`/users`, {
    validateStatus: () => true,
  });
  const shifts = await apiAttendance.get(`/shift`, {
    validateStatus: () => true,
  });
  const userMap = new Map(users.data.data.map((user) => [user.id, user]));
  const shiftMap = new Map(shifts.data.data.map((shift) => [shift.id, shift]));

  const mappedEmployees = employees.data.data.map((employee) => ({
    ...employee,
    user: userMap.get(employee.user_id) || null,
    shift: shiftMap.get(employee.shift_id) || null,
  }));

  return res.json(
    responseFormatter(
      "success",
      mappedEmployees,
      "Employees fetched succesfully"
    )
  );
};
