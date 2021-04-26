
//ESte objeto me va a yudar a visialisar que informacion quiero hacer
/* 
recordemo que mongo a diferencia de base de datos relacionales se graba en objetos
como el que se muestra a continuacion o  conocido como un documento
estos documentos de graban dentro de colecciones y las colecciones para 
gente que viene de base de datos relacionales es una tabla
*/

/* {
    nombre:'asdf',
    correo:'dsdfadf@asdf',
    password : '34234',
    img:'adfasdf',
    rol: 'asdfasdf',
    estado: false,
    google:false
    
} */

const {Schema, model } = require('mongoose');

const UsuarioSchema = Schema({
    nombre : {
        type : String,
        required:[true, 'El nombre es obligatorio'],
    },
    correo : {
        type : String,
        required:[true, 'El correo es obligatorio'],
        unique: true,
    },
    password: {
        type : String,
        required:[true, 'La contraseña es obligatoria'],
    },
    img: {
        type : String,        
    },
    rol: {
        type : String,
        required : true,
        // enum:['ADMIN_ROLE','USER_ROLE']        
    },
    estado: {
        type : Boolean,
        default: true              
    },
    google: {
        type : Boolean,
        default: false               
    },
});

//Quiero sobre escribir el metodo toJSON que es el que se ejecuta cuando se llama cuando llamamos el modelo y lo imprimimos
//asi que lo vamos a sobreescribir

UsuarioSchema.methods.toJSON = function () {
    //sacamos los que no queremos mostrar y todo lo restro los unificamos en uno solo
    const {__v, password,... usuario}= this.toObject();
    return usuario;

}




module.exports = model('Usuario', UsuarioSchema);