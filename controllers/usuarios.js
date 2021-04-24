//archivo para crear funciones y exportalas

const { response, request } = require('express');


const usuariosGet = (req = request, res = response)=> {
    const {q, nombre = 'No name ', apikey, page = 1, limit} = req.query;
  
  res.json({   
        msg : 'get API - controlador',
        q,
        nombre,
        apikey,
        page,
        limit
    });
  }
  
  const usuariosPost    = (req, res = response)=> {
    /* res.status(201).json({
     ok : true, */

    // const body = req.body; asi es normal pero con desustructuracion es asi
    const  {nombre , edad} = req.body;

    res.json({        
        msg : 'post API - controlador',
        nombre,
        edad
        // body este seria normal
    });
  }

  const usuariosPut    = (req, res = response)=> {
    // const {id } = req.params;  si existen mas paramentros en la ruta
    const id = req.params.id; //el id es com le pusimos en la ruta
    
    res.json({      
        msg : 'put API - controlador',
        id
    });
  }

  const usuariosPatch   =  (req, res = response)=> {
    res.json({        
        msg : 'patch API - controlador'
    });
  }
  const usuariosDelete  =( req, res = response)=> {
    res.json({      
        msg : 'delete API - controlador'
    });
  }



module.exports={
    usuariosGet,
    usuariosPost,
    usuariosPut,
    usuariosPatch,
    usuariosDelete

}