const { Sequelize } = require("sequelize");
require("dotenv").config();
try {
  // const conexao = new Sequelize(process.env.DATA_BASE_URL, {
  //   dialect: process.env.DIALECT,
  //   dialectOptions: {
  //     connectTimeout: 3000,
  //     ssl: {
  //       require: "true",
  //       rejectUnauthorized: false,
  //     },
  //   },
  // });

  const conexao = new Sequelize(
    process.env.DATABASE,
    process.env.USERNAME_DB_TEST,
    process.env.PASSWORD_DB_TEST,
    {
      dialect: process.env.DIALECT,
      dialectOptions: {
        connectTimeout: 4000,
        // ssl: {
        //   require: "true",
        //   rejectUnauthorized: false,
        // },
      },
    }
  );

  //conexao.authenticate();
  module.exports = conexao;
} catch (err) {
  console.log("deu erro");
}
