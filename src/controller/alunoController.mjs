import AlunoModel from "../models/pessoaModel.mjs";
import serviceAluno from "../service/serviceAluno.mjs";

export class AlunoController {
  constructor() {}

  async consultarAluno(req, resp) {
    const allAlunos = await this.Aluno;
    resp.send(JSON.stringify(allAlunos));
  }
  async cadastrarAluno(req, resp) {
    const dados = req.body;
    const alunoServ = new serviceAluno();
    return await alunoServ.cadastrarPessoa(dados);
  }
  async login(req, resp) {
    const alunoServ = new serviceAluno();
    const userLogin = await alunoServ.loginPessoa(req.body);
    userLogin
      ? resp.status(200).send({ status: "Senha correta", bo_login: userLogin })
      : resp
          .send({ status: "Senha incorreta", bo_login: userLogin })
          .status(400);
  }
}
