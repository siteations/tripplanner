var Sequelize = require ('sequelize');
var db = new Sequelize("Postgres://localhost:5432/tripplanner", {logging:false});

// db.authenticate()
//   .then(function(err) {
//     console.log('Connection has been established successfully.');
//   })
//   .catch(function (err) {
//     console.log('Unable to connect to the database:', err);
//   });


var Place = db.define('Place',{

    address: {type: Sequelize.STRING},
    city: {type: Sequelize.STRING},
    state: {type: Sequelize.STRING},
    phone: {type: Sequelize.STRING},
    location: {type: Sequelize.ARRAY(Sequelize.FLOAT)} //google-map api?
});

var Hotel = db.define('Hotel', {

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


var Activity = db.define('Activity', {

    name: {type: Sequelize.STRING},
    age_range: {type: Sequelize.STRING}

});

var Restaurant = db.define('Restaurant', {

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


//Associations

Hotel.belongsTo(Place);
Restaurant.belongsTo(Place);
Activity.belongsTo(Place);

//Hotels, activities, and restaurants should furthermore be associated with a particular place.



module.exports = { Place: Place,
                   Hotel: Hotel,
                   Activity: Activity,
                   Restaurant: Restaurant
                    };
