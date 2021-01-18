module.exports = (app) => {
  const Tasks = app.db.models.Tasks;
  app
    .route("/tasks")
    .all((req, res) => {
      // Middleware de pré-execução das rotas
    })
    .get((req, res) => {
      // "/tasks": Lista tarefas
    })
    .post((req, res) => {
      // "/tasks": Cadastra uma nova tarefa
    });
  app
    .route("/tasks/:id")
    .all((req, res) => {
      // Middleware de pré-execução das rotas
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
