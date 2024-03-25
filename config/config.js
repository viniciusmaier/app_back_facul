<<<<<<< HEAD
import dotenv from require("dotenv");
=======
const dotenv = require("dotenv");
>>>>>>> 03d72009b977f24c304684a9c34d12619b9c89d8
dotenv.config();
module.exports = {
  development: {
    username: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_DATABASE,
    host: process.env.DB_HOST,
    dialect: process.env.DIALECT,
  },
  // test: {
  //   username: USERNAME_DB_TEST,
  //   password: PASSWORD_DB_TEST,
  //   database: DATABASE,
  //   host: HOST,
  //   dialect: DIALECT,
  // },
  // production: {
  //   username: "root",
  //   password: null,
  //   database: "database_production",
  //   host: "127.0.0.1",
  //   dialect: "mysql",
  // },
};
