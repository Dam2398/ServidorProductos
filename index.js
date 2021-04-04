const express = require('express');

//creamos el servidor
const app = express();
const port = 4000;

//definicion de la ruta principal
app.get('/', (req, res) => {
    res.send('Hola mundo');
})

app.listen(port, () => {
    console.log(`El servidor esta corriendo perfectamente desde el puerto ${port}`)
})