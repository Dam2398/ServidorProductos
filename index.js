const express = require('express');
const conectarDB = require('./config/db');
const cors = require('cors');


//creamos el servidor
const app = express();
const port = 4000;

//Conectamos a la BD
conectarDB();//se llama de db.js

app.use(cors());
app.use(express.json());//estamos habilitando para uqe puedan enviar json hacia nuestra palicacion

//cuadno el usuario teclee la direccion /api/productos se importa la router de producto.js
app.use('/api/productos', require('./routes/producto'));  //se importa el archivo de porducto.js|||se pone http://localhost:4000/api/productos en postman

//definicion de la ruta principal
/*app.get('/', (req, res) => {
    res.send('Hola mundo');
    res.end();
})*/

app.listen(port, () => {
    console.log(`El servidor esta corriendo perfectamente desde el puerto ${port}`)
})