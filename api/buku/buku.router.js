const{
    controllerAdd,
    controllerGet,
    controllerGetId,
    controllerUpdate,
    controllerDelete
} = require('./buku.controller');
const router = require('express').Router();
const {checkToken} = require("../../auth/token_validation")
 
router.post('/', checkToken , controllerAdd);
router.get('/', controllerGet);
router.get('/id', controllerGetId);
router.patch('/',checkToken, controllerUpdate);
router.delete('/',checkToken, controllerDelete);
 
module.exports = router