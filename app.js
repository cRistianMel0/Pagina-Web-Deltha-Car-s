const express = require('express');
const ejs = require('ejs');
const path = require('path');
const routes = require('./routes/routes')
const ABRAZADERAS = require('./public/js/Productos/abrazaderas');
const alternadores = require('./public/js/Productos/alternadores');



const app = express();

app.set('view engine', 'ejs');
app.engine('ejs', ejs.renderFile);


// Usa las rutas definidas en 'routes.js'
app.use('/', routes);

// Configuración para servir archivos estáticos
app.use(express.static(__dirname + '/public'));// Ruta a CSS


app.get('/', (req, res) => {
    // Renderiza la vista con el objeto
    res.render('index');
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Servidor en ejecución en http://localhost:${PORT}`);
});
