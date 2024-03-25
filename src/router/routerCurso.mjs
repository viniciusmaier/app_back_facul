import { Router } from "express";
import { CursoController } from "../controller/cursoController.mjs";
const routerCoordenacao = Router();

routerCoordenacao.post("/cadastrar", CursoController.cadastrar);

export default routerCoordenacao;
