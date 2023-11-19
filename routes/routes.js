// En un archivo separado para las rutas, por ejemplo, 'routes.js':
const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    res.render('index');
});

router.get('/stock', (req, res) => {
    res.render('stock');
});

router.get('/financiacion', (req, res) => {
    res.render('financiacion');
});

router.get('/contact', (req, res) => {
    res.render('contact');
});

module.exports = router;
