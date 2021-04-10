const Producto = require("../models/Producto");//importamos el modelo 

exports.crearProducto = async (req, res) =>{
    //console.log(req.body);//imprimimos lo que nos envian desde postman

    try {//se pone el try por si pasa algo
        let producto;

        //creamos nuestro producto
        producto = new Producto(req.body);//el cuerpo que nos envia el cliente en json 

        await producto.save();// para almacenar el producto en la bd
        res.send(producto);//de que ya se guardo sin problemas se regresa al cliente

    } catch (error) {
        console.log(error);
        res.status(500).send('Hubo un error');
    }
}
exports.obtenerProductos = async (req, res) =>{//asincrona por que hace peticion a la bd
    try {
        
        const productos = await Producto.find();
        res.json(productos);//enviamos al cliente los productos
        //console.log(productos);
    } catch (error) {
        console.log(error);
        res.status(500).send('hubo un error');
    }
}

exports.actualizarProducto = async (req, res) =>{
    try {
        const { nombre, categoria, ubicacion, precio } = req.body;//la actualizacion del cliente
        let producto = await Producto.findById(req.params.id);//se hace la peticion a la base datos por su id

        if(!producto){
            res.status(400).json( { msg: 'No existe el producto'} )
        }

        producto.nombre = nombre;//se actualizan las variables
        producto.categoria = categoria;
        producto.ubicacion = ubicacion;
        producto.precio = precio;

        //se actualiza el producto
        producto = await Producto.findOneAndUpdate({_id: req.params.id}, producto, {new: true})//se busca por id, se manda la actualizacion y new debe ser true
        res.json(producto);

    } catch (error) {
        console.log(error);
        res.status(500).send('hubo un error');
    }
}

exports.obtenerProducto = async (req, res) =>{
    try {
        let producto = await Producto.findById(req.params.id);//se hace la peticion a la base datos por su id

        if(!producto){
            res.status(400).json( { msg: 'No existe el producto'} )
        }
        res.json(producto);

    } catch (error) {
        console.log(error);
        res.status(500).send('hubo un error');
    }
}

exports.eliminarProducto = async (req, res) =>{
    try {
        let producto = await Producto.findById(req.params.id);//se hace la peticion a la base datos por su id
        //lo busca
        if(!producto){
            res.status(400).json( { msg: 'No existe el producto'} )//si no lo encuentra
        }

        await Producto.findByIdAndRemove({ _id: req.params.id })//se elimna
        res.json({msg: 'Producto eliminado con extio!'});

    } catch (error) {
        console.log(error);
        res.status(500).send('hubo un error');
    }
}