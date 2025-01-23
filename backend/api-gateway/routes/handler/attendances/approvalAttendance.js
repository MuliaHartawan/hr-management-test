const process = require("process");
const apiAdapter = require("../../../commons/api-adapter");
const { URL_SERVICE_ATTENDACE } = process.env;

const api = apiAdapter(URL_SERVICE_ATTENDACE);

module.exports = async (req, res) => {
  try {
    const attendance = await api.put(`/attendance/approval`, {
      verified_by: parseInt(req.user.employee_id),
      attendance_ids: req.body.attendance_ids,
      status: req.body.status,
    });
    return res.status(200).json(attendance.data);
  } catch (error) {
    console.log("=>", error);
    if (error.code === "ECONNREFUSED") {
      return res
        .status(500)
        .json({ status: "error", message: "service unavailable" });
    }

    const { status, data } = error.response;
    return res.status(status).json(data);
  }
};
