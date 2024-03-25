import { Router } from "express";
import { CoordenacaoController } from "../controller/coordenacaoController.mjs";
const routerCoordenacao = Router();

routerCoordenacao.post(
  "/cadastrar",
  CoordenacaoController.cadastrarCoordenacao
);

export default routerCoordenacao;
