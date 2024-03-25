import { DataTypes, Model } from "sequelize";
import conexaoBanco from "../../config/database/sequelize.mjs";
const sequelize = conexaoBanco();
export default class CursoModel extends Model {
  static async cadastrar(dados_curso) {
    return await this.create({
      ds_curso: dados_curso.ds_curso,
    });
  }
}

CursoModel.init(
  {
    ds_curso: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
  },
  {
    sequelize,
    tableName: "curso",
    timestamps: true,
  }
);
