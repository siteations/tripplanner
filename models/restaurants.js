var Sequelize = require ('sequelize');
var db = require('./db.js');


var Restaurant = db.define('restaurant', {

    name: {type: Sequelize.STRING},
    cuisine:  {type: Sequelize.STRING,
        get: function()  {
        var amenStr = this.getDataValue('cuisine');
        var amenArr=amenStr.split(',');

            amenArr.map((item)=>{
                item.trim();
            })
        this.setDataValue(amenArr);
        }
    },

    price: {type: Sequelize.INTEGER}

});

module.exports = Restaurant;
