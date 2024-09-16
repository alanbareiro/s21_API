const express = require('express');
const router = express.Router();
const pedidosController = require('../controllers/pedidosController');

//Mostrar todos los Clientes

router.get('/', pedidosController.obtenerPedidos);
router.get('/cliente', pedidosController.obtenerPedido);

router.post('/crear', pedidosController.crearPedido);
router.put('/:id', pedidosController.actualizarPedido)
router.delete('/:id',pedidosController.eliminarPedido )

module.exports = router;