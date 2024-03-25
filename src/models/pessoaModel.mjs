import conexaoBanco from "../../config/database/sequelize.mjs";
import { DataTypes, Model, Sequelize } from "sequelize";
const sequelize = conexaoBanco();
export default class PessoaModel extends Model {
  static async login(dados_login) {
    try {
      const resultado = await conexaoBanco().query(`
            SELECT ra, email, password FROM pessoa WHERE email = '${dados_login.email}'        `);
      return resultado;
    } catch (err) {
      console.log(err);
    }
  }

  static async buscaUsuario(email) {
    const conexao = require("../config/database/sequelize");
    try {
      const resultado = await conexaoBanco().query(`
            SELECT nome, ra, email, telefone1, telefone2 FROM pessoa WHERE email = '${email}'        `);
      return resultado;
    } catch (error) {
      console.error(`NÃO FOI POSSIVEL BUSCAR O USUARIO -> MOTIVO ?:  ${error}`);
    } finally {
      conexao.close();
    }
  }

  static async cadastrarUsuario(dados_cadastrais) {
    try {
      if (dados_cadastrais.bo_professor) {
        dados_cadastrais.ra = null;
        dados_cadastrais.bo_professor = true;
        dados_cadastrais.bo_aluno = false;
      }
      const resp = await this.create({
        nome: dados_cadastrais.nome,
        ra: dados_cadastrais.ra,
        email: dados_cadastrais.email,
        password: dados_cadastrais.password,
        telefone1: dados_cadastrais.telefone1,
        telefone2: dados_cadastrais.telefone2,
        bo_aluno: dados_cadastrais.bo_aluno,
        bo_professor: dados_cadastrais.bo_professor,
        bo_coordenacao: dados_cadastrais.bo_coordenacao,
      });
      return resp;
    } catch (error) {
      console.error(
        `NÃO FOI POSSIVEL CADASTRAR O USUARIO -> MOTIVO ?:  ${error}`
      );
    }
  }
}

PessoaModel.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    nome: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    ra: {
      type: DataTypes.STRING,
      allowNull: true,
      unique: true,
    },
    email: { type: DataTypes.STRING, allowNull: true, unique: true },
    password: { type: DataTypes.STRING, allowNull: true },
    telefone1: { type: DataTypes.STRING, allowNull: true },
    telefone2: { type: DataTypes.STRING, allowNull: true },
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
  {
    sequelize,
    tableName: "pessoa",
    timestamps: true,
  }
);
