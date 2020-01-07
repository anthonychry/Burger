var db = require("../models")

module.exports = function(app) {
    app.get("/", function(req, res) {
        db.Burger.findAll({}).then(function(results) {
            res.render("burger", { burger: results });
        });
    });

    app.post("/api/burgers", function(req, res) {
        console.log(req.body.type);
        db.Burger.create({
            type: req.body.type
        }).then(function(results) {
            res.json(results);
        });
    });

    app.put("/api/burgers/:id", function(req, res) {
        db.Burger.update({
            type: req.body.type,
            consume: true
        }, {
            where: {
                id: req.params.id
            }
        }).then(function(results) {
            console.log("you have eaten burger");
        });
    });

};