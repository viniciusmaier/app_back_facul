const { Sequelize } = require("sequelize");
const config = require("../config").development;
try {
  const conexao = new Sequelize(process.env.DATA_BASE_URL, {
    dialect: "postgres",
    dialectOptions: {
      connectTimeout: 3000,
      ssl: {
        require: "true",
      },
    },
  });

  module.exports = conexao;
} catch (err) {
  console.log("deu erro");
}
