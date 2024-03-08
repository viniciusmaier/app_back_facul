const Aluno = require("../models/pessoa");
module.exports = {
  consultaTeste: async (req, resp) => {
    const allAlunos = await Aluno.findAll;
    resp.send(JSON.stringify(allAlunos));
  },
  cadastraAluno: async (req, resp) => {
    const envioAluno = req.body;
    try {
      await Aluno.create({
        nome: envioAluno.nome,
        ra: envioAluno.ra,
        email: envioAluno.email,
        password: envioAluno.password,
        telefone1: envioAluno.telefone1,
        telefone2: envioAluno.telefone2,
        bo_aluno: true,
      });

      console.log("enviado com sucesso");
    } catch (err) {
      console.log(err);
    }
  },
};
