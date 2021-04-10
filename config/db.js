const mongoose = require('mongoose');
require('dotenv').config({ path: 'variables.env'});//acceder a la variable de entorno

const conectarDB = async () => {//asincrono
    try {//await porque puede tardar un poco
        await mongoose.connect(process.env.DB_MONGO, {//el nombre que esta en variables.env
            useNewUrlParser: true,
            useUnifiedTopology: true,
            useFindAndModify: false
        })
        console.log('BD Conectada');

    } catch (error) {
        console.log(error);
        process.exit(1); //Detener la app
    }
}
 
module.exports = conectarDB//se exporta para ser usada en otra pestana 