const process = require("process");
const apiAdapter = require("../../../commons/api-adapter");
const { URL_SERVICE_INTERNAL_MANAGEMENT } = process.env;

const api = apiAdapter(URL_SERVICE_INTERNAL_MANAGEMENT);

module.exports = async (req, res) => {
  try {
    const position = await api.post(`/position`, req.body);
    return res.json(position.data);
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
