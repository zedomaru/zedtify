const bcrypt = require("bcrypt");

function hashPassword(user, options) {
  const SALT_FACTOR = 10;
  if (!user.changed("password")) {
    return;
  }

  return bcrypt
    .genSalt(SALT_FACTOR)
    .then(salt => bcrypt.hash(user.password, salt, null))
    .then(hash => user.setDataValue("password", hash));
}

module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define(
    "User",
    {
      email: {
        type: DataTypes.STRING,
        unique: true
      },
      password: DataTypes.STRING
    },
    {
      hooks: {
        beforeCreate: hashPassword,
        beforeUpdate: hashPassword,
        beforeSave: hashPassword
      }
    }
  );

  return User;
};
