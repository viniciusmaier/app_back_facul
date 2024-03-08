const professorController = require("../controller/professorController");
const routerProfessor = require("express").Router();

routerProfessor.post("/cadastrar", professorController.cadastrarProfessor);
routerProfessor.get("/consultar", professorController.consultarProfessor);
module.exports = routerProfessor;
