import AlunoModel from "../pessoaModel.mjs";
import CursoModel from "../cursoModel.mjs";
import AlunoCursoModel from "../alunoCursoModel.mjs";

AlunoModel.belongsToMany(CursoModel, { through: AlunoCursoModel });
CursoModel.belongsToMany(AlunoModel, { through: AlunoCursoModel });
