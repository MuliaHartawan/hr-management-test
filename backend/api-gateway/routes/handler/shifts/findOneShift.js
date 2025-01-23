const process = require("process");
const apiAdapter = require("../../../commons/api-adapter");
const { URL_SERVICE_ATTENDACE } = process.env;

const api = apiAdapter(URL_SERVICE_ATTENDACE);

module.exports = async (req, res) => {
  try {
    const { id } = req.params;
    const shift = await api.get(`/shift/${id}`);
    return res.json(shift.data);
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
