const express = require('express');
const automoviles = require('../public/js/automoviles js/automoviles');
const router = express.Router();

router.get('/', (req, res) => {
    res.render('index');
});

router.get('/stock', (req, res) => {
    res.render('stock', { automoviles: automoviles });
});

router.get('/financiacion', (req, res) => {
    res.render('financiacion');
});

router.get('/contact', (req, res) => {
    res.render('contact');
});

router.get('/renderCar/:id', (req, res) => {
    const carId = req.params.id;
    const car = automoviles.find(car => car.id === parseInt(carId));
    res.render('renderCar', { car });
});

module.exports = router;
