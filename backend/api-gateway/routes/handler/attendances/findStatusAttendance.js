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
  const { employee_id } = req.user;
  try {
    const attendance = await api.get(`/attendance/status/${employee_id}`, {
      validateStatus: () => true,
    });

    if (attendance.data.status == "error") {
      return res.status(attendance.status).json(attendance.data);
    }

    return res.json(attendance.data);
  } catch (error) {
    if (error.code === "ECONNREFUSED") {
      return res
        .status(500)
        .json({ status: "error", message: "service unavailable" });
    }

    const { status, data } = error.response;
    return res.status(status).json(data);
  }
};
