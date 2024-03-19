const AlunoObject = require("../models/pessoaModel");
const Aluno = new AlunoObject();
module.exports = {
  consultaTeste: async (req, resp) => {
    const allAlunos = await Aluno.findAll;
    resp.send(JSON.stringify(allAlunos));
  },
  cadastraAluno: async (req, resp) => {
    const envioAluno = req.body;
    try {
      const resp = Aluno.cadastrarUsuario({
        nome: envioAluno.nome,
        ra: envioAluno.ra,
        email: envioAluno.email,
        password: envioAluno.password,
        telefone1: envioAluno.telefone1,
        telefone2: envioAluno.telefone2,
        bo_aluno: true,
        bo_professor: false,
        bo_coordenacao: false,
      }).then((resultado) => console.log(resultado));
      //resp.send(resp).status(200);
      console.log("enviado com sucesso");
    } catch (err) {
      console.log(err);
    }
  },
  login: async (req, resp) => {
    console.log("teste");
    if (req.body == null) {
      console.log("teste");
      return;
    }
    const user = Aluno.login(req.body)
      .then((resultado) => console.log(resultado))
      .catch((error) => console.log(error));

    console.log(user);
  },
};
