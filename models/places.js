var Sequelize = require ('sequelize');
var db = require('./db.js');


var Place = db.define('place',{

    address: {type: Sequelize.STRING},
    city: {type: Sequelize.STRING},
    state: {type: Sequelize.STRING},
    phone: {type: Sequelize.STRING},
    location: {type: Sequelize.ARRAY(Sequelize.STRING)}
    //location: {type: Sequelize.ARRAY(Sequelize.FLOAT)} //google-map api?
});

module.exports = Place;
