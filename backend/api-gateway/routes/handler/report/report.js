const process = require("process");
const apiAdapter = require("../../../commons/api-adapter");
const excel = require("exceljs");

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
    const attendances = await api.get(`/attendance`, {
      params: queries,
      validateStatus: () => true,
    });
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

    const workbook = new excel.Workbook();
    const worksheet = workbook.addWorksheet("Time Entities");
    worksheet.columns = [
      { header: "Date", key: "date" },
      { header: "Employee", key: "employee_name" },
      { header: "Clock In", key: "clock_in" },
      { header: "Clock In Photo", key: "clock_in_photo" },
      { header: "Clock In Location", key: "clock_in_location" },
      { header: "Clock Out", key: "clock_out" },
      { header: "Clock Out Photo", key: "clock_out_photo" },
      { header: "Clock Out Location", key: "clock_out_location" },
      { header: "Status", key: "status" },
      { header: "Verified By", key: "verified_by_name" },
      { header: "Verified At", key: "verified_at" },
    ];

    const rows = mappedAttendances.map((attendance) => ({
      date: attendance.date,
      employee_name: attendance.employee
        ? `${attendance.employee.first_name} ${attendance.employee.last_name}`
        : "-",
      clock_in: attendance.clock_in,
      clock_in_photo: attendance.clock_in_photo,
      clock_in_location: attendance.clock_in_location,
      clock_out: attendance.clock_out,
      clock_out_photo: attendance.clock_out_photo,
      clock_out_location: attendance.clock_out_location,
      status: attendance.status,
      verified_by_name: attendance.verifiedBy
        ? attendance.verifiedBy.email
        : "Not Verified",
      verified_at: attendance.verified_at,
    }));

    worksheet.addRows(rows);

    const buffer = await workbook.xlsx.writeBuffer();
    res.setHeader(
      "Content-Type",
      "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet"
    );
    res.setHeader(
      "Content-Disposition",
      "attachment; filename=Time_Entities.xlsx"
    );

    return res.send(buffer);
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
