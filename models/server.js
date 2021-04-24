const express = require('express')
const cors = require('cors');

class Server{

    constructor(){
        this.app = express();
        this.port= process.env.PORT;
        this.usuariosPath = '/api/usuarios'

        /* Middleweares :+ Funciones que vana  añadirle otra funcionalidad a mi web serer
        en pocas palabras es como una funcion que siempre se va a ejecutara cuando se levate mi webserver
        */
       this.middleweares();

        //Rutas de la aplicación
        this.routes();
    }

    middleweares(){
     // el use es para decir que se trata de un middleweare
     //dentro la carpeta publica

            //CORS
        this.app.use(cors());

            //Lectura y parseo del body
        this.app.use( express.json() );

            //directorio publico
        this.app.use( express.static('public'));
    }

    routes(){
       this.app.use(this.usuariosPath, require('../routes/usuarios'));
    }

    listener(){
        this.app.listen(this.port, ()=>{
            console.log('Servidor corriendo en el puerto ', this.port);
        });
        
    }
}

module.exports= Server;