const conexao = require("../config/database/sequelize");
const { DataTypes } = require("sequelize");
const curso = conexao.define("curso", {
  ds_curso: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
});

module.exports = curso;
