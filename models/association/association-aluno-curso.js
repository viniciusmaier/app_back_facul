const Aluno = require("../pessoa.js");
const Curso = require("../curso.js");
const AlunoCurso = require("../alunocurso.js");

Aluno.belongsToMany(Curso, { through: AlunoCurso });
Curso.belongsToMany(Aluno, { through: AlunoCurso });
