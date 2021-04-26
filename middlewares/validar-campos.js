// un middleware es una funcion

const { validationResult } = require('express-validator');


//los middlewares tiene un tercer argumento que es next, donde si no cayo en el error siguiw con el sigiente controlador 
const validarCampos=(req, res, next)=>{
     
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json(errors);
    }
next();
}






module.exports={
    validarCampos
}

