const process = require("process");
const apiAdapter = require("../../../commons/api-adapter");
const responseFormatter = require("../../../commons/http/format");
const { URL_SERVICE_INTERNAL_MANAGEMENT, URL_SERVICE_ATTENDACE } = process.env;

const api = apiAdapter(URL_SERVICE_ATTENDACE);
const apiEmployee = apiAdapter(URL_SERVICE_INTERNAL_MANAGEMENT);

module.exports = async (req, res) => {
  try {
    const employeeCount = await apiEmployee.get(`/employee/count`);
    const attendanceMarker = await api.get(`/attendance/marker`);
    const attendanceCount = await api.get(`/attendance/count`);

    const employees = await apiEmployee.get(`/employee`, {
      validateStatus: () => true,
    });

    const employeeMap = new Map(
      employees.data.data.map((employee) => [employee.id, employee])
    );

    const mappedAttendances = attendanceMarker.data.data.map((attendance) => ({
      ...attendance,
      employee: employeeMap.get(attendance.employee_id) || null,
    }));

    const data = {
      employeeCount: employeeCount.data.data,
      attendanceCount: mappedAttendances,
      attendanceMarker: attendanceMarker.data.data,
    };

    return res.json(
      responseFormatter("success",  data, "Dashboard fetched successfully ")
    );
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
