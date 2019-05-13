const Joi = require("@hapi/joi");

module.exports = {
  register(req, res, next) {
    const schema = {
      email: Joi.string().email(),
      password: Joi.string().regex(new RegExp("^[a-zA-Z0-9]{8,32}$"))
    };

    const { error, value } = Joi.validate(req.body, schema);
    if (error) {
      switch (error.details[0].context.key) {
        case "email":
          res.status(400).send({
            error: "JANGAN ASAL MASUKIN EMAILNYA DONG PAK"
          });
          break;
        case "password":
          res.status(400).send({
            error: "KAN UDAH DIKASIH TAU ATURAN BIKIN PASSWORDNYA GIMANA"
          });
          break;
        default:
          res.status(400).send({
            error: "KALO INI KENAPA? KAOWOKWAOAW"
          });
          break;
      }
    } else {
      next();
    }
  }
};
