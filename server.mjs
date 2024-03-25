import Express, { json } from "express";
import routerAluno from "./src/router/routerAluno.mjs";
import routerProfessor from "./src/router/routerProfessor.mjs";
import routerCurso from "./src/router/routerCurso.mjs";
import "./src/models/association/association-aluno-curso.mjs";
import routerCoordenacao from "./src/router/routerCoordenacao.mjs";
const port = process.env.PORT || 4000;
const app = Express();

app.use(json());
app.use("/professor", routerProfessor);
app.use("/aluno", routerAluno);
app.use("/curso", routerCurso);
app.use("/coordenacao", routerCoordenacao);
app.listen(port, () => {
  console.log("logado");
});
