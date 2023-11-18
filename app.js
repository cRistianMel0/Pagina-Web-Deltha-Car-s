const express = require('express');
const ejs = require('ejs');
const ABRAZADERAS = require('./js/Productos/abrazaderas');


const app = express();

app.set('view engine', 'ejs');
app.set('views', __dirname + '/views');

app.get('/', (req, res) => {


  // Renderiza la vista con el objeto
  res.render('index', { ABRAZADERAS });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Servidor en ejecución en http://localhost:${PORT}`);
});
