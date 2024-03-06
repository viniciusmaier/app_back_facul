"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable("alunocurso", {
      id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
      },
      id_curso: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: {
            tableName: "curso",
          },
          key: "id",
        },
      },
      id_aluno: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: {
            tableName: "pessoa",
          },
          key: "id",
        },
        onDelete: "CASCADE",
        onUpdate: "CASCADE",
      },
      createdAt: Sequelize.DATE,
      updateAt: Sequelize.DATE,
    });

    await queryInterface.addColumn("alunocurso", "periodo", {
      type: Sequelize.INTEGER,
      allowNull: false,
    });

    await queryInterface.sequelize.query(
      `
      CREATE OR REPLACE FUNCTION verifica_aluno() RETURNS TRIGGER AS $$
      DECLARE
        isAluno BOOL; 
      BEGIN
        SELECT bo_aluno INTO isAluno FROM pessoa WHERE id = new.id_aluno;

        IF isAluno = false THEN
          RAISE EXCEPTION 'Usuario não é um aluno';
        END IF;
        RETURN NEW;
      END;
      $$ LANGUAGE plpgsql;

      CREATE TRIGGER unicv_verifica_aluno 
      AFTER INSERT ON alunocurso
      FOR EACH ROW
      EXECUTE FUNCTION verifica_aluno();
      `
    );
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.removeColumn("alunocurso", "periodo");
    await queryInterface.dropTable("alunocurso");
    await queryInterface.sequelize.query(`
      DROP TRIGGER IF EXISTS unicv_verifica_aluno ON alunocurso;
      DROP FUNCTION IF EXISTS verifica_aluno();
      `);
  },
};
