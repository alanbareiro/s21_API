const express = require('express');
const router = express.Router();
const clienteController = require('../controllers/clientecontroller');

router.get('/', clienteController.obtenerClientes);
router.post('/crear', clienteController.crearCliente);
router.put('/:id', clienteController.actualizarCliente);
router.delete('/:id', clienteController.eliminarCliente);

module.exports = router;


//Server 

/*
    https://railway.app/
    https://vercel.com/

*/