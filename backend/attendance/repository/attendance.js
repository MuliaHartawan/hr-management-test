const { Op, col, fn, literal } = require("sequelize");
const { Attendance } = require("../models");

const findAll = async (filters) => {
  const {
    employeeIds,
    startDate,
    endDate,
    status,
    page = 1,
    limit = 10,
  } = filters;
  const offset = (page - 1) * limit;

  const whereClause = {};
  if (employeeIds && employeeIds.length > 0) {
    const parsedEmployeeIds = Array.isArray(employeeIds)
      ? employeeIds
      : JSON.parse(employeeIds);

    whereClause.employee_id = {
      [Op.in]: parsedEmployeeIds,
    };
  }

  if (startDate && endDate) {
    whereClause.date = {
      [Op.between]: [startDate, endDate],
    };
  }

  if (status) {
    whereClause.status = status;
  }

  return Attendance.findAll({
    where: whereClause,
    order: [["date", "DESC"]],
    offset: parseInt(offset),
    limit: parseInt(limit),
  });
};

const findById = async (id) => {
  return await Attendance.findByPk(id);
};

const findByDate = async (employeeId) => {
  const startOfDay = new Date();
  startOfDay.setHours(0, 0, 0, 0);

  const endOfDay = new Date();
  endOfDay.setHours(23, 59, 59, 999);

  return await Attendance.findOne({
    where: {
      employee_id: employeeId,
      created_at: {
        [Op.between]: [startOfDay, endOfDay],
      },
    },
  });
};

const findByEmployeeId = async (employeeId, filters) => {
  const { startDate, endDate, status, page = 1, limit = 10 } = filters;
  const offset = (page - 1) * limit;

  const whereClause = {};
  if (startDate && endDate) {
    whereClause.date = {
      [Op.between]: [startDate, endDate],
    };
  }

  if (status) {
    whereClause.status = status;
  }

  return await Attendance.findAll({
    where: whereClause,
    order: [["date", "DESC"]],
    offset: parseInt(offset),
    limit: parseInt(limit),

    where: {
      employee_id: employeeId,
    },
  });
};

const create = async (AttendanceData) => {
  return await Attendance.create(AttendanceData);
};

const update = async (params, AttendanceData) => {
  return await Attendance.update(
    {
      ...AttendanceData,
    },
    {
      where: {
        employee_id: params.employee_id,
        date: params.date,
      },
    }
  );
};

const destroy = async (id) => {
  await Attendance.destroy({
    where: {
      id,
    },
  });
};

const approval = async (attendanceData) => {
  const { verified_by, attendance_ids, status } = attendanceData;

  return Attendance.update(
    {
      status: status,
      verified_by: verified_by,
      verified_at: new Date(),
    },
    {
      where: {
        id: {
          [Op.in]: attendance_ids,
        },
      },
    }
  );
};

const status = (employeeId) => {
  return Attendance.findOne({
    attributes: [
      [col("date"), "date"],
      [fn("IFNULL", col("clock_in"), null), "clock_in"],
      [fn("IFNULL", col("clock_out"), null), "clock_out"],
    ],
    where: {
      date: literal("DATE(date) = DATE(NOW())"),
      employee_id: employeeId,
    },
  });
};

module.exports = {
  findAll,
  findById,
  findByEmployeeId,
  findByDate,
  approval,
  create,
  update,
  destroy,
  status,
};
