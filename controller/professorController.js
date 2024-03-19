const Professor = require("../models/pessoaModel");
module.exports = {
  cadastrarProfessor: async (req, resp) => {
    const envioProfessor = req.body;
    try {
      const resp = Aluno.cadastrarUsuario({
        nome: envioAluno.nome,
        ra: envioAluno.ra,
        email: envioAluno.email,
        password: envioAluno.password,
        telefone1: envioAluno.telefone1,
        telefone2: envioAluno.telefone2,
        bo_aluno: false,
        bo_professor: true,
        bo_coordenacao: false,
      }).then((resultado) =>
        console.log(resultado).catch((err) => console.error(err))
      );
      resp.send(resp).status(200);
      console.log("enviado com sucesso");
    } catch (err) {
      console.log(err);
    }
  },
  consultarProfessor: async (req, resp) => {
    try {
      const query = await Professor.findAll();
      const resposta = JSON.stringify(query);
      return resp.send(resposta).status(200);
    } catch (err) {
      console.log(err);
    }
  },
};
