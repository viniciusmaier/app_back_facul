const professorController = require("../controller/professorController");
const routerProfessor = require("express").Router();

routerProfessor.post("/cadastrar", professorController.cadastrarProfessor);

module.exports = routerProfessor;
