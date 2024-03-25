import { Router } from "express";
import { ProfessorController } from "../controller/professorController.mjs";

const profController = new ProfessorController();
const routerProfessor = Router();
routerProfessor.post("/cadastrar", profController.cadastrarProfessor);
routerProfessor.post("/login", profController.login);
routerProfessor.get("/consultar", profController.consultarProfessor);

export default routerProfessor;
