var express = require ('express');
var routes = express.Router();
var Promise = require('bluebird');
var model = require('../models/').db;

var hotel = model.models.hotel;
var restaurant = model.models.restaurant;
var activity = model.models.activity;



routes.get('/', (req,res)=>{
    //console.dir(model.models.hotel);

    var motel = hotel.findAll({});
    var diner = restaurant.findAll({});
    var fun = activity.findAll({});

    Promise.all([motel,diner,fun]).spread((motelArr, dinerArr, funArr)=>{
        var hotelOps = motelArr;
        var restaurantOps = dinerArr;
        var activityOps = funArr;

        res.render('index.html',{hotelOps:hotelOps,restaurantOps:restaurantOps,activityOps:activityOps});
    })



    //res.render('index.html',{page:'placeholder'});
});


module.exports = routes;
