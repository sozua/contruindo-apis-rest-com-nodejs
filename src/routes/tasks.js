module.exports = (app) => {
  const Tasks = app.models.tasks;

  app.get("/tasks", (req, res) => {
    Tasks.findAll({}).then((tasks) => {
      res.json({ tasks: tasks });
    });
  });
};
