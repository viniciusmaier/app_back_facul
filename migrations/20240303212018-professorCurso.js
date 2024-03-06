"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("professorcurso", {
      id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
      },
      id_professor: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: {
            tableName: "pessoa",
          },
          key: "id",
        },
      },
      id_curso: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: { tableName: "curso" },
          key: "id",
        },
      },
      semestre: Sequelize.INTEGER,
    });

    await queryInterface.sequelize.query(
      `
       CREATE OR REPLACE FUNCTION verifica_professor() RETURNS TRIGGER AS $$
       DECLARE 
          isProfessor BOOL;
        BEGIN
        SELECT bo_professor INTO isProfessor FROM pessoa WHERE id = new.id_professor;
         
        IF isProfessor = false THEN 
          RAISE EXCEPTION 'O usuario não é um professor';
        END IF;
        RETURN NEW;
       END;
       $$ LANGUAGE plpgsql;
   
        CREATE TRIGGER unicv_verifica_professor
        AFTER INSERT ON professorcurso
        FOR EACH ROW        
        EXECUTE FUNCTION verifica_professor();
      `
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable("professorcurso");
    await queryInterface.sequelize.query(
      `
      DROP TRIGGER IF EXISTS unicv_verifica_professor ON professorcurso;
      DROP FUNCTION IF EXISTS verifica_professor();
      `
    );
  },
};
