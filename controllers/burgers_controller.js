const express = require('express');
const router = express.Router();
const burger = require('../models/burger');

// Create route for index that automatically loads all the burgers and sorts them into a list
router.get("/", function(req, res) {
    burger.all(function(data) {
        const createdBurgers = data.filter(burger => burger.devoured === 0);
        const devouredBurgers = data.filter(burger => burger.devoured === 1);
        res.render("index", {
            created: createdBurgers,
            devoured: devouredBurgers
        });
    })
});

router.post("/api/:burger", function(req, res) {
    burger.create([req.params.burger], function(result) {
        burger.all(function(data) {
            const createdBurgers = data.filter(burger => burger.devoured === 0);
            const devouredBurgers = data.filter(burger => burger.devoured === 1);
            res.render("index", {
                created: createdBurgers,
                devoured: devouredBurgers
            });
        })
    })
});

router.put("/api/:id", function() {
    
});

router.delete("/api/:id", function() {
    
});

module.exports = router;