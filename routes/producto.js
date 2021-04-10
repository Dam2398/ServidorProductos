/*
// Función tradicional
function (a){
  return a + 100;
}

// Desglose de la función flecha

// 1. Elimina la palabra "function" y coloca la flecha entre el argumento y el corchete de apertura.
(a) => {
  return a + 100;
}

// 2. Quita los corchetes del cuerpo y la palabra "return" — el return está implícito.
(a) => a + 100;

// 3. Suprime los paréntesis de los argumentos
a => a + 100;
*/


//Rutas para el producto
const express = require('express');//para poder acceder a lo que es el routeo
const router = express.Router();
const productContorller = require('../controllers/productoController');//se importa el controlador del productcontorller

//api/productos
router.post('/', productContorller.crearProducto);//verbo post
router.get('/',productContorller.obtenerProductos);//verbo get
router.put('/:id',productContorller.actualizarProducto);//verbo put para actualizar un producto
router.get('/:id',productContorller.obtenerProducto);//verbo get
router.delete('/:id', productContorller.eliminarProducto);

module.exports = router;