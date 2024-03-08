const { Sequelize } = require("sequelize");

require("dotenv").config();

try {
  const conexao = new Sequelize(process.env.DATA_BASE_URL, {
    dialect: process.env.DIALECT,
    dialectOptions: {
      connectTimeout: 3000,
      ssl: {
        require: "true",
        rejectUnauthorized: false,
      },
    },
  });

  module.exports = conexao;
} catch (err) {
  console.log("deu erro");
}
