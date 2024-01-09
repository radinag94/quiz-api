const { Sequelize } = require("sequelize");

const config = require("../config/config");

const sequelize = new Sequelize(
  config.development.database,
  config.development.username,
  config.development.password,
  {
    host: config.development.host,
    dialect: "postgres",
    omitNull: true,
    port: 8000,
    pool: {
      max: 5,
      min: 0,
      acquire: 30000,
      idle: 1000,
    },
  }
);

sequelize
  .authenticate()
  .then(() => {
    console.log("Connected to database");
  })
  .catch((err) => {
    console.log(err);
  });

const db = {
  sequelize: sequelize,
  Difficulty: require("../../models/difficulty")(sequelize),
  Question: require("../../models/question")(sequelize),
  Category: require("../../models/category")(sequelize),
};

module.exports = { db };
