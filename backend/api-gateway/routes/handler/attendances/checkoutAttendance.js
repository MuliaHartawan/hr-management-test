const process = require("process");
const apiAdapter = require("../../../commons/api-adapter");
const { URL_SERVICE_ATTENDACE } = process.env;

const api = apiAdapter(URL_SERVICE_ATTENDACE);

module.exports = async (req, res) => {
  try {
    console.log("File received:", req.file);
    console.log("Body received:", req.body);
    const user = req.user;
    const imagePath = req.file ? req.file.filename : null;
    const attendance = await api.put(`/attendance`, {
      employee_id: parseInt(req.body.employee_id),
      clock_out_location: req.body.clock_out_location,
      clock_out_photo: imagePath,
      shift_id: user.shift_id,
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
