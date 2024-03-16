const alunoController = require("../controller/alunoController");
const routerAluno = require("express").Router();

routerAluno.get("/aluno", alunoController.consultaTeste);
routerAluno.post("/aluno", alunoController.cadastraAluno);

routerAluno.post("/aluno/login", alunoController.login);

module.exports = routerAluno;
