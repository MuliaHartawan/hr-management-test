const responseFormatter = require("../common/http/format");
const validateWithZod = require("../middleware/zod-middleware");
const checkinAttendanceSchema = require("../common/validation/checkin-attendance-validation");
const checkoutAttendanceSchema = require("../common/validation/checkout-attendance-validation");
const attendanceRepository = require("../repository/attendance");
const shiftRepository = require("../repository/shift");
const moment = require("moment");

var express = require("express");
const approvalAttendanceSchema = require("../common/validation/approval-attendance-validation");
var router = express.Router();

router.get("/", async (req, res, next) => {
  try {
    const filters = req.query;
    const attendances = await attendanceRepository.findAll(filters);
    return res
      .status(200)
      .json(
        responseFormatter(
          "success",
          attendances,
          "Employees fetched successfully"
        )
      );
  } catch (error) {
    console.log(error);
    return res
      .status(500)
      .json(responseFormatter("error", null, "Error fetching attendances"));
  }
});

router.get("/detail/:id", async (req, res) => {
  const { id } = req.params;
  try {
    const attendance = await attendanceRepository.findById(id);
    if (!attendance) {
      return res
        .status(404)
        .json(responseFormatter("error", null, "Employee not found"));
    }
    return res
      .status(200)
      .json(
        responseFormatter(
          "success",
          attendance,
          "Employee fetched successfully"
        )
      );
  } catch (error) {
    console.error("Error fetching attendance:", error);
    res
      .status(500)
      .json(responseFormatter("error", null, "Error fetching attendance"));
  }
});

router.post("/", validateWithZod(checkinAttendanceSchema), async (req, res) => {
  const attendanceData = req.body;
  const clockInTime = moment();

  try {
    const existingAttendance = await attendanceRepository.findByDate(
      attendanceData.employee_id
    );

    if (existingAttendance) {
      return res
        .status(400)
        .json(
          responseFormatter(
            "error",
            null,
            `You have already checked in on today. Please try again tomorrow.`
          )
        );
    }

    const shift = await shiftRepository.findById(attendanceData.shift_id);
    const shiftStartTime = moment(shift.start_time, "HH:mm:ss");
    const toleranceTime = moment.duration(shift.tolerance_minutes, "minutes");
    const clockInWithTolerance = shiftStartTime.clone().add(toleranceTime);

    let lateness = 0;
    let statusMessage = "Attendance recorded successfully";

    if (clockInTime.isAfter(clockInWithTolerance)) {
      lateness = clockInTime.diff(clockInWithTolerance, "minutes");
      statusMessage = `You are late by ${lateness} minute(s). Attendance recorded successfully`;
    }

    const newAttendance = {
      employee_id: attendanceData.employee_id,
      date: clockInTime,
      clock_in: clockInTime.toISOString(),
      clock_in_photo: attendanceData.clock_in_photo,
      notes: attendanceData.notes || "",
      clock_in_location: attendanceData.clock_in_location,
      status_message: statusMessage,
    };

    const savedAttendance = await attendanceRepository.create(newAttendance);

    return res
      .status(201)
      .json(responseFormatter("success", savedAttendance, statusMessage));
  } catch (error) {
    console.log(error);
    return res
      .status(500)
      .json(responseFormatter("error", null, "Error creating attendance"));
  }
});

router.put("/", validateWithZod(checkoutAttendanceSchema), async (req, res) => {
  const attendanceData = req.body;
  const clockOutTime = moment();
  const date = clockOutTime.format("YYYY-MM-DD");
  try {
    const existingCheckin = await attendanceRepository.findByDate(
      attendanceData.employee_id
    );

    if (!existingCheckin) {
      return res
        .status(400)
        .json(
          responseFormatter(
            "error",
            null,
            `You need to check-in first before checking out on today.`
          )
        );
    }

    const existingCheckout = await attendanceRepository.findByDate(
      attendanceData.employee_id
    );

    if (existingCheckout.clock_out) {
      return res
        .status(400)
        .json(
          responseFormatter(
            "error",
            null,
            `You have already checked out on today.`
          )
        );
    }

    const shift = await shiftRepository.findById(attendanceData.shift_id);
    const shiftEndTime = moment(shift.end_time, "HH:mm:ss");
    let statusMessage = "Successfully checked out.";

    if (clockOutTime.isBefore(shiftEndTime)) {
      const earlyMinutes = shiftEndTime.diff(clockOutTime, "minutes");
      const earlyHours = Math.floor(earlyMinutes / 60);
      const remainingMinutes = earlyMinutes % 60;

      statusMessage = `You checked out ${
        earlyHours > 0 ? earlyHours + " hour(s) and " : ""
      }${remainingMinutes} minute(s) earlier than your scheduled shift end time.`;
    }

    const checkoutData = {
      employee_id: attendanceData.employee_id,
      date,
      clock_out: clockOutTime.toISOString(),
      clock_out_photo: attendanceData.clock_out_photo,
      clock_out_location: attendanceData.clock_out_location,
      notes: attendanceData.notes || "",
    };

    const savedCheckout = await attendanceRepository.update(
      { employee_id: attendanceData.employee_id, date: date },
      {
        clock_out: checkoutData.clock_out,
        clock_out_photo: checkoutData.clock_out_photo,
        clock_out_location: checkoutData.clock_out_location,
        notes: checkoutData.notes,
      }
    );

    return res
      .status(200)
      .json(responseFormatter("success", savedCheckout, statusMessage));
  } catch (error) {
    console.error("Error updating attendance:", error);
    return res
      .status(500)
      .json(responseFormatter("error", null, "Error updating attendance"));
  }
});

router.put(
  "/approval",
  validateWithZod(approvalAttendanceSchema),
  async (req, res) => {
    const attendanceData = req.body;

    try {
      const savedAttendance = await attendanceRepository.approval(
        attendanceData
      );

      return res
        .status(200)
        .json(
          responseFormatter(
            "success",
            savedAttendance,
            "Attendance data is successfully processed"
          )
        );
    } catch (error) {
      console.log(error);
      return res
        .status(500)
        .json(responseFormatter("error", null, "Error approval attendance"));
    }
  }
);

router.get("/status/:employeeId", async (req, res) => {
  try {
    const { employeeId } = req.params;
    const statusAttendance = await attendanceRepository.status(
      parseInt(employeeId)
    );

    return res
      .status(200)
      .json(
        responseFormatter(
          "success",
          statusAttendance,
          "Attendance status fetched successfully"
        )
      );
  } catch (error) {
    console.log(error);
    return res
      .status(500)
      .json(responseFormatter("error", null, "Error approval attendance"));
  }
});
router.get("/marker", async (req, res, next) => {
  try {
    const attendances = await attendanceRepository.findAllMarkerAttendance();
    return res
      .status(200)
      .json(
        responseFormatter(
          "success",
          attendances,
          "Attendance marker fetched successfully"
        )
      );
  } catch (error) {
    console.log(error);
    return res
      .status(500)
      .json(responseFormatter("error", null, "Error fetching attendances"));
  }
});

router.get("/count", async (req, res, next) => {
  try {
    const attendances = await attendanceRepository.countStatusPending();
    return res
      .status(200)
      .json(
        responseFormatter(
          "success",
          attendances,
          "Attendance count fetched successfully"
        )
      );
  } catch (error) {
    console.log(error);
    return res
      .status(500)
      .json(responseFormatter("error", null, "Error fetching attendances"));
  }
});

router.get("/:employeeId", async (req, res, next) => {
  try {
    const { employeeId } = req.params;
    const filters = req.query;
    const attendances = await attendanceRepository.findByEmployeeId(
      employeeId,
      filters
    );
    return res
      .status(200)
      .json(
        responseFormatter(
          "success",
          attendances,
          "Attendance me fetched successfully"
        )
      );
  } catch (error) {
    console.log(error);
    return res
      .status(500)
      .json(responseFormatter("error", null, "Error fetching attendances"));
  }
});

module.exports = router;
