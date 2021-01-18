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
    //  O mais interessante do Sequelize é que sua modelagem já faz
    //  uma limpeza dos parâmetros que não fazem parte do modelo. Isso
    //  é muito bom, pois caso o req.body contenha diversos atributos
    //  que não foram definidos para o modelo, eles serão descartados na
    //  hora da inserção da tarefa.
    //  O único problema é a possível
    //  existência do atributo req.body.id , que poderia adulterar o
    //  mecanismo de id autoincremental do banco de dados.
    //  Entretanto, isso já foi tratado no middleware da função
    //  app.all() , e o resultado de sucesso retorna o próprio objeto da
    //  tarefa criada.
    .post((req, res) => {
      Tasks.create(req.body)
        .then((result) => res.json(result))
        .catch((error) => {
          res.status(412).json({ msg: error.message });
        });
    });
  app
    .route("/tasks/:id")
    .all((req, res, next) => {
      delete req.body.id;
      next();
    })
    .get((req, res) => {
      Tasks.findOne({ where: req.params })
        .then((result) => {
          if (result) {
            res.json(result);
          } else {
            res.sendStatus(404);
          }
        })
        .catch((error) => {
          res.status(412).json({ msg: error.message });
        });
    })
    .put((req, res) => {
      // "/tasks/1": Atualiza uma tarefa
    })
    .delete((req, res) => {
      // "/tasks/1": Exclui uma tarefa
    });
};
