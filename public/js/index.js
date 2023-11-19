


document.addEventListener('DOMContentLoaded', function() {
    const abrazaderas = require('Productos/abrazaderas.js');
    const contenedor = document.getElementById('tab1P');
  
    productos.forEach((abrazadera, index) => {
      const card = document.createElement('div');
      card.classList.add('card');
      card.style.width = '18rem';
  
      const img = document.createElement('img');
      img.src = producto.rutaImagen;
      img.classList.add('card-img-top');
      img.alt = 'Imagen de producto';
  
      const cardBody = document.createElement('div');
      cardBody.classList.add('card-body');
  
      const titulo = document.createElement('h5');
      titulo.classList.add('card-title');
      titulo.textContent = producto.nombre;
  
      const categoria = document.createElement('p');
      categoria.classList.add('card-text');
      categoria.textContent = `Categoría: ${producto.categoria}`;
  
      cardBody.appendChild(titulo);
      cardBody.appendChild(categoria);
  
      card.appendChild(img);
      card.appendChild(cardBody);
  
      contenedor.appendChild(card);
    });
  });

