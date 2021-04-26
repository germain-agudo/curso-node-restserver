const Role = require('../models/role');
const Usuario = require('../models/usuario');


const esRoleValido = async (rol='')=>{
    const existeRol = await Role.findOne({rol});
    if (!existeRol) {
          throw new Error(`El rol ${ rol } no está registrada en la base de datos`);
    } 
 }

 const emailExiste = async (correo='')=>{
    const existeEmail = await Usuario.findOne({correo});
    if (existeEmail) {
        /* return res.status(400).json({
          msg:'Ese correo ya esta registrado'
        }) */
        throw new Error(`El correo : ${ correo }, ya esta registrado`);
      
    } 

 }
 const existeUsuarioPorId = async (id = '')=>{
    const existeUsuario = await Usuario.findById(id);
    if (!existeUsuario) {
        /* return res.status(400).json({
          msg:'Ese correo ya esta registrado'
        }) */
        throw new Error(`El id no existe ${id}`);
      
    } 

 }

module.exports ={
    esRoleValido,
    emailExiste,
    existeUsuarioPorId,
}