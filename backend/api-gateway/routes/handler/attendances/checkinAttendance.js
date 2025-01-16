const process = require("process");
const apiAdapter = require("../../../commons/api-adapter");

const { URL_SERVICE_ATTENDACE } = process.env;

const api = apiAdapter(URL_SERVICE_ATTENDACE);

module.exports = async (req, res) => {
  try {
    const imagePath = req.file ? req.file.filename : null;
    const attendance = await api.post(`/attendance`, {
      employee_id: parseInt(req.body.employee_id),
      clock_in_location: req.body.clock_in_location,
      clock_in_photo: imagePath,
    });
    return res.json(attendance.data);
  } catch (error) {
    console.error("Error full details:", error);
    if (error.code === "ECONNREFUSED") {
      return res
        .status(500)
        .json({ status: "error", message: "service unavailable" });
    }

    const { status, data } = error.response;
    return res.status(status).json(data);
  }
};
