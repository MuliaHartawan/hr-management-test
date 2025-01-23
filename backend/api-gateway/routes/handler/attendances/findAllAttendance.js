const process = require("process");
const apiAdapter = require("../../../commons/api-adapter");
const responseFormatter = require("../../../commons/http/format");
const { URL_SERVICE_INTERNAL_MANAGEMENT, URL_SERVICE_ATTENDACE } = process.env;

const api = apiAdapter(URL_SERVICE_ATTENDACE);
const apiEmployee = apiAdapter(URL_SERVICE_INTERNAL_MANAGEMENT);

module.exports = async (req, res) => {
  try {
    const queries = req.query;
    const attendances = await api.get(`/attendance`, {
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

    const employeeMap = new Map(
      employees.data.data.map((employee) => [employee.id, employee])
    );

    const mappedAttendances = attendances.data.data.map((attendance) => ({
      ...attendance,
      verifiedBy: employeeMap.get(attendance.verified_by) || null,
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
