var express = require("express");
var path = require("path");
var cookieParser = require("cookie-parser");
var logger = require("morgan");
const cors = require("cors");
require("dotenv").config();

var indexRouter = require("./routes/index");
var usersRouter = require("./routes/users");
var authenticationRouter = require("./routes/auth");
var departmentsRouter = require("./routes/departments");
var positionsRouter = require("./routes/positions");
var employeesRouter = require("./routes/employees");
var shiftsRouter = require("./routes/shifts");
var attendancesRouter = require("./routes/attendances");
var reportsRouter = require("./routes/report");
const corsOptions = require("./commons/http/cors");

var app = express();
app.use(cors());

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));

app.use("/api/v1", indexRouter);
app.use("/api/v1/auth", authenticationRouter);
app.use("/api/v1/users", usersRouter);
app.use("/api/v1/department", departmentsRouter);
app.use("/api/v1/position", positionsRouter);
app.use("/api/v1/employee", employeesRouter);
app.use("/api/v1/shift", shiftsRouter);
app.use("/api/v1/attendance", attendancesRouter);
app.use("/api/v1/report", reportsRouter);

module.exports = app;
