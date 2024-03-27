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

    if (dadosAluno.length <= 1) {
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

    dadosAluno.forEach(async (dado) => {
      const cryptoPassword = await bcrypt.hash(dado.password, 10);
      try {
        const resp = PessoaModel.cadastrarUsuario({
          nome: dado.nome,
          ra: dado.ra,
          email: dado.email,
          password: cryptoPassword,
          telefone1: dado.telefone1,
          telefone2: dado.telefone2,
          bo_aluno: true,
          bo_professor: false,
          bo_coordenacao: false,
        }).then((resultado) => console.log(resultado));
      } catch (err) {
        console.log(err);
      }
    });
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
