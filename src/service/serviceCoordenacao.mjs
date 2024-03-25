import PessoaModel from "../models/pessoaModel.mjs";
import bcrypt from "bcrypt";
export class serviceCoordenacao {
  static async cadastrar(dados_coordenacao) {
    const cryptoPassword = await bcrypt.hash(dados_coordenacao.password, 10);

    const coordenacao = PessoaModel.cadastrarUsuario({
      nome: dados_coordenacao.nome,
      ra: null,
      email: dados_coordenacao.email,
      password: cryptoPassword,
      telefone1: dados_coordenacao.telefone1,
      telefone2: dados_coordenacao.telefone2,
      bo_aluno: false,
      bo_professor: false,
      bo_coordenacao: true,
    })
      .then((resultado) => {
        return resultado;
      })
      .catch((error) => {
        return error;
      });
  }
}
