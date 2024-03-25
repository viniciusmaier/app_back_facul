import bcrypt from "bcrypt";
import PessoaModel from "../models/pessoaModel.mjs";

// export type DadosUsuario = {
//   email: string;
//   ra: string;
//   senha: string;
// };

export default class serviceAluno {
  constructor() {}

  async cadastrarPessoa(dadosAluno) {
    if (!dadosAluno) {
      return;
    }
    const cryptoPassword = await bcrypt.hash(dadosAluno.password, 10);
    try {
      const resp = PessoaModel.cadastrarUsuario({
        nome: dadosAluno.nome,
        ra: dadosAluno.ra,
        email: dadosAluno.email,
        password: cryptoPassword,
        telefone1: dadosAluno.telefone1,
        telefone2: dadosAluno.telefone2,
        bo_aluno: true,
        bo_professor: false,
        bo_coordenacao: false,
      }).then((resultado) => console.log(resultado));
    } catch (err) {
      console.log(err);
    }
  }

  async loginPessoa(dadosLogin) {
    if (!dadosLogin) {
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
