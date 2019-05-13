const { User } = require("../models");

module.exports = {
  async register(req, res) {
    // res.send({ message: `Hello ${req.body.email}, welcome and have fun!` });
    try {
      const user = await User.create(req.body);
      res.send(user.toJSON());
    } catch (error) {
      res.status(400).send({
        error: "MODOL KACA OI JANGAN DOBEL"
      });
    }
  }
};
