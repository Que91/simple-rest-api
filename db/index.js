"use strict";

const Sequelize = require("sequelize");
const process = require("process");

const config = {
    username:"root",
    password:"Torre$247",
    database: "quotum_class",
    host: "127.0.0.1",
    dialect: "mysql",
}
const db = {};
config.logging = console.log;

const sequelize = new Sequelize(
    config)

db.sequelize = sequelize;
db.Sequelize = Sequelize;
// sequelize
//     .authenticate()
//     .catch((err) => {
//         console.log("Failed to establish database connection: " + err.message);
//         process.exit();
//     })
//     .then(() => {
//         console.log("Successfully connected to database.");
//         db.sequelize.sync({force: true})
//         // db.sequelize.sync({ alter: true });
//     });

module.exports = db;
