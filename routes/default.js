const express = require('express');

const router = express.Router() // router is object

const resData = require('../utilities/restaurant-data') 

//hold standard route not relate to restaurant
router.get("/", function (req, res) {
    res.render("index");
    // we can omit extension because we have ejx that will automatically look for ejx files
  });


router.get("/about", function (req, res) {
    console.log("ok");
    const storedRestaurants = resData.getStoredRestaurants();
    //sort on the name
    console.log("nok")
    res.render("about", {
      numberOfRestaurants: storedRestaurants.length,
      restaurants: storedRestaurants,
    });
    //render has second parameter is object
  });


module.exports = router; // export file