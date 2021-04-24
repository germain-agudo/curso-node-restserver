const{ Router} = require('express');
const { usuariosGet,
   usuariosPut,
   usuariosPost,
   usuariosPatch,
   usuariosDelete} = require('../controllers/usuarios');

const router = Router();
//              no se ejecuta la funcion solo se hace la referencia a la misma
router.get(   '/', usuariosGet);
router.post(  '/', usuariosPost);
router.put(   '/:id', usuariosPut);
router.patch( '/', usuariosPatch );
router.delete('/', usuariosDelete);









module.exports = router;