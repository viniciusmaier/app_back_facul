const Express = require("express");
const port = 4000;
const routerAluno = require("./router/routerAluno");
const routerProfessor = require("./router/routerProfessor");
const app = Express();

app.use(Express.json());
app.use("/aluno", routerAluno);
app.use("/professor", routerProfessor);
require("./models/association/association-aluno-curso");
app.listen(port, () => {
  console.log("logado");
});
