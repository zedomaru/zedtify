module.exports = app => {
  app.post("/register", (req, res) => {
    res.send({ message: `Hello ${req.body.email}, welcome and have fun!` });
  });
};
