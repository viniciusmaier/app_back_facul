import CursoModel from "../models/cursoModel.mjs";
export default class ServiceCurso {
  static async cadastrarCurso(dados_Curso) {
    return CursoModel.cadastrar(dados_Curso);
  }
}
