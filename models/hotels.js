var Sequelize = require ('sequelize');
var db = require('./db.js');

var Hotel = db.define('hotel', {

    name: {type: Sequelize.STRING},
    num_stars: {type: Sequelize.INTEGER},
    amenities: {type: Sequelize.STRING,
        get: function()  {
        var amenStr = this.getDataValue('amenities');

        var amenArr=amenStr.split(',');
        amenArr.map((item)=>{
            item.trim();
        })
        this.setDataValue(amenArr);
        }//,(string of comma delimited items) //
    }

});

module.exports = Hotel;
