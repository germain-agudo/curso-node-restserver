//archivo para crear funciones y exportalas

const { response, request } = require('express');
const bcryptjs = require('bcryptjs');


const Usuario = require('../models/usuario');


const usuariosGet = async (req = request, res = response)=> {
const {limite=5, desde=0} = req.query;
const query = {estado : true };

/* const usuarios = await Usuario.find(query)
      .skip(Number(desde))
      .limit(Number(limite));
const  total  = await Usuario.countDocuments(query); */

const [total, usuarios] =await Promise.all([
  Usuario.countDocuments(query),
  Usuario.find(query)
      .skip(Number(desde))
      .limit(Number(limite))

]);

      res.json({
        total,
        usuarios
        // resp
        /* total,
        usuarios */
      });

  /*    const {q, nombre = 'No name ', apikey, page = 1, limit} = req.query;
     res.json({   
        msg : 'get API - controlador',
        q,
        nombre,
        apikey,
        page,
        limit
    }); */
  }
  
  const usuariosPost    = async (req, res = response)=> {
    /* res.status(201).json({
     ok : true, */
     
     

     const body = req.body; 
     //  asi es normal pero con desustructuracion es asi
     // const  {nombre , edad} = req.body;
     
    /*  const usuario = new Usuario(body);// nueva instancia de mu ususario 
      await usuario.save()  */
    
      const {nombre, correo, password, rol}= req.body;
      const usuario = new Usuario({nombre, correo, password,rol});

      ///verificar si el correo existe
    /*   const existeEmail = await Usuario.findOne({correo});
      if (existeEmail) {
          return res.status(400).json({
            msg:'Ese correo ya esta registrado'
          })
        
      } */
      
/**
 *    
 */

      //encriptar la contraseña
      const salt = bcryptjs.genSaltSync();//entre mas vueltas que da su encrptacion-por defecto son 10
      usuario.password = bcryptjs.hashSync(password, salt);//esto realiza la encriptacion en una sola via


      //guardar en BD
      await usuario.save();

      // se regresa el ususario grabado
     res.json({        
        // msg : 'post API - controlador',
        // nombre,este seria desestructurado
        // edad

        // body
        usuario 
    });
  }

  const usuariosPut    = async (req, res = response)=> {
    // const {id } = req.params;  si existen mas paramentros en la ruta
    const id = req.params.id; //el id es com le pusimos en la ruta
    

    const {_id,password, google, correo,... resto}= req.body;
    
    //TODO: valiar contra base de datos
    if (password) {
      const salt = bcryptjs.genSaltSync();
      resto.password = bcryptjs.hashSync(password, salt);

    }

    const usuario =  await Usuario.findByIdAndUpdate(id,resto);

    res.json(    
        // msg : 'put API - controlador',
        usuario
    );
  }

  const usuariosPatch   =  (req, res = response)=> {
    res.json({        
        msg : 'patch API - controlador'
    });
  }
  const usuariosDelete  = async ( req, res = response)=> {
    const { id } = req.params;

    //fisicamente lo borramos
    // const usuario = await Usuario.findByIdAndDelete( id);

    //cambiarle a false
    const usuario = await Usuario.findByIdAndUpdate(id, {estado: false});
    res.json({      
        // msg : 'delete API - controlador'
        usuario
    });
  }



module.exports={
    usuariosGet,
    usuariosPost,
    usuariosPut,
    usuariosPatch,
    usuariosDelete

}