require("dotenv").config();

const { DB_HOSTNAME, DB_NAME, DB_USERNAME, DB_PASSWORD } = process.env;

module.exports = {
  development: {
    username: DB_USERNAME,
    password: DB_PASSWORD,
    database: DB_NAME,
    host: DB_HOSTNAME,
    dialect: "mysql",
  },
  production: {
    username: DB_USERNAME,
    password: DB_PASSWORD,
    database: DB_HOSTNAME,
    host: DB_HOSTNAME,
    dialect: "mysql",
  },
};
