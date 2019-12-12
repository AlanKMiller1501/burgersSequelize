const router = require('express').Router();
const db = require('../models');

router.get("/", function (req, res) {
    db.Burger.findAll({ raw: true })
        .then(function (data) {
            console.log(data)
            res.render("index", { burgers: data })
        })
})

router.post("/api/burger", function (req, res) {
    db.Burger.create({
        burger_name: req.body.burger_name
    })
        .then(function (data) {
            console.log(data);
            res.redirect("/")
        });
});

router.post("/api/changeDevoured/:id", function(req, res){
    db.Burger.update({
        devoured: req.body.devoured
    }, {
        where: {
            id: req.params.id
        }
    })
        .then(function(data){
            console.log(data);
            res.redirect("/")
        })
})

module.exports = router;