const process = require("process");
const apiAdapter = require("../../../commons/api-adapter");
const {
  URL_SERVICE_INTERNAL_MANAGEMENT,
  URL_SERVICE_ACCOUNT,
  URL_SERVICE_ATTENDACE,
} = process.env;

const api = apiAdapter(URL_SERVICE_INTERNAL_MANAGEMENT);
const apiAccount = apiAdapter(URL_SERVICE_ACCOUNT);
const apiAttendance = apiAdapter(URL_SERVICE_ATTENDACE);

module.exports = async (req, res) => {
  const id = req.params.id;
  const employee = await api.get(`/employee/user/${id}`, {
    validateStatus: () => true,
  });
  if (employee.data.status == "error") {
    return res.status(employee.status).json(employee.data);
  }

  const user = await apiAccount.get(`/users/${employee.data.data.user_id}`, {
    validateStatus: () => true,
  });
  const shift = await apiAttendance.get(
    `/shift/${employee.data.data.shift_id}`,
    { validateStatus: () => true }
  );
  if (employee.status == 500 || employee.status == 500 || shift.status == 500) {
    return res
      .status(500)
      .json({ status: "error", message: "service unavailable" });
  }

  const mapData = employee.data;
  mapData.data.user = user.data?.data ? user.data.data : null;
  mapData.data.shift = shift.data?.data ? shift.data.data : null;

  return res.json(mapData);
};
