var Sequelize = require ('sequelize');
var db = new Sequelize("Postgres://localhost:5432/tripplanner", {logging:false});

module.exports = db;
