const { DataTypes } = require("sequelize");
const conexao = require("../config/database/sequelize");

const AlunoCurso = conexao.define("alunocurso", {
  id_aluno: { type: DataTypes.INTEGER, allowNull: false },
  id_curso: { type: DataTypes.INTEGER, allowNull: false },
  periodo: { type: DataTypes.INTEGER, allowNull: false },
});

module.exports = AlunoCurso;
