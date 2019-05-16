const AuthenticationController = require("./controller/AuthenticationController");
const AuthenticationControllerValidation = require("./validation/AuthenticationControllerValidation");

module.exports = app => {
  app.post(
    "/register",
    AuthenticationControllerValidation.register,
    AuthenticationController.register
  );

  app.post("/login", AuthenticationController.login);
};
