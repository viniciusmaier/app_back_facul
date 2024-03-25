import { Router } from "express";
import { AlunoController } from "../controller/alunoController.mjs";
const AlunoControl = new AlunoController();
const routerAluno = Router();

routerAluno.get("/consultar", AlunoControl.consultarAluno);
routerAluno.post("/cadastrar", AlunoControl.cadastrarAluno);
routerAluno.post("/login", AlunoControl.login);

export default routerAluno;
