const AlunoModel = require("../pessoaModel.js");
const Aluno = new AlunoModel().model;
const Curso = require("../cursoModel.js");
const AlunoCurso = require("../alunoCursoModel.js");

Aluno.belongsToMany(Curso, { through: AlunoCurso });
Curso.belongsToMany(Aluno, { through: AlunoCurso });
