const conexao = require("../config/database/sequelize");
const { DataTypes } = require("sequelize");

const Aluno = conexao.define(
  "pessoa",
  {
    nome: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    ra: {
      type: DataTypes.STRING,
      allowNull: true,
      unique: true,
    },
    email: { type: DataTypes.STRING, allowNull: false, unique: true },
    password: { type: DataTypes.STRING, allowNull: false },
    telefone1: { type: DataTypes.STRING, allowNull: false },
    telefone2: { type: DataTypes.STRING, allowNull: false },
    bo_aluno: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: false,
    },

    bo_professor: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: false,
    },

    bo_coordenacao: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: false,
    },
  },
  { tableName: "pessoa" }
);

module.exports = Aluno;
