const Professor = require("../models/pessoa");
module.exports = {
  cadastrarProfessor: async (req, resp) => {
    const envioProfessor = req.body;
    try {
      await Professor.create({
        nome: envioProfessor.nome,
        ra: null,
        email: envioProfessor.email,
        password: envioProfessor.password,
        telefone1: envioProfessor.telefone1,
        telefone2: envioProfessor.telefone2,
        bo_professor: true,
      });
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
