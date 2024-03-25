import { ProfessorService } from "../service/serviceProfessor.mjs";
export class ProfessorController {
  constructor() {}
  async cadastrarProfessor(req, resp) {
    const user = await ProfessorService.cadastrarProfessor(req.body);
    user
      ? resp.send({ bo_cadastrado: true }).status(200)
      : resp.send({ bo_cadastrado: true }).status(200);
  }
  async login(req, resp) {
    const userLogin = await ProfessorService.loginPessoa(req.body);
    userLogin
      ? resp.status(200).send({ status: "Senha correta", bo_login: userLogin })
      : resp
          .send({ status: "Senha incorreta", bo_login: userLogin })
          .status(400);
  }
  async consultarProfessor(req, resp) {
    try {
      const query = await findAll();
      const resposta = JSON.stringify(query);
      return resp.send(resposta).status(200);
    } catch (err) {
      console.log(err);
    }
  }
}
