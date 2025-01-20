const process = require("process");
const apiAdapter = require("../../../commons/api-adapter");
const responseFormatter = require("../../../commons/http/format");
const {
  URL_SERVICE_INTERNAL_MANAGEMENT,
  URL_SERVICE_ACCOUNT,
  URL_SERVICE_ATTENDACE,
} = process.env;

const api = apiAdapter(URL_SERVICE_ATTENDACE);
const apiEmployee = apiAdapter(URL_SERVICE_INTERNAL_MANAGEMENT);
const apiAccount = apiAdapter(URL_SERVICE_ACCOUNT);

module.exports = async (req, res) => {
  try {
    const queries = req.query;
    const { employee_id } = req.user;
    const attendances = await api.get(`/attendance/${employee_id}`, {
      params: queries,
      validateStatus: () => true,
    });
    if (attendances.data?.data == null) {
      return res.json(
        responseFormatter(
          attendances.data?.status,
          mappedAttendances,
          attendances.data?.message
        )
      );
    }
    const employees = await apiEmployee.get(`/employee`, {
      validateStatus: () => true,
    });
    const users = await apiAccount.get(`/users`, {
      validateStatus: () => true,
    });

    const userMap = new Map(users.data.data.map((user) => [user.id, user]));
    const employeeMap = new Map(
      employees.data.data.map((employee) => [employee.id, employee])
    );

    const mappedAttendances = attendances.data.data.map((attendance) => ({
      ...attendance,
      verifiedBy: userMap.get(attendance.verified_by) || null,
      employee: employeeMap.get(attendance.employee_id) || null,
    }));

    return res.json(
      responseFormatter(
        attendances.data?.status,
        mappedAttendances,
        attendances.data?.message
      )
    );
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
