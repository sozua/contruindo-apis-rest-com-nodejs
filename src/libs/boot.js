module.exports = (app) => {
  app.db.sync().done(() => {
    app.listen(app.get("port"), () => {
      console.log(`Servidor online na porta ${app.get("port")}`);
    });
  });
};
