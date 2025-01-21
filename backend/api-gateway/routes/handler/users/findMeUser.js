const process = require("process");
const apiAdapter = require("../../../commons/api-adapter");
const { URL_SERVICE_ACCOUNT } = process.env;

const api = apiAdapter(URL_SERVICE_ACCOUNT);

module.exports = async (req, res) => {
  try {
    const id = req.user.data.id;

    const user = await api.get(`/users/${id}`);
    return res.json(user.data);
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
