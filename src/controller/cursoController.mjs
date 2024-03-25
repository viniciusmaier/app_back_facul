import ServiceCurso from "../service/serviceCurso.mjs";
export class CursoController {
  static async cadastrar(req, resp) {
    const curso = await ServiceCurso.cadastrarCurso(req.body);

    curso
      ? resp.status(200).send({ status: "Curso criado com sucesso" })
      : resp.send({
          status: `NÃO FOI POSSIVEL GERAR O CURSO ${req.body.ds_curso}`,
        });
  }
}
