const express = require('express');
const burger = require('../models/burger.js');

const router = express.Router();

router.get('/', (req, res) => {
    burger.all(data => {
        let burgerObj = {
            burger: data
        };
        console.log(burgerObj);
        res.render('index', burgerObj)
    });
});

router.post('/api/burgers', (req, res) => {
    burger.create(["burger_name", "devoured"], [req.body.burger_name, req.body.devoured], (result) => {
        res.json({ id: result.insertId })
    });
});

module.exports = router;