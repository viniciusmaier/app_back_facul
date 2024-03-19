class Aluno {
  constructor() {
    const conexao = require("../config/database/sequelize");
    const { DataTypes } = require("sequelize");
    this.model = conexao.define(
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
  }

  async login(dados_login) {
    const conexao = require("../config/database/sequelize");
    try {
      const resultado = await conexao.query(`
            SELECT ra, email, password FROM pessoa WHERE email = '${dados_login.email}'        `);
      return resultado;
    } catch (err) {
      console.log(err);
    }
  }

  async buscaUsuario(email) {
    const conexao = require("../config/database/sequelize");
    try {
      const resultado = await conexao.query(`
            SELECT nome, ra, email, telefone1, telefone2 FROM pessoa WHERE email = '${email}'        `);
      return resultado;
    } catch (error) {
      console.error(`NÃO FOI POSSIVEL BUSCAR O USUARIO -> MOTIVO ?:  ${error}`);
    } finally {
      conexao.close();
    }
  }

  async cadastrarUsuario(dados_cadastrais) {
    const conexao = require("../config/database/sequelize");
    try {
      const resp = await this.model.create(
        {
          nome: dados_cadastrais.nome,
          ra: dados_cadastrais.ra,
          email: dados_cadastrais.email,
          password: dados_cadastrais.password,
          telefone1: dados_cadastrais.telefone1,
          telefone2: dados_cadastrais.telefone2,
          bo_aluno: dados_cadastrais.bo_aluno,
          bo_professor: dados_cadastrais.bo_professor,
          bo_coordenacao: dados_cadastrais.bo_coordenacao,
        },
        { tableName: "pessoa" }
      );
      return resp;
    } catch (error) {
      console.error(
        `NÃO FOI POSSIVEL CADASTRAR O USUARIO -> MOTIVO ?:  ${error}`
      );
    } finally {
      conexao.close();
    }
  }
}

module.exports = Aluno;
