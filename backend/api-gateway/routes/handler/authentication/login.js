const apiAdapter = require("../../../commons/api-adapter");
const jwt = require("jsonwebtoken");
const process = require("process");
const { URL_SERVICE_ACCOUNT, JWT_SECRET } = process.env;

const api = apiAdapter(URL_SERVICE_ACCOUNT);

module.exports = async (req, res) => {
  try {
    const user = await api.post("/auth/login", req.body);
    const data = user.data;

    const token = jwt.sign({ data }, JWT_SECRET, {
      expiresIn: "1d",
    });

    return res.json({
      status: "success",
      data: {
        ...data,
      },
      access_token: token,
    });
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
