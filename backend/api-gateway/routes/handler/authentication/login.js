const apiAdapter = require("../../../commons/api-adapter");
const jwt = require("jsonwebtoken");
const process = require("process");
const { URL_SERVICE_ACCOUNT, JWT_SECRET, URL_SERVICE_INTERNAL_MANAGEMENT } =
  process.env;

const api = apiAdapter(URL_SERVICE_ACCOUNT);
const apiEmployee = apiAdapter(URL_SERVICE_INTERNAL_MANAGEMENT);

module.exports = async (req, res) => {
  try {
    const user = await api.post("/auth/login", req.body);
    const dataUser = user.data;

    const employee = await apiEmployee.get(`/employee/user/${dataUser.id}`);
    const dataEmployee = employee.data.data;

    const dataMap = {
      name: `${dataEmployee.first_name} ${dataEmployee.last_name}`,
      user_id: dataUser.id,
      email: dataUser.email,
      employee_id: dataEmployee.id,
      nip: dataEmployee.nip,
      department_id: dataEmployee.department_id,
      position_id: dataEmployee.position_id,
      shift_id: dataEmployee.shift_id,
    };

    const token = jwt.sign({ ...dataMap }, JWT_SECRET, {
      expiresIn: "1d",
    });

    return res.json({
      status: "success",
      data: {
        ...dataMap,
      },
      access_token: token,
    });
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
