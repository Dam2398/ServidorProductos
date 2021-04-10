const mongoose = require('mongoose');
//Producto.js esta recibiendo como parametro un objeto todos los valores nombre....
//aqui van las validaciones
const ProductoSchema = mongoose.Schema({
    nombre: {
        type: String,
        required :true
    },
    categoria: {
        type: String,
        required :true
    },
    ubicacion: {
        type: String,
        required :true
    },
    precio: {
        type: Number,
        required :true
    },
    fechaCreacion: {
        type: Date,
        default: Date.now()
    }

});
//se crea solo con la fecha actual
module.exports = mongoose.model('Producto', ProductoSchema);
