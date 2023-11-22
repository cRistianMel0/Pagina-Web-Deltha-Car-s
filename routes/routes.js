const express = require('express');

// Importar todos los objetos
const automoviles = require('../public/js/automoviles js/automoviles');
const abrazaderas = require('../public/js/Productos/abrazaderas');
const alternadores = require('../public/js/Productos/alternadores');
const arranques = require('../public/js/Productos/arranques');
const bobinas = require('../public/js/Productos/bobinas');
const bombillerasLed = require('../public/js/Productos/bombillerasLed');
const bujias = require('../public/js/Productos/bujias');
const cintasLed = require('../public/js/Productos/cintasLed');
const conectores = require('../public/js/Productos/conectores');
const correaAccesorios = require('../public/js/Productos/correaAccesorios');
const elevadoresRelay12V = require('../public/js/Productos/elevadoresRelayV12');
const embolo = require('../public/js/Productos/embolo');
const filtrosAire = require('../public/js/Productos/filtrosAire');
const inyectores = require('../public/js/Productos/inyectores');
const liquidoFrenos = require('../public/js/Productos/liquidoFrenos');
const mangueras = require('../public/js/Productos/magueras');
const patinkitReparacion = require('../public/js/Productos/patinKitReparacion');
const pines = require('../public/js/Productos/pines');
const portaEscobillas = require('../public/js/Productos/portaEscobillas');
const retenedores = require('../public/js/Productos/retenedores');
const sensores = require('../public/js/Productos/sensores');
const tacometros = require('../public/js/Productos/tacometros');
const terminales = require('../public/js/Productos/terminales');
const tornilleriaCilindrica = require('../public/js/Productos/tornilleriasCilindircas');
const varios = require('../public/js/Productos/varios');
const vendix = require('../public/js/Productos/vendix');
const wasa = require('../public/js/Productos/wasa');
const correasReparticion = require('../public/js/Productos/correaReparticion');
const filtrosGasolina = require('../public/js/Productos/filtroGasolina');

const router = express.Router();

// Agrupar todos los objetos en un solo objeto
const stock = {
    automoviles,
    abrazaderas,
    alternadores,
    arranques,
    bobinas,
    bombillerasLed,
    bujias,
    cintasLed,
    conectores,
    correaAccesorios,
    correasReparticion,
    elevadoresRelay12V,
    filtrosGasolina,
    embolo,
    filtrosAire,
    inyectores,
    liquidoFrenos,
    mangueras,
    patinkitReparacion,
    pines,
    portaEscobillas,
    retenedores,
    sensores,
    tacometros,
    terminales,
    tornilleriaCilindrica,
    varios,
    vendix,
    wasa
};

router.get('/', (req, res) => {
    res.render('index');
});

// Pasar el objeto 'stock' a la plantilla 'stock'
router.get('/stock', (req, res) => {
    res.render('stock', { stock });
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
