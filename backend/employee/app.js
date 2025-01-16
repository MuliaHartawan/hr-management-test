var express = require("express");
var path = require("path");
var cookieParser = require("cookie-parser");
var logger = require("morgan");
const cors = require("cors");

var indexRouter = require("./routes/index");
var departmentsRouter = require("./routes/department");
var positionsRouter = require("./routes/position");
var employeesRouter = require("./routes/employee");

var app = express();
app.use(
  cors({
    origin: "http://localhost:8000",
    methods: "GET,POST,PUT,DELETE",
    credentials: true,
  })
);

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));

app.use("/", indexRouter);
app.use("/department", departmentsRouter);
app.use("/position", positionsRouter);
app.use("/employee", employeesRouter);

module.exports = app;
