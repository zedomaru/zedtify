module.exports = {
  port: process.env.PORT || 8081,
  db: {
    database: process.env.DB_NAME || "zedtify",
    user: process.env.DB_USER || "zedtify",
    password: process.env.DB_PASS || "zedtify",
    options: {
      dialect: process.env.DIALECT || "sqlite",
      host: process.env.HOST || "localhost",
      storage: "./zedtify.sqlite"
    }
  },
  authentication: {
    jwtSecret: process.env.JWT_SECRET || "secret"
  }
};
