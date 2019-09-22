const express = require('express');
const burger = require('../models/burger.js');

const router = express.Router();

//get 
router.get('/', (req, res) => {
    burger.all(burgers => {
        let burgersObj = { burgers };
        console.log(burgersObj);
        res.render('index', burgersObj);
    });
});

//post
router.post('/api/burgers', (req, res) => {
    burger.create(["burger_name", "devoured"], [req.body.burger_name, req.body.devoured], (result) => {
        console.log(req.body.burger_name, req.body.devoured);
        res.json({ id: result.insertId });
    });
});

//put
router.put('/api/burgers/:id', (req, res) => {
    let condition = "id = " + req.params.id;

    console.log("condition" + condition);

    burger.update(
        {
            devoured: req.body.devoured
        },
        condition,
        function (result) {
            if (result.changedRows === 0) {
                // If no rows were changed, then the ID must not exist, so 404
                return res.status(404).end();
            }
            res.status(200).end();
        }
    );
});
module.exports = router;