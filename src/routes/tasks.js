module.exports = (app) => {
  const Tasks = app.db.models.Tasks;
  app
    .route("/tasks")
    .all((req, res, next) => {
      delete req.body.id;
      next();
    })
    .get((req, res) => {
      Tasks.findAll({})
        .then((result) => res.json(result))
        .catch((error) => {
          res.status(412).json({ msg: error.message });
        });
    })
    .post((req, res) => {
      // "/tasks": Cadastra uma nova tarefa
    });
  app
    .route("/tasks/:id")
    .all((req, res, next) => {
      delete req.body.id;
      next();
    })
    .get((req, res) => {
      // "/tasks/1": Consulta uma tarefa
    })
    .put((req, res) => {
      // "/tasks/1": Atualiza uma tarefa
    })
    .delete((req, res) => {
      // "/tasks/1": Exclui uma tarefa
    });
};
