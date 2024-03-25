import PessoaModel from "../models/pessoaModel.mjs";
import bcrypt from "bcrypt";
export class ProfessorService {
  constructor() {}
  static async cadastrarProfessor(dados_professor) {
    const cryptoPassword = await bcrypt.hash(dados_professor.password, 10);
    try {
      const resp = await PessoaModel.cadastrarUsuario({
        nome: dados_professor.nome,
        ra: null,
        email: dados_professor.email,
        password: cryptoPassword,
        telefone1: dados_professor.telefone1,
        telefone2: dados_professor.telefone2,
        bo_professor: true,
      })
        .then((resultado) => {
          return resultado;
        })
        .catch((error) => {
          throw error;
        });
      return resp;
    } catch (err) {
      console.log(err);
    }
  }

  static async loginPessoa(dadosLogin) {
    if (
      !dadosLogin ||
      !dadosLogin.bo_professor ||
      dadosLogin.bo_professor == undefined
    ) {
      return;
    }
    const loginBanco = await PessoaModel.login(dadosLogin);
    const UserLogin = await bcrypt.compare(
      dadosLogin.password,
      loginBanco[0][0].password
    );
    return UserLogin;
  }
}
