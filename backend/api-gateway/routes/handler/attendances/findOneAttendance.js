const process = require("process");
const apiAdapter = require("../../../commons/api-adapter");
const {
  URL_SERVICE_INTERNAL_MANAGEMENT,
  URL_SERVICE_ACCOUNT,
  URL_SERVICE_ATTENDACE,
} = process.env;

const api = apiAdapter(URL_SERVICE_ATTENDACE);
const apiEmployee = apiAdapter(URL_SERVICE_INTERNAL_MANAGEMENT);
const apiAccount = apiAdapter(URL_SERVICE_ACCOUNT);

module.exports = async (req, res) => {
  const id = req.params.id;
  const attendance = await api.get(`/attendance/detail/${id}`, {
    validateStatus: () => true,
  });

  if (attendance.data.status == "error") {
    return res.status(attendance.status).json(attendance.data);
  }

  const employee = await apiEmployee.get(
    `/employee/${attendance.data.data.employee_id}`,
    {
      validateStatus: () => true,
    }
  );
  const user = await apiAccount.get(
    `/users/${attendance.data.data.verified_by}`,
    {
      validateStatus: () => true,
    }
  );

  const mapData = attendance.data;
  mapData.data.employee = employee.data?.data ? employee.data.data : null;
  mapData.data.verifiedBy = user.data?.data ? user.data.data : null;

  return res.json(mapData);
};
