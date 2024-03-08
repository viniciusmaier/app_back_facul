"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  up: async (queryInterface, Sequelize) => {
    queryInterface.createTable("pessoa", {
      id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
      },
      nome: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      ra: {
        type: Sequelize.STRING,
        allowNull: true,
      },
      email: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      password: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      telefone1: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      telefone2: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      bo_aluno: {
        type: Sequelize.BOOLEAN,
        allowNull: true,
      },
      bo_professor: {
        type: Sequelize.BOOLEAN,
        allowNull: true,
      },
      bo_coordenacao: {
        type: Sequelize.BOOLEAN,
        allowNull: true,
      },
      createdAt: Sequelize.DATE,
      updatedAt: Sequelize.DATE,
    });
    await queryInterface.changeColumn("pessoa", "ra", {
      type: Sequelize.STRING,
      allowNull: true,
      unique: true,
    });
    await queryInterface.changeColumn("pessoa", "email", {
      type: Sequelize.STRING,
      allowNull: false,
    });
  },

  down: async (queryInterface, Sequelize) => {
    queryInterface.dropTable("aluno");
  },
};
