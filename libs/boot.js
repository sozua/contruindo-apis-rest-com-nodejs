module.exports = (app) => {
  app.listen(app.get("port"), () => {
    console.log(`Servidor online na porta ${app.get("port")}`);
  });
};
