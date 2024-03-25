import { serviceCoordenacao } from "../service/serviceCoordenacao.mjs";
export class CoordenacaoController {
  static async cadastrarCoordenacao(req, resp) {
    const user = await serviceCoordenacao.cadastrar(req.body);
    user
      ? resp.status(200).send({ status: "Cadastro realizado com sucesso" })
      : resp.status(400).send({ status: "NÃO FOI POSSIVEL FAZER O CADASTRO" });
  }
}
