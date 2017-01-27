var Sequelize = require ('sequelize');
var db = require('./db.js');
var Hotel = require('./hotels.js');
var Activity = require('./activity.js');
var Place = require('./places.js');
var Restaurant = require('./restaurants.js');

// association
Hotel.belongsTo(Place);
Restaurant.belongsTo(Place);
Activity.belongsTo(Place);

module.exports = {
    db:db,
    // Hotel:Hotel,
    // Activity: Activity,
    // Place: Place,
    // Restaurant: Restaurant
    };
