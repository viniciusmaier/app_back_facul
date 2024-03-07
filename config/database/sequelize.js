const { Sequelize } = require("sequelize");
const config = require("../config").development;
try {
  const conexao = new Sequelize(config.database_url, {
    dialect: config.dialect,
    dialectOptions: {
      connectTimeout: 3000,
      ssl: {
        require: "true",
      },
    },
  });

  // const conexao = new Sequelize(
  //   config.database,
  //   config.username,
  //   config.password,
  //   {
  //     dialect: config.dialect,
  //     host: config.host,
  //     define: {
  //       caseSensitive: false,
  //     },
  //   }
  // );
  module.exports = conexao;
} catch (err) {
  console.log("deu erro");
}
