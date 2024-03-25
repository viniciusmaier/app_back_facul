import { DataTypes, Model } from "sequelize";
import conexaoBanco from "../../config/database/sequelize.mjs";
const sequelize = conexaoBanco();
export default class AlunoCurso extends Model {}

AlunoCurso.init(
  {
    id_aluno: { type: DataTypes.INTEGER, allowNull: false },
    id_curso: { type: DataTypes.INTEGER, allowNull: false },
    periodo: { type: DataTypes.INTEGER, allowNull: false },
  },
  { sequelize, tableName: "alunocurso", timestamps: true }
);
